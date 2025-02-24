import React, { useCallback, useEffect, useRef, useState } from "react";
import type * as monaco from "monaco-editor/esm/vs/editor/editor.api";
import { Button, CheckBox, Label, Title, Select, Option } from "@ui5/webcomponents-react";
import Editor, { Monaco } from "@monaco-editor/react";
import FileIcon from "./img/file.svg";
import styles from "./Renderer.module.css";
import Error from "../error/Error";
import Loader from "../loader/Loader";
import exampleData from "./example";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { generateHtml, generateMarkdown } from "@sap/csn-interop-renderer";

type OutputFormat = "markdown" | "html" | "web-component";

export default function Renderer(): JSX.Element {
  const [csnStringValue, setCsnStringValue] = useState<string>("");
  const [outputFormat, setOutputFormat] = useState<OutputFormat>("html");
  const [renderedContent, setRenderedContent] = useState<string>("");
  const [autoRun, setAutoRun] = useState(false);
  const [isRendering, setIsRendering] = useState<boolean>(false);
  const [error, setError] = useState<unknown | undefined>(undefined);
  const monacoRef = useRef<Monaco>();
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor>();

  const generateContent = async (input: string, format: OutputFormat): Promise<void> => {
    if (!input) return;

    setIsRendering(true);
    setError(undefined);

    try {
      const trimmedInput = JSON.parse(input.trim().replace(/[\n\r\t]/gm, ""));
      let content: string;

      switch (format) {
        case "markdown":
          content = await generateMarkdown(trimmedInput);
          break;
        case "html":
          content = await generateHtml(trimmedInput);
          break;
        case "web-component":
          content = JSON.stringify(trimmedInput, null, 2);
          break;
        default:
          content = "";
      }

      setRenderedContent(content);
    } catch (error) {
      setError(error);
    } finally {
      setIsRendering(false);
    }
  };

  const handleEditorDidMount = useCallback((editor, monaco) => {
    editorRef.current = editor;
    monacoRef.current = monaco;
  }, []);

  const onChange = (value, e): void => {
    const change = e.changes[0];
    if (
      change.range.startLineNumber === 1 &&
      change.range.startColumn === 1 &&
      change.text.length === value.length &&
      value.length > 0
    ) {
      setRenderedContent("");
    } else if (value.length === 0) {
      setRenderedContent("");
    }
    setCsnStringValue(value);
  };

  const onFormatChange = async (e): Promise<void> => {
    const newFormat = e.detail.selectedOption.value as OutputFormat;
    setOutputFormat(newFormat);
    if (csnStringValue) {
      await generateContent(csnStringValue, newFormat);
    }
  };

  const onAutoRunChange = (e): void => {
    setAutoRun(e.target.checked);
  };

  const onTryExampleClick = (): void => {
    if (editorRef.current) {
      editorRef.current.getModel()?.setValue(JSON.stringify(exampleData, null, "\t"));
    }
  };

  const onRunClick = useCallback(() => {
    if (csnStringValue) {
      generateContent(csnStringValue, outputFormat);
    }
  }, [csnStringValue, outputFormat]);

  useEffect(() => {
    if (autoRun && csnStringValue) {
      generateContent(csnStringValue, outputFormat);
    }
  }, [csnStringValue, autoRun, outputFormat]);

  useEffect(() => {
    if (editorRef.current && monacoRef.current) {
      const model = editorRef.current.getModel();
      monacoRef.current.editor.setModelLanguage(model, "json");
      editorRef.current.getAction("editor.action.formatDocument").run();
    }
  }, [editorRef, monacoRef]);

  const getSideBarContent = (): JSX.Element => {
    if (error) {
      return (
        <div style={{ textAlign: "center", marginTop: "150px" }}>
          <Error name="unableToLoad" title="Error while rendering" description={String(error)} />
        </div>
      );
    }
    if (isRendering) {
      return (
        <div style={{ textAlign: "center", marginTop: "150px" }}>
          <Loader />
          <Title style={{ marginTop: "20px" }} size="H3">
            Rendering
          </Title>
        </div>
      );
    }
    return (
      <div style={{ textAlign: "center", marginTop: "150px" }}>
        <FileIcon />
        <Title style={{ marginTop: "20px" }} size="H3">
          Paste some CSN JSON content input in the editor!
        </Title>
        <Label style={{ marginTop: "5px" }}>or</Label>
        <div style={{ marginTop: "5px" }}>
          <Button design="Emphasized" onClick={onTryExampleClick}>
            Try out Example
          </Button>
        </div>
      </div>
    );
  };

  const renderOutput = (): JSX.Element => {
    switch (outputFormat) {
      case "markdown":
        return (
          <div className={styles.RenderWrapper}>
            <Markdown rehypePlugins={[rehypeRaw]}>{renderedContent}</Markdown>
          </div>
        );
      case "html":
        return (
          <div className={styles.RenderWrapper}>
            <div dangerouslySetInnerHTML={{ __html: renderedContent }} />
          </div>
        );
      case "web-component":
        return (
          <div className={styles.RenderWrapper}>
            <csn-renderer source={renderedContent} />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.ColumnContainer} data-ui5-compact-size>
      <div className={styles.Column}>
        <div className={styles.Bar}>
          <div className={styles.BarSpacer}>
            <Select onChange={onFormatChange}>
              <Option value="html">HTML</Option>
              <Option value="markdown">Markdown</Option>
              <Option value="web-component">Web-Component</Option>
            </Select>
          </div>
          <div className={styles.BarItem}>
            <CheckBox text="auto-run" checked={autoRun} onChange={onAutoRunChange} />
            <Button disabled={autoRun} design="Emphasized" onClick={onRunClick}>
              RUN
            </Button>
          </div>
        </div>
        <div className={styles.Editor}>
          <Editor
            defaultLanguage="json"
            onMount={handleEditorDidMount}
            options={{
              automaticLayout: true,
              lineNumbers: "on",
              lineNumbersMinChars: 6,
              minimap: {
                enabled: false,
              },
              hover: {
                delay: 500,
                sticky: false,
              },
              tabSize: 2,
            }}
            onChange={onChange}
          />
        </div>
      </div>
      {error === undefined && renderedContent !== "" && !isRendering ? (
        <div className={styles.Column}>{renderOutput()}</div>
      ) : (
        <div className={styles.Sidebar}>
          <div className={styles.SideBar}>{getSideBarContent()}</div>
        </div>
      )}
    </div>
  );
}
