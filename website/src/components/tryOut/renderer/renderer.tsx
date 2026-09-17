import { type ComponentProps, type ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { Button, CheckBox, Select, Option } from "@ui5/webcomponents-react";
import Editor, { type OnChange, useMonaco } from "@monaco-editor/react";
import styles from "./renderer.module.css";
import exampleData from "./example.json";
import { generateHtml, generateMarkdown, type AnnotationLinkCallbacks } from "@sap/csn-interop-renderer";
import RenderedOutput from "./renderedOutput";
import SidebarContent from "./sidebarContent";
import type { OutputFormat } from "./types";

const exampleAnnotationLinkCallbacks: AnnotationLinkCallbacks = {
  "@EntityRelationship.entityType": () => "https://example.com/",
  "@ODM.entityName": () => "https://example.com/",
  "@ODM.oidReference.entityName": () => "https://example.com/",
};

export default function Renderer(): ReactNode {
  const [csnStringValue, setCsnStringValue] = useState<string>("");
  const [outputFormat, setOutputFormat] = useState<OutputFormat>("html");
  const [renderedContent, setRenderedContent] = useState<string>("");
  const [autoRun, setAutoRun] = useState(false);
  const [isRendering, setIsRendering] = useState<boolean>(false);
  const [error, setError] = useState<unknown>(null);
  const renderRequestRef = useRef(0);
  const monaco = useMonaco();

  const generateContent = useCallback(async (input: string, format: OutputFormat): Promise<void> => {
    if (!input) return;

    const requestId = ++renderRequestRef.current;
    setIsRendering(true);
    setError(null);

    try {
      const parsedInput = JSON.parse(input);
      let content: string;

      switch (format) {
        case "markdown":
          content = await generateMarkdown(parsedInput);
          break;
        case "html":
          content = await generateHtml(parsedInput, {
            annotationLinkCallbacks: exampleAnnotationLinkCallbacks,
          });
          break;
        case "web-component":
          content = JSON.stringify(parsedInput, null, 2);
          break;
      }

      if (renderRequestRef.current === requestId) {
        setRenderedContent(content);
      }
    } catch (error) {
      if (renderRequestRef.current === requestId) {
        setError(error);
      }
    } finally {
      if (renderRequestRef.current === requestId) {
        setIsRendering(false);
      }
    }
  }, []);

  useEffect(() => {
    if (!monaco) return;

    monaco.json.jsonDefaults.setDiagnosticsOptions({
      validate: true,
      allowComments: true,
      schemas: [{ uri: "https://sap.github.io/csn-interop-specification/spec-v1/csn-interop-effective.schema.json" }],
      enableSchemaRequest: true,
      schemaRequest: "warning",
    });
  }, [monaco]);

  useEffect(() => {
    if (autoRun && csnStringValue) {
      void generateContent(csnStringValue, outputFormat);
    }
  }, [autoRun, csnStringValue, generateContent, outputFormat]);

  const onChange = useCallback<OnChange>((value, e): void => {
    const nextValue = value ?? "";
    const change = e.changes[0];
    const replacesEntireDocument =
      change !== undefined &&
      change.range.startLineNumber === 1 &&
      change.range.startColumn === 1 &&
      change.text.length === nextValue.length &&
      nextValue.length > 0;

    if (replacesEntireDocument || nextValue.length === 0) {
      setRenderedContent("");
    }
    setCsnStringValue(nextValue);
  }, []);

  const onFormatChange = useCallback<NonNullable<ComponentProps<typeof Select>["onChange"]>>(
    async (e): Promise<void> => {
      const newFormat = e.detail.selectedOption.value as OutputFormat;
      setOutputFormat(newFormat);
      if (csnStringValue) {
        await generateContent(csnStringValue, newFormat);
      }
    },
    [csnStringValue, generateContent],
  );

  const onAutoRunChange = useCallback<NonNullable<ComponentProps<typeof CheckBox>["onChange"]>>((e): void => {
    setAutoRun(e.target.checked);
  }, []);

  const onTryExampleClick = useCallback((): void => {
    setRenderedContent("");
    setCsnStringValue(JSON.stringify(exampleData, null, "\t"));
  }, []);

  const onRunClick = useCallback(() => {
    if (csnStringValue) {
      void generateContent(csnStringValue, outputFormat);
    }
  }, [csnStringValue, generateContent, outputFormat]);

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
            value={csnStringValue}
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
      {error === null && renderedContent !== "" && !isRendering ? (
        <div className={styles.Column}>
          <RenderedOutput format={outputFormat} content={renderedContent} />
        </div>
      ) : (
        <div className={styles.Sidebar}>
          <div className={styles.SideBar}>
            <SidebarContent error={error} isRendering={isRendering} onTryExampleClick={onTryExampleClick} />
          </div>
        </div>
      )}
    </div>
  );
}
