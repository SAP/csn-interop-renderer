import { readFileSync } from "node:fs";

const readSource = (path: string): string => readFileSync(new URL(path, import.meta.url), "utf8");

describe("CSN renderer theming", () => {
  test("leaves ORD tokens to the embedding application", () => {
    const rendererStyles = readSource("../components/csn-renderer/renderer/renderer.module.css");
    const errorStyles = readSource("../components/csn-renderer/error/error.module.css");

    expect(rendererStyles).not.toMatch(/--ord-[a-z-]+\s*:/);
    expect(errorStyles).not.toMatch(/--ord-[a-z-]+\s*:/);
    expect(rendererStyles).not.toMatch(/border-radius:\s*(?:0\.\d+|\d+rem)/);
    expect(rendererStyles).not.toMatch(/font-family:\s*(?:system-ui|ui-monospace)/);
    expect(rendererStyles).toContain("font-family: var(--ord-font-mono, ui-monospace");
    expect(readSource("../components/csn-renderer/renderer/renderer.tsx")).toContain(
      "<ThemeRoot className={className} style={theme as CSSProperties | undefined} defaultTheme={defaultTheme}>",
    );
    expect(readSource("../components/csn-renderer/renderer/renderer.tsx")).toContain('defaultTheme = "light"');
    expect(readSource("../components/csn-renderer/renderer/renderer.tsx")).toContain(
      "<CsnEditor value={csnStringValue} onChange={onChange} onMount={onEditorMount} defaultTheme={defaultTheme} />",
    );
  });

  test("keeps the SAP demo palette scoped to the demo instance", () => {
    const demoStyles = readSource("../../website/static/css/custom.css");

    expect(demoStyles).toMatch(/\.csn-interop-renderer-demo \.ord-ui\s*\{/);
  });
});
