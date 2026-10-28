import { type CSSProperties, type DragEvent, type ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { Button, ThemeRoot, useTheme } from "@open-resource-discovery/ui-components";
import Editor, { type OnChange, type OnMount, useMonaco } from "@monaco-editor/react";
import styles from "./renderer.module.css";
import { generateHtml, type AnnotationLinkCallbacks } from "@sap/csn-interop-renderer";
import DefinitionExplorer, { type ExplorerState } from "./definitionExplorer";
import { findDefinitionLine } from "./definitionNavigation";
import {
  clearSharedExampleState,
  normalizeExplorerState,
  readSharedExampleState,
  writeSharedExampleState,
  type SharedExampleState,
} from "./shareState";
import SidebarContent from "./sidebarContent";
import ResizableSeparator from "./resizableSeparator";
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
  /** Enable example links and browser history in the page fragment. Leave disabled when the host owns the URL. */
  syncUrl?: boolean;
}

type CopyStatus = "idle" | "copied" | "failed";

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
  syncUrl = false,
}: CsnInteropRendererProps): ReactNode {
  const [csnStringValue, setCsnStringValue] = useState<string>("");
  const [renderedContent, setRenderedContent] = useState<string>("");
  const [isRendering, setIsRendering] = useState<boolean>(false);
  const [error, setError] = useState<unknown>(null);
  const [renderedDocument, setRenderedDocument] = useState<CsnDocument | null>(null);
  const [activeExample, setActiveExample] = useState<ExampleDocument | null>(null);
  const [sharedExampleState, setSharedExampleState] = useState<SharedExampleState | null>(null);
  const inputRef = useRef(csnStringValue);
  inputRef.current = csnStringValue;
  const handledHashRef = useRef<string | null>(null);
  const [copyStatus, setCopyStatus] = useState<CopyStatus>("idle");
  const [isDraggingFile, setIsDraggingFile] = useState(false);
  const [fileWidth, setFileWidth] = useState(18);
  const [editorWidth, setEditorWidth] = useState<number | null>(null);
  const [isEditorCollapsed, setIsEditorCollapsed] = useState(false);
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

  const writeShareUrl = useCallback(
    (exampleId: string, state: Partial<ExplorerState>, replace = false): void => {
      if (!syncUrl || typeof window === "undefined") return;

      const definitionKind =
        state.definition && Object.hasOwn(renderedDocument?.definitions ?? {}, state.definition)
          ? renderedDocument?.definitions?.[state.definition]?.kind
          : undefined;
      const hash = writeSharedExampleState(window.location.hash, exampleId, state, definitionKind);
      handledHashRef.current = hash;
      if (hash === window.location.hash) return;
      window.history[replace ? "replaceState" : "pushState"](
        window.history.state,
        "",
        `${window.location.pathname}${window.location.search}${hash}`,
      );
    },
    [renderedDocument, syncUrl],
  );

  const clearShareUrl = useCallback(
    (push = false): void => {
      setSharedExampleState(null);
      if (!syncUrl || typeof window === "undefined") return;

      const hash = clearSharedExampleState(window.location.hash);
      handledHashRef.current = hash;
      if (hash === window.location.hash) return;
      window.history[push ? "pushState" : "replaceState"](
        window.history.state,
        "",
        `${window.location.pathname}${window.location.search}${hash}`,
      );
    },
    [syncUrl],
  );

  useEffect(() => {
    if (!syncUrl) {
      handledHashRef.current = null;
      return;
    }

    const restore = (): void => {
      const hash = window.location.hash;
      if (handledHashRef.current === hash) return;

      const state = readSharedExampleState(hash);
      const example = examples.find(({ id }) => id === state?.exampleId);
      // Retry unresolved example links when the host supplies examples later.
      if (state === null || example !== undefined) handledHashRef.current = hash;
      const input = example ? JSON.stringify(example.data, null, "\t") : "";
      setSharedExampleState(example ? state : null);
      setActiveExample(example ?? null);
      if (inputRef.current !== input) {
        renderRequestRef.current += 1;
        inputRef.current = input;
        setRenderedDocument(null);
        setRenderedContent("");
        setError(null);
        setIsRendering(false);
        setCsnStringValue(input);
      }
    };
    restore();
    window.addEventListener("hashchange", restore);
    window.addEventListener("popstate", restore);
    return (): void => {
      window.removeEventListener("hashchange", restore);
      window.removeEventListener("popstate", restore);
    };
  }, [examples, syncUrl]);

  useEffect(() => {
    if (!renderedDocument || !activeExample || sharedExampleState?.exampleId !== activeExample.id) return;
    const state = normalizeExplorerState(renderedDocument, sharedExampleState.explorer);
    writeShareUrl(activeExample.id, state, true);
  }, [activeExample, renderedDocument, sharedExampleState, writeShareUrl]);

  const onChange = useCallback<OnChange>(
    (value, e): void => {
      const nextValue = value ?? "";
      if (nextValue === inputRef.current) return;
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
      const input = JSON.stringify(example.data, null, "\t");
      if (inputRef.current !== input) {
        renderRequestRef.current += 1;
        setRenderedContent("");
        setRenderedDocument(null);
      }
      setError(null);
      setActiveExample(example);
      setSharedExampleState({ exampleId: example.id, explorer: {} });
      writeShareUrl(example.id, {});
      setCsnStringValue(input);
    },
    [writeShareUrl],
  );

  const onStartOverClick = useCallback((): void => {
    renderRequestRef.current += 1;
    setCsnStringValue("");
    setRenderedContent("");
    setRenderedDocument(null);
    setActiveExample(null);
    clearShareUrl(true);
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

  const setFilePaneWidth = useCallback((nextWidth: number): void => {
    const clampedWidth = Math.min(Math.max(nextWidth, 0), 35);
    setFileWidth(clampedWidth);
    setEditorWidth((currentWidth) =>
      currentWidth === null ? null : Math.min(Math.max(currentWidth, 0), 100 - clampedWidth),
    );
  }, []);

  const resizeFiles = useCallback(
    (clientX: number): void => {
      const workspace = workspaceRef.current;
      if (workspace === null) return;

      const { left, width } = workspace.getBoundingClientRect();
      setFilePaneWidth(((clientX - left) / width) * 100);
    },
    [setFilePaneWidth],
  );

  const resizeEditor = useCallback(
    (clientX: number): void => {
      const workspace = workspaceRef.current;
      if (workspace === null) return;

      const { left, width } = workspace.getBoundingClientRect();
      const nextWidth = ((clientX - left) / width) * 100 - fileWidth;
      const maxWidth = 100 - fileWidth;
      setEditorWidth(Math.min(Math.max(nextWidth, 0), maxWidth));
    },
    [fileWidth],
  );

  const setEditorPaneWidth = useCallback(
    (nextWidth: number): void => {
      const maxWidth = 100 - fileWidth;
      setEditorWidth(Math.min(Math.max(nextWidth, 0), maxWidth));
    },
    [fileWidth],
  );

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
      setSharedExampleState({ exampleId: activeExample?.id ?? "", explorer: state });
    },
    [activeExample, csnStringValue, writeShareUrl],
  );

  const canResetEditor = csnStringValue !== "" || renderedContent !== "" || renderedDocument !== null || error !== null;
  const hasRenderedResult = error === null && renderedDocument !== null && renderedContent !== "" && !isRendering;
  const editorPaneMinWidth = 0;
  const editorPaneMaxWidth = Math.max(editorPaneMinWidth, 100 - fileWidth - 20);
  const defaultEditorWidth = Math.min(Math.max((100 - fileWidth) / 2, editorPaneMinWidth), editorPaneMaxWidth);
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
        data-editor-resized={editorWidth !== null}
        data-explorer-visible={hasRenderedResult}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDragOver={onDragOver}
        onDrop={onDrop}>
        <SidebarContent examples={examples} activeExample={activeExample} onTryExampleClick={onTryExampleClick} />
        <ResizableSeparator
          className={styles.ResizeHandle}
          label="Resize CSN file list"
          value={fileWidth}
          min={0}
          max={35}
          onPointerPositionChange={resizeFiles}
          onValueChange={setFilePaneWidth}
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
            </div>
          </div>
          <div className={styles.Editor}>
            <CsnEditor value={csnStringValue} onChange={onChange} onMount={onEditorMount} defaultTheme={defaultTheme} />
          </div>
        </div>

        <ResizableSeparator
          className={styles.ResizeHandle}
          label="Resize CSN JSON editor"
          value={editorWidth ?? defaultEditorWidth}
          min={editorPaneMinWidth}
          max={editorPaneMaxWidth}
          onPointerPositionChange={resizeEditor}
          onValueChange={setEditorPaneWidth}
        />

        {hasRenderedResult ? (
          <DefinitionExplorer
            document={renderedDocument}
            annotationLinkCallbacks={annotationLinkCallbacks}
            initialState={
              sharedExampleState !== null && sharedExampleState.exampleId === (activeExample?.id ?? "")
                ? sharedExampleState.explorer
                : undefined
            }
            onStateChange={onExplorerStateChange}
            linkedExampleId={syncUrl ? activeExample?.id : undefined}
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
