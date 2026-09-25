import {
  type ComponentProps,
  type CSSProperties,
  type DragEvent,
  type KeyboardEvent as ReactKeyboardEvent,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Button, Select, Option } from "@ui5/webcomponents-react";
import acceptIcon from "@ui5/webcomponents-icons/dist/accept.js";
import chainLinkIcon from "@ui5/webcomponents-icons/dist/chain-link.js";
import declineIcon from "@ui5/webcomponents-icons/dist/decline.js";
import navigationLeftArrow from "@ui5/webcomponents-icons/dist/navigation-left-arrow.js";
import navigationRightArrow from "@ui5/webcomponents-icons/dist/navigation-right-arrow.js";
import Editor, { type OnChange, useMonaco } from "@monaco-editor/react";
import styles from "./renderer.module.css";
import { exampleDocuments, type ExampleDocument } from "./examples";
import { generateHtml, generateMarkdown, type AnnotationLinkCallbacks } from "@sap/csn-interop-renderer";
import DefinitionExplorer, { type ExplorerState } from "./definitionExplorer";
import SidebarContent from "./sidebarContent";
import type { CsnDocument, OutputFormat } from "./types";

const exampleAnnotationLinkCallbacks: AnnotationLinkCallbacks = {
  "@EntityRelationship.entityType": () => "https://example.com/",
  "@ODM.entityName": () => "https://example.com/",
  "@ODM.oidReference.entityName": () => "https://example.com/",
};

interface SharedExampleState {
  exampleId: string;
  explorer: Partial<ExplorerState>;
}

type ShareStatus = "idle" | "copied" | "failed";

const getSharedExampleState = (): SharedExampleState | null => {
  if (typeof window === "undefined") return null;

  const searchParams = new URLSearchParams(window.location.search);
  const exampleId = searchParams.get("example");
  if (exampleId === null) return null;

  const view = searchParams.get("tab");
  const section = searchParams.get("section");
  return {
    exampleId,
    explorer: {
      definition: searchParams.get("definition") ?? undefined,
      view: view === "overview" || view === "elements" || view === "rendered" ? view : undefined,
      section:
        section === "annotations" || section === "properties" || section === "private-properties" ? section : undefined,
      item: searchParams.get("item") ?? undefined,
      element: searchParams.get("element") ?? undefined,
    },
  };
};

