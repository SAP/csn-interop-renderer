import {
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
import { Button, ThemeRoot, useTheme } from "@open-resource-discovery/ui-components";
import Editor, { type OnChange, type OnMount, useMonaco } from "@monaco-editor/react";
import styles from "./renderer.module.css";
import { generateHtml, type AnnotationLinkCallbacks } from "@sap/csn-interop-renderer";
import DefinitionExplorer, { type ExplorerState } from "./definitionExplorer";
import { findDefinitionLine } from "./definitionNavigation";
import { clearSharedExampleState, readSharedExampleState, writeSharedExampleState } from "./shareState";
import SidebarContent from "./sidebarContent";
import type { CsnDocument, ExampleDocument } from "./types";
import ErrorState from "../error/error";

const emptyExamples: readonly ExampleDocument[] = [];

export type CsnRendererTheme = Partial<Record<`--ord-${string}`, string>>;

export interface CsnInteropRendererProps {
  examples?: readonly ExampleDocument[];
  /** Custom links for annotation values in the generated preview. */
  annotationLinkCallbacks?: AnnotationLinkCallbacks;
  /** ORD token values applied to this renderer instance. */
  theme?: CsnRendererTheme;
  /** Class applied to the renderer's ThemeRoot. */
  className?: string;
  /** Initial ui-components color mode. */
  defaultTheme?: "light" | "dark" | "system";
}

type ShareStatus = "idle" | "copied" | "failed";

interface CsnEditorProps {
  value: string;
  onChange: OnChange;
  onMount: OnMount;
  defaultTheme: CsnInteropRendererProps["defaultTheme"];
}

function CsnEditor({ value, onChange, onMount, defaultTheme }: CsnEditorProps): ReactNode {
  const { resolvedTheme, setTheme } = useTheme(defaultTheme);

  // useTheme is not context-based, so mirror ThemeRoot's controlled theme here.
  useEffect(() => {
    setTheme(defaultTheme ?? "light");
  }, [defaultTheme, setTheme]);

  return (
    <Editor
      defaultLanguage="json"
      theme={resolvedTheme === "dark" ? "vs-dark" : "vs"}
      value={value}
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
      onMount={onMount}
    />
  );
}

export default function Renderer({
  examples = emptyExamples,
  annotationLinkCallbacks,
  theme,
  className,
  defaultTheme = "light",
}: CsnInteropRendererProps): ReactNode {
  const [csnStringValue, setCsnStringValue] = useState<string>("");
  const [renderedContent, setRenderedContent] = useState<string>("");
  const [isRendering, setIsRendering] = useState<boolean>(false);
  const [error, setError] = useState<unknown>(null);
  const [renderedDocument, setRenderedDocument] = useState<CsnDocument | null>(null);
  const [activeExample, setActiveExample] = useState<ExampleDocument | null>(null);
  const [sharedExampleState] = useState(() =>
    typeof window === "undefined" ? null : readSharedExampleState(window.location.search),
  );
  const [shareStatus, setShareStatus] = useState<ShareStatus>("idle");
  const [copyStatus, setCopyStatus] = useState<ShareStatus>("idle");
  const [isDraggingFile, setIsDraggingFile] = useState(false);
  const [fileWidth, setFileWidth] = useState(18);
  const [isFileCollapsed, setIsFileCollapsed] = useState(false);
  const [editorWidth, setEditorWidth] = useState<number | null>(null);
  const [isEditorCollapsed, setIsEditorCollapsed] = useState(false);
  const [isExplorerCollapsed, setIsExplorerCollapsed] = useState(false);
  const renderRequestRef = useRef(0);
  const dragDepthRef = useRef(0);
  const workspaceRef = useRef<HTMLDivElement>(null);
  const editorRef = useRef<Parameters<OnMount>[0] | null>(null);
  const monaco = useMonaco();

  const onEditorMount = useCallback<OnMount>((editor) => {
    editorRef.current = editor;
  }, []);

  const generateContent = useCallback(
    async (input: string): Promise<void> => {
      if (!input) return;

      const requestId = ++renderRequestRef.current;
      setIsRendering(true);
      setError(null);

      try {
        const parsedInput = JSON.parse(input);
        const content = await generateHtml(parsedInput, {
          annotationLinkCallbacks,
        });

        if (renderRequestRef.current === requestId) {
          setRenderedDocument(parsedInput);
          setRenderedContent(content);
          setActiveExample(examples.find(({ data }) => JSON.stringify(data, null, "\t") === input) ?? null);
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
    },
    [annotationLinkCallbacks, examples],
  );

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
    if (window.matchMedia("(max-width: 600px)").matches) {
      setIsEditorCollapsed(true);
    }
  }, []);

  useEffect(() => {
    if (!csnStringValue) return;

    const timeout = window.setTimeout(() => void generateContent(csnStringValue), 350);
    return (): void => {
      window.clearTimeout(timeout);
    };
  }, [csnStringValue, generateContent]);

  const writeShareUrl = useCallback((exampleId: string, state: Partial<ExplorerState>): void => {
    if (typeof window === "undefined") return;

    const query = writeSharedExampleState(window.location.search, exampleId, state);
    window.history.replaceState(null, "", `${window.location.pathname}?${query}${window.location.hash}`);
  }, []);

  const clearShareUrl = useCallback((): void => {
    if (typeof window === "undefined") return;

    const query = clearSharedExampleState(window.location.search);
    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}${query ? `?${query}` : ""}${window.location.hash}`,
    );
  }, []);

  const onChange = useCallback<OnChange>(
    (value, e): void => {
      const nextValue = value ?? "";
      renderRequestRef.current += 1;
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

  const resizeFiles = useCallback((clientX: number): void => {
    const workspace = workspaceRef.current;
    if (workspace === null) return;

    const { left, width } = workspace.getBoundingClientRect();
    const nextWidth = ((clientX - left) / width) * 100;
    setIsFileCollapsed(nextWidth < 7);
    if (nextWidth >= 7) setFileWidth(Math.min(Math.max(nextWidth, 15), 35));
  }, []);

  const onFileResizeStart = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>): void => {
      event.preventDefault();
      event.currentTarget.setPointerCapture(event.pointerId);
      resizeFiles(event.clientX);
    },
    [resizeFiles],
  );

  const onFileResizeMove = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>): void => {
      if (event.currentTarget.hasPointerCapture(event.pointerId)) resizeFiles(event.clientX);
    },
    [resizeFiles],
  );

  const onFileResizeKeyDown = useCallback(
    (event: ReactKeyboardEvent<HTMLDivElement>): void => {
      if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;

      event.preventDefault();
      if (event.key === "ArrowRight" && isFileCollapsed) {
        setIsFileCollapsed(false);
        return;
      }
      if (event.key === "ArrowLeft" && fileWidth <= 15) {
        setIsFileCollapsed(true);
        return;
      }
      setIsFileCollapsed(false);
      setFileWidth((width) => Math.min(Math.max(width + (event.key === "ArrowLeft" ? -2 : 2), 15), 35));
    },
    [fileWidth, isFileCollapsed],
  );

  const resizeEditor = useCallback(
    (clientX: number): void => {
      const workspace = workspaceRef.current;
      if (workspace === null) return;

      const { left, width } = workspace.getBoundingClientRect();
      const nextWidth = ((clientX - left) / width) * 100 - (isFileCollapsed ? 0 : fileWidth);
      setIsEditorCollapsed(nextWidth < 14);
      setIsExplorerCollapsed(nextWidth > 86);
      if (nextWidth >= 14 && nextWidth <= 86) setEditorWidth(Math.min(Math.max(nextWidth, 22), 72));
    },
    [fileWidth, isFileCollapsed],
  );

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
      if (event.currentTarget.hasPointerCapture(event.pointerId)) resizeEditor(event.clientX);
    },
    [resizeEditor],
  );

  const onResizeKeyDown = useCallback((event: ReactKeyboardEvent<HTMLDivElement>): void => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;

    event.preventDefault();
    setIsEditorCollapsed(false);
    setIsExplorerCollapsed(false);
    setEditorWidth((width) => Math.min(Math.max((width ?? 40) + (event.key === "ArrowLeft" ? -4 : 4), 22), 72));
  }, []);

  const toggleEditorPane = useCallback((): void => {
    setIsEditorCollapsed((collapsed) => !collapsed);
  }, []);

  const onFormatClick = useCallback((): void => {
    void editorRef.current?.getAction("editor.action.formatDocument")?.run();
  }, []);

  const onCopyClick = useCallback(async (): Promise<void> => {
    if (!csnStringValue || typeof window === "undefined") return;

    try {
      if (!navigator.clipboard) throw new Error("Clipboard access is unavailable.");

      await navigator.clipboard.writeText(editorRef.current?.getValue() ?? csnStringValue);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("failed");
    }
    window.setTimeout(() => setCopyStatus("idle"), 2000);
  }, [csnStringValue]);

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
      if (state.definition) {
        const definitionLine = findDefinitionLine(csnStringValue, state.definition);
        if (definitionLine !== undefined) {
          editorRef.current?.revealLineInCenter(definitionLine);
        }
      }

      if (activeExample !== null) {
        writeShareUrl(activeExample.id, state);
      }
    },
    [activeExample, csnStringValue, writeShareUrl],
  );

  useEffect(() => {
    if (sharedExampleState === null) return;

    const example = examples.find(({ id }) => id === sharedExampleState.exampleId);
    if (example === undefined) return;

    const input = JSON.stringify(example.data, null, "\t");
    setActiveExample(example);
    setCsnStringValue(input);
  }, [examples, sharedExampleState]);

  const canResetEditor = csnStringValue !== "" || renderedContent !== "" || renderedDocument !== null || error !== null;
  const hasRenderedResult = error === null && renderedDocument !== null && renderedContent !== "" && !isRendering;
  const workspaceStyle: CSSProperties &
    Record<"--file-pane-width", string> &
    Partial<Record<"--editor-pane-width", string>> = {
    "--file-pane-width": `${fileWidth}%`,
    ...(editorWidth === null ? {} : { "--editor-pane-width": `${editorWidth}%` }),
  };
  return (
    <ThemeRoot className={className} style={theme as CSSProperties | undefined} defaultTheme={defaultTheme}>
      <div
        ref={workspaceRef}
        className={styles.Workspace}
        style={workspaceStyle}
        data-drag-active={isDraggingFile}
        data-file-collapsed={isFileCollapsed}
        data-editor-resized={editorWidth !== null}
        data-explorer-visible={hasRenderedResult}
        data-explorer-collapsed={isExplorerCollapsed}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDragOver={onDragOver}
        onDrop={onDrop}>
        <SidebarContent
          examples={examples}
          activeExample={activeExample}
          onTryExampleClick={onTryExampleClick}
          onFileSelect={(file) => void loadLocalFile(file)}
        />
        <div
          className={styles.ResizeHandle}
          role="separator"
          aria-label="Resize CSN file list"
          aria-orientation="vertical"
          aria-valuemin={0}
          aria-valuemax={35}
          aria-valuenow={isFileCollapsed ? 0 : fileWidth}
          aria-valuetext={isFileCollapsed ? "Collapsed" : `${Math.round(fileWidth)} percent`}
          tabIndex={0}
          onPointerDown={onFileResizeStart}
          onPointerMove={onFileResizeMove}
          onKeyDown={onFileResizeKeyDown}
        />

        <div className={styles.EditorPane} data-collapsed={isEditorCollapsed}>
          <div className={styles.Bar}>
            <Button
              className={styles.ToolbarButton}
              disabled={!csnStringValue}
              variant="outline"
              aria-label="Format JSON"
              title="Format JSON"
              onClick={onFormatClick}>
              <svg className={styles.ToolbarIcon} viewBox="0 0 24 24" aria-hidden="true">
                <path d="m4 20 9-9" />
                <path d="m14 4 1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2Z" />
                <path d="m18 13 .6 1.4L20 15l-1.4.6L18 17l-.6-1.4L16 15l1.4-.6L18 13Z" />
              </svg>
              <span className={styles.ToolbarLabel}>Format</span>
            </Button>
            <Button
              className={styles.ToolbarButton}
              disabled={!csnStringValue}
              variant="outline"
              aria-label={
                copyStatus === "copied"
                  ? "CSN JSON copied"
                  : copyStatus === "failed"
                    ? "Unable to copy CSN JSON"
                    : "Copy CSN JSON"
              }
              title="Copy JSON to clipboard"
              onClick={() => void onCopyClick()}>
              <svg className={styles.ToolbarIcon} viewBox="0 0 24 24" aria-hidden="true">
                <rect x="9" y="9" width="11" height="11" rx="1" />
                <path d="M15 9V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h4" />
              </svg>
              <span className={styles.ToolbarLabel}>
                {copyStatus === "copied" ? "Copied" : copyStatus === "failed" ? "Copy failed" : "Copy"}
              </span>
            </Button>
            <div className={styles.BarSpacer} />
            <div className={styles.BarItem}>
              <Button
                className={styles.ResetEditorButton}
                disabled={!canResetEditor}
                variant="outline"
                aria-label="Reset editor"
                title="Reset editor"
                onClick={onStartOverClick}>
                <svg className={styles.ResetEditorIcon} viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M3 12a9 9 0 1 0 3-6.7" />
                  <path d="M3 4v5h5" />
                </svg>
                <span className={styles.ToolbarLabel}>Reset</span>
              </Button>
              <Button
                className={styles.ShareButton}
                disabled={activeExample === null}
                variant="outline"
                size="sm"
                aria-label={
                  shareStatus === "copied"
                    ? "Link copied"
                    : shareStatus === "failed"
                      ? "Unable to copy link"
                      : "Share link"
                }
                title="Copy share link"
                onClick={() => void onShareClick()}>
                <svg className={styles.ShareIcon} viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="18" cy="5" r="3" />
                  <circle cx="6" cy="12" r="3" />
                  <circle cx="18" cy="19" r="3" />
                  <path d="m8.6 10.5 6.8-4" />
                  <path d="m8.6 13.5 6.8 4" />
                </svg>
                <span className={styles.ToolbarLabel}>
                  {shareStatus === "copied" ? "Copied" : shareStatus === "failed" ? "Copy failed" : "Share"}
                </span>
              </Button>
            </div>
          </div>
          <div className={styles.Editor}>
            <CsnEditor value={csnStringValue} onChange={onChange} onMount={onEditorMount} defaultTheme={defaultTheme} />
          </div>
        </div>

        <div
          className={styles.ResizeHandle}
          role="separator"
          aria-label="Resize CSN JSON editor"
          aria-orientation="vertical"
          aria-valuemin={0}
          aria-valuemax={72}
          aria-valuenow={isEditorCollapsed ? 0 : (editorWidth ?? 40)}
          tabIndex={0}
          onPointerDown={onResizeStart}
          onPointerMove={onResizeMove}
          onKeyDown={onResizeKeyDown}
        />

        {hasRenderedResult ? (
          <DefinitionExplorer
            document={renderedDocument}
            annotationLinkCallbacks={annotationLinkCallbacks}
            initialState={
              sharedExampleState !== null && sharedExampleState.exampleId === activeExample?.id
                ? sharedExampleState.explorer
                : undefined
            }
            onStateChange={onExplorerStateChange}
          />
        ) : (
          <div className={styles.EmptyExplorer} aria-live="polite">
            {error !== null ? (
              <ErrorState name="unableToLoad" title="Error while rendering" description={String(error)} />
            ) : isRendering ? (
              <p>Rendering CSN document…</p>
            ) : (
              <>
                <span className={styles.PaneTitle}>Overview</span>
                <p>Open a CSN JSON file or select an example to see its definitions and details.</p>
              </>
            )}
          </div>
        )}

        {hasRenderedResult && (
          <Button className={styles.MobileEditorToggle} variant="outline" onClick={toggleEditorPane}>
            {isEditorCollapsed ? "Show JSON" : "Hide JSON"}
          </Button>
        )}
        {isDraggingFile && <div className={styles.DropOverlay}>Drop CSN JSON to load it</div>}
      </div>
    </ThemeRoot>
  );
}
