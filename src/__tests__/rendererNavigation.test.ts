import { jest } from "@jest/globals";
import { act, createElement, type ComponentProps, type ReactElement } from "react";
import { createRoot, type Root } from "react-dom/client";
import type { AnnotationLinkCallbacks } from "../types/index.js";
import type { CsnInteropRendererProps } from "../components/csn-renderer/renderer/renderer.js";

let editorChange: (value: string, event: unknown) => void;

jest.unstable_mockModule("@monaco-editor/react", () => ({
  useMonaco: (): null => null,
  default: ({ value, onChange }: { value: string; onChange: typeof editorChange }): ReactElement => {
    editorChange = onChange;
    return createElement("textarea", { "aria-label": "Test editor", value, "readOnly": true });
  },
}));

jest.unstable_mockModule("@open-resource-discovery/ui-components", () => ({
  Button: ({
    variant: _variant,
    size: _size,
    ...props
  }: ComponentProps<"button"> & { variant?: string; size?: string }): ReactElement => createElement("button", props),
  Input: (props: ComponentProps<"input">): ReactElement => createElement("input", props),
  ThemeRoot: ({
    defaultTheme: _defaultTheme,
    ...props
  }: ComponentProps<"div"> & { defaultTheme?: string }): ReactElement => createElement("div", props),
  useTheme: (): { resolvedTheme: string; setTheme: () => void } => ({
    resolvedTheme: "light",
    setTheme: (): void => undefined,
  }),
}));

jest.unstable_mockModule("@sap/csn-interop-renderer", () => ({
  generateHtml: async (): Promise<string> => Promise.resolve("<p>Rendered CSN</p>"),
}));
jest.unstable_mockModule("../components/csn-renderer/renderer/renderer.module.css", () => ({ default: {} }));
jest.unstable_mockModule("../components/csn-renderer/error/error.js", () => ({
  default: ({ title }: { title: string }): ReactElement => createElement("p", null, title),
}));

const { default: renderer } = await import("../components/csn-renderer/renderer/renderer.js");

const model = {
  definitions: {
    FirstEntity: {
      "kind": "entity",
      "@Link": "first",
      "elements": { ID: { "type": "cds.String", "@Link": "first-id" } },
    },
    SecondEntity: {
      "kind": "entity",
      "@Link": "second",
      "elements": { ID: { "type": "cds.String", "@Link": "second-id" } },
    },
  },
};
const example = { id: "review", name: "Review model", data: model };

let container: HTMLDivElement;
let root: Root;

const runAct = async (operation: () => void): Promise<void> => {
  await act(async () => {
    operation();
    await Promise.resolve();
  });
};

const render = async (props: CsnInteropRendererProps): Promise<void> => {
  await runAct(() => {
    root.render(createElement(renderer, props));
  });
};
const finishRendering = async (): Promise<void> => {
  await runAct(() => {
    jest.advanceTimersByTime(350);
  });
};
const editor = (): HTMLTextAreaElement => container.querySelector("textarea")!;
const links = (): [string, string][] =>
  Array.from(container.querySelectorAll("a"), (link) => [link.textContent ?? "", link.getAttribute("href") ?? ""]);
const clickDefinition = async (name: string): Promise<void> => {
  await runAct(() => {
    Array.from(container.querySelectorAll("nav button"))
      .find((button) => button.textContent === name)!
      .dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
};

beforeEach(() => {
  jest.useFakeTimers();
  (globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;
  const mediaQuery: MediaQueryList = {
    matches: false,
    media: "",
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn<MediaQueryList["dispatchEvent"]>().mockReturnValue(false),
  };
  window.matchMedia = jest.fn<typeof window.matchMedia>().mockReturnValue(mediaQuery);
  HTMLElement.prototype.scrollTo = jest.fn();
  window.history.replaceState(null, "", "/#example=review&definition=FirstEntity");
  container = document.createElement("div");
  document.body.append(container);
  root = createRoot(container);
});

afterEach(async () => {
  await runAct(() => root.unmount());
  container.remove();
  jest.useRealTimers();
});

describe("renderer navigation", () => {
  test("preserves edited content and selection when the host recreates its examples array", async () => {
    await render({ examples: [example], syncUrl: true });
    await finishRendering();
    const edited = JSON.stringify({ definitions: { EditedEntity: { kind: "entity", elements: { ID: {} } } } });
    await runAct(() => {
      editorChange(edited, { changes: [] });
    });
    await finishRendering();
    await clickDefinition("EditedEntity");

    await render({ examples: [example], syncUrl: true });
    await finishRendering();

    expect(editor().value).toBe(edited);
    expect(container.querySelector("article h2")?.textContent).toBe("EditedEntity");
    expect(window.location.hash).toBe("");
  });

  test("restores an initial example link when examples arrive later", async () => {
    await render({ examples: [], syncUrl: true });
    expect(editor().value).toBe("");

    await render({ examples: [example], syncUrl: true });
    await finishRendering();

    expect(JSON.parse(editor().value)).toEqual(model);
    expect(container.querySelector("article h2")?.textContent).toBe("FirstEntity");
    expect(window.location.hash).toBe("#example=review&kind=entity&definition=FirstEntity");
  });

  test("continues restoring external fragment changes and browser history", async () => {
    await render({ examples: [example], syncUrl: true });
    await finishRendering();
    await runAct(() => {
      window.history.replaceState(null, "", "/#example=review&definition=SecondEntity");
      window.dispatchEvent(new HashChangeEvent("hashchange"));
    });
    expect(container.querySelector("article h2")?.textContent).toBe("SecondEntity");

    await runAct(() => {
      window.history.replaceState(null, "", "/#example=review&definition=FirstEntity");
      window.dispatchEvent(new PopStateEvent("popstate"));
    });
    expect(container.querySelector("article h2")?.textContent).toBe("FirstEntity");
  });
});

describe("annotation link resolution", () => {
  test("hides links from the previous definition until new callbacks resolve", async () => {
    const pending = new Map<string, (href: string) => void>();
    const callbacks: AnnotationLinkCallbacks = {
      "@Link": async (value) => new Promise<string>((resolve) => pending.set(String(value), resolve)),
    };
    await render({ examples: [example], annotationLinkCallbacks: callbacks, syncUrl: true });
    await finishRendering();
    await runAct(() => {
      pending.get("first")!("https://example.com/first");
      pending.get("first-id")!("https://example.com/first-id");
    });
    expect(links()).toEqual([
      ["first", "https://example.com/first"],
      ["first-id", "https://example.com/first-id"],
    ]);

    await clickDefinition("SecondEntity");
    expect(links()).toEqual([]);
    expect(container.textContent).toContain("second-id");
    await runAct(() => {
      pending.get("second")!("https://example.com/second");
      pending.get("second-id")!("https://example.com/second-id");
    });
    expect(links()).toEqual([
      ["second", "https://example.com/second"],
      ["second-id", "https://example.com/second-id"],
    ]);
  });

  test("hides old links when the host replaces its callback configuration", async () => {
    const examples = [example];
    await render({
      examples,
      annotationLinkCallbacks: { "@Link": (value) => `https://old.example/${String(value)}` },
      syncUrl: true,
    });
    await finishRendering();
    expect(links()).toHaveLength(2);

    await render({
      examples,
      annotationLinkCallbacks: { "@Link": async () => new Promise<string>(() => undefined) },
      syncUrl: true,
    });
    expect(links()).toEqual([]);
    expect(container.textContent).toContain("first-id");
  });
});