export default function Renderer(): ReactNode {
  const [csnStringValue, setCsnStringValue] = useState<string>("");
  const [outputFormat, setOutputFormat] = useState<OutputFormat>("html");
  const [renderedContent, setRenderedContent] = useState<string>("");
  const [isRendering, setIsRendering] = useState<boolean>(false);
  const [error, setError] = useState<unknown>(null);
  const [renderedDocument, setRenderedDocument] = useState<CsnDocument | null>(null);
  const [activeExample, setActiveExample] = useState<ExampleDocument | null>(null);
  const [sharedExampleState] = useState(getSharedExampleState);
  const [shareStatus, setShareStatus] = useState<ShareStatus>("idle");
  const [isDraggingFile, setIsDraggingFile] = useState(false);
  const [editorWidth, setEditorWidth] = useState(46);
  const [isEditorCollapsed, setIsEditorCollapsed] = useState(false);
  const [isExplorerCollapsed, setIsExplorerCollapsed] = useState(false);
  const renderRequestRef = useRef(0);
  const dragDepthRef = useRef(0);
  const workspaceRef = useRef<HTMLDivElement>(null);
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
        setRenderedDocument(parsedInput);
        setRenderedContent(content);
        setActiveExample(exampleDocuments.find(({ data }) => JSON.stringify(data, null, "\t") === input) ?? null);
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
    if (!csnStringValue) return;

    const timeout = window.setTimeout(() => void generateContent(csnStringValue, outputFormat), 350);
    return (): void => {
      window.clearTimeout(timeout);
    };
  }, [csnStringValue, generateContent, outputFormat]);

  const writeShareUrl = useCallback((exampleId: string, state: Partial<ExplorerState>): void => {
    if (typeof window === "undefined") return;

    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("example", exampleId);
    for (const [key, value] of Object.entries({
      definition: state.definition,
      tab: state.view,
      section: state.section,
      item: state.item,
      element: state.element,
    })) {
      if (value) {
        searchParams.set(key, value);
      } else {
        searchParams.delete(key);
      }
    }
    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}?${searchParams.toString()}${window.location.hash}`,
    );
  }, []);

  const clearShareUrl = useCallback((): void => {
    if (typeof window === "undefined") return;

    const searchParams = new URLSearchParams(window.location.search);
    ["example", "definition", "tab", "section", "item", "element"].forEach((key) => searchParams.delete(key));
    const query = searchParams.toString();
    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}${query ? `?${query}` : ""}${window.location.hash}`,
    );
  }, []);

  const onChange = useCallback<OnChange>(
    (value, e): void => {
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
      setRenderedDocument(null);
      setActiveExample(null);
      clearShareUrl();
      setCsnStringValue(nextValue);
    },
    [clearShareUrl],
  );

  const onFormatChange = useCallback<NonNullable<ComponentProps<typeof Select>["onChange"]>>((e): void => {
    setOutputFormat(e.detail.selectedOption.value as OutputFormat);
  }, []);

  const onTryExampleClick = useCallback(
    (example: ExampleDocument): void => {
      setRenderedContent("");
      setRenderedDocument(null);
      setError(null);
      setActiveExample(example);
      writeShareUrl(example.id, {});
      setCsnStringValue(JSON.stringify(example.data, null, "\t"));
    },
    [writeShareUrl],
  );

  const onStartOverClick = useCallback((): void => {
    renderRequestRef.current += 1;
    setCsnStringValue("");
    setRenderedContent("");
    setRenderedDocument(null);
    setActiveExample(null);
    clearShareUrl();
    setError(null);
    setIsRendering(false);
  }, [clearShareUrl]);

  const loadLocalFile = useCallback(
    async (file: File): Promise<void> => {
      if (file.size > 5_000_000) {
        setError(new Error("The selected file exceeds the 5 MB limit."));
        return;
      }
      if (!file.name.toLowerCase().endsWith(".json") && file.type !== "application/json") {
        setError(new Error("Choose a CSN JSON file."));
        return;
      }

      const input = await file.text();
      renderRequestRef.current += 1;
      setRenderedContent("");
      setRenderedDocument(null);
      setError(null);
      setIsRendering(false);
      setActiveExample(null);
      clearShareUrl();
      setCsnStringValue(input);
    },
    [clearShareUrl],
  );

  const onDragEnter = useCallback((event: DragEvent<HTMLDivElement>): void => {
    if (!event.dataTransfer.types.includes("Files")) return;

    event.preventDefault();
    dragDepthRef.current += 1;
    setIsDraggingFile(true);
  }, []);

  const onDragLeave = useCallback((event: DragEvent<HTMLDivElement>): void => {
    if (!event.dataTransfer.types.includes("Files")) return;

    dragDepthRef.current -= 1;
    if (dragDepthRef.current <= 0) {
      dragDepthRef.current = 0;
      setIsDraggingFile(false);
    }
  }, []);

  const onDragOver = useCallback((event: DragEvent<HTMLDivElement>): void => {
    if (!event.dataTransfer.types.includes("Files")) return;

    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
  }, []);

  const onDrop = useCallback(
    (event: DragEvent<HTMLDivElement>): void => {
      event.preventDefault();
      dragDepthRef.current = 0;
      setIsDraggingFile(false);
      const [file] = event.dataTransfer.files;
      if (file !== undefined) void loadLocalFile(file);
    },
    [loadLocalFile],
  );

  const resizeEditor = useCallback((clientX: number): void => {
    const workspace = workspaceRef.current;
    if (workspace === null) return;

    const { left, width } = workspace.getBoundingClientRect();
    const nextWidth = ((clientX - left) / width) * 100;
    if (nextWidth < 14) {
      setIsEditorCollapsed(true);
      return;
    }

    setIsEditorCollapsed(false);
    setEditorWidth(Math.min(Math.max(nextWidth, 22), 72));
  }, []);

  const onResizeStart = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>): void => {
      event.preventDefault();
      event.currentTarget.setPointerCapture(event.pointerId);
      resizeEditor(event.clientX);
    },
    [resizeEditor],
  );

  const onResizeMove = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>): void => {
      if (event.currentTarget.hasPointerCapture(event.pointerId)) {
        resizeEditor(event.clientX);
      }
    },
    [resizeEditor],
  );

  const onResizeKeyDown = useCallback((event: ReactKeyboardEvent<HTMLDivElement>): void => {
    const widthStep = 4;
    if (event.key === "Home") {
      event.preventDefault();
      setIsEditorCollapsed(true);
      return;
    }
    if (event.key === "End") {
      event.preventDefault();
      setIsEditorCollapsed(false);
      setEditorWidth(72);
      return;
    }
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;

    event.preventDefault();
    setIsEditorCollapsed(false);
    setEditorWidth((currentWidth) =>
      Math.min(Math.max(currentWidth + (event.key === "ArrowLeft" ? -widthStep : widthStep), 22), 72),
    );
  }, []);

  const toggleEditorPane = useCallback((): void => {
    setIsEditorCollapsed((collapsed) => {
      if (!collapsed) setIsExplorerCollapsed(false);
      return !collapsed;
    });
  }, []);

  const toggleExplorerPane = useCallback((): void => {
    setIsExplorerCollapsed((collapsed) => {
      if (!collapsed) setIsEditorCollapsed(false);
      return !collapsed;
    });
  }, []);

  const onShareClick = useCallback(async (): Promise<void> => {
    if (activeExample === null || typeof window === "undefined") return;

    try {
      if (!navigator.clipboard) throw new Error("Clipboard access is unavailable.");

      await navigator.clipboard.writeText(window.location.href);
      setShareStatus("copied");
    } catch {
      setShareStatus("failed");
    }
    window.setTimeout(() => setShareStatus("idle"), 2000);
  }, [activeExample]);

  const onExplorerStateChange = useCallback(
    (state: ExplorerState): void => {
      if (activeExample !== null) {
        writeShareUrl(activeExample.id, state);
      }
    },
    [activeExample, writeShareUrl],
  );

  useEffect(() => {
    if (sharedExampleState === null) return;

    const example = exampleDocuments.find(({ id }) => id === sharedExampleState.exampleId);
    if (example === undefined) return;

    const input = JSON.stringify(example.data, null, "\t");
    setActiveExample(example);
    setCsnStringValue(input);
  }, [sharedExampleState]);

  const canResetEditor = csnStringValue !== "" || renderedContent !== "" || renderedDocument !== null || error !== null;
  const hasRenderedResult = error === null && renderedDocument !== null && renderedContent !== "" && !isRendering;
  const editorPaneStyle: CSSProperties & Record<"--editor-pane-width", string> = {
    "--editor-pane-width": `${editorWidth}%`,
  };

  return (
    <div
      ref={workspaceRef}
      className={styles.Workspace}
      data-drag-active={isDraggingFile}
      data-explorer-visible={hasRenderedResult}
      data-explorer-collapsed={isExplorerCollapsed}
      data-ui5-compact-size
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
      onDrop={onDrop}>
      <div className={styles.EditorPane} data-collapsed={isEditorCollapsed} style={editorPaneStyle}>
        <div className={styles.Bar}>
          <span className={styles.InputLabel}>CSN JSON</span>
          <div className={styles.BarSpacer}>
            <Select onChange={onFormatChange}>
              <Option value="html">HTML</Option>
              <Option value="markdown">Markdown</Option>
              <Option value="web-component">Web-Component</Option>
            </Select>
          </div>
          <div className={styles.BarItem}>
            <Button
              className={styles.ResetEditorButton}
              design="Default"
              tooltip="Reset editor"
              accessibleName="Reset editor"
              disabled={!canResetEditor}
              onClick={onStartOverClick}>
              Reset editor
            </Button>
            <Button
              disabled={activeExample === null}
              design="Default"
              icon={shareStatus === "copied" ? acceptIcon : shareStatus === "failed" ? declineIcon : chainLinkIcon}
              tooltip={
                shareStatus === "copied"
                  ? "Link copied"
                  : shareStatus === "failed"
                    ? "Unable to copy link"
                    : "Share link"
              }
              accessibleName={
                shareStatus === "copied"
                  ? "Link copied"
                  : shareStatus === "failed"
                    ? "Unable to copy link"
                    : "Share link"
              }
              onClick={() => void onShareClick()}
            />
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
      {hasRenderedResult ? (
        <>
          <div
            className={styles.ResizeHandle}
            role="separator"
            aria-label="Resize CSN JSON editor"
            aria-orientation="vertical"
            aria-valuemin={0}
            aria-valuemax={72}
            aria-valuenow={isEditorCollapsed ? 0 : editorWidth}
            tabIndex={0}
            onPointerDown={onResizeStart}
            onPointerMove={onResizeMove}
            onKeyDown={onResizeKeyDown}>
            <div className={styles.ResizeControls}>
              {!isExplorerCollapsed && (
                <Button
                  design="Transparent"
                  icon={isEditorCollapsed ? navigationRightArrow : navigationLeftArrow}
                  tooltip={isEditorCollapsed ? "Show CSN JSON editor" : "Hide CSN JSON editor"}
                  accessibleName={isEditorCollapsed ? "Show CSN JSON editor" : "Hide CSN JSON editor"}
                  onPointerDown={(event) => event.stopPropagation()}
                  onClick={toggleEditorPane}
                />
              )}
              {!isEditorCollapsed && (
                <Button
                  design="Transparent"
                  icon={isExplorerCollapsed ? navigationLeftArrow : navigationRightArrow}
                  tooltip={isExplorerCollapsed ? "Show Explorer" : "Hide Explorer"}
                  accessibleName={isExplorerCollapsed ? "Show Explorer" : "Hide Explorer"}
                  onPointerDown={(event) => event.stopPropagation()}
                  onClick={toggleExplorerPane}
                />
              )}
            </div>
          </div>
          <DefinitionExplorer
            document={renderedDocument}
            format={outputFormat}
            renderedContent={renderedContent}
            initialState={
              sharedExampleState !== null && sharedExampleState.exampleId === activeExample?.id
                ? sharedExampleState.explorer
                : undefined
            }
            onStateChange={onExplorerStateChange}
          />
        </>
      ) : (
        <div className={styles.Sidebar}>
          <SidebarContent
            error={error}
            isRendering={isRendering}
            examples={exampleDocuments}
            onTryExampleClick={onTryExampleClick}
          />
        </div>
      )}
      {isDraggingFile && <div className={styles.DropOverlay}>Drop CSN JSON to load it</div>}
    </div>
  );
}
