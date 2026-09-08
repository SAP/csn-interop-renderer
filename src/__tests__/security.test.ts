import { generateHtml, generateMarkdown } from "../index.js";
import { renderer } from "../renderer.js";
import { parser } from "../parser.js";
import type { CSNInteropEffectiveDocument } from "@sap/csn-interop-specification";

/**
 * Security-focused tests for csn-interop-renderer.
 *
 * These tests lock down behavior around user-supplied content:
 * doc strings, entity/element names, annotation link callbacks, i18n values,
 * and prototype pollution. They document current behavior explicitly so
 * future refactors can detect unintended changes.
 *
 * NOTE: The renderer does NOT sanitize HTML in doc fields — that is the
 * responsibility of the consumer.
 */

function makeDoc(overrides: Partial<CSNInteropEffectiveDocument> = {}): CSNInteropEffectiveDocument {
  return {
    csnInteropEffective: "1.0",
    $version: "2.0",
    definitions: {
      MinEntity: { kind: "entity" as const, elements: { ID: { type: "cds.String" } } },
    },
    ...overrides,
  };
}

function makeDocWithEntity(
  entityName: string,
  entityOverrides: Record<string, unknown> = {},
): CSNInteropEffectiveDocument {
  return makeDoc({
    definitions: {
      [entityName]: {
        kind: "entity",
        elements: { ID: { type: "cds.String" } },
        ...entityOverrides,
      },
    },
  });
}

// ---------------------------------------------------------------------------
// 1. XSS via doc fields — current behavior: content is NOT escaped
// ---------------------------------------------------------------------------
describe("XSS via doc fields", () => {
  const xssPayload = '<script>alert("xss")</script>';

  test("entity doc script tag passes through to markdown output unchanged", async () => {
    const result = await generateMarkdown(makeDocWithEntity("Foo", { doc: xssPayload }));
    expect(result).toContain(xssPayload);
  });

  test("entity doc img onerror passes through to markdown output unchanged", async () => {
    const result = await generateMarkdown(makeDocWithEntity("Foo", { doc: "<img src=x onerror=alert(1)>" }));
    expect(result).toContain("<img src=x onerror=alert(1)>");
  });

  test("entity doc script tag passes through to HTML output (consumer must sanitize)", async () => {
    const result = await generateHtml(makeDocWithEntity("Foo", { doc: xssPayload }));
    expect(result).toContain("script");
  });

  test("meta document title with HTML chars is preserved verbatim in markdown heading", async () => {
    const result = await generateMarkdown(
      makeDoc({ meta: { document: { title: "<b>Bold</b> Title", version: "1.0" } } }),
    );
    expect(result).toContain("<b>Bold</b> Title");
  });

  test("service doc script tag passes through unchanged", async () => {
    const result = await generateMarkdown(makeDoc({ definitions: { MySvc: { kind: "service", doc: xssPayload } } }));
    expect(result).toContain(xssPayload);
  });

  test("type doc script tag passes through unchanged", async () => {
    const result = await generateMarkdown(
      makeDoc({ definitions: { MyType: { kind: "type", type: "cds.String", doc: xssPayload } } }),
    );
    expect(result).toContain(xssPayload);
  });
});

// ---------------------------------------------------------------------------
// 2. XSS via definition and element names
// ---------------------------------------------------------------------------
describe("XSS via definition and element names", () => {
  test("entity name with HTML tags appears verbatim in renderer output", async () => {
    const result = await renderer({
      csnInteropEffective: "1.0",
      $version: "2.0",
      definitions: {
        ["<script>evil</script>"]: { kind: "entity", elements: { ID: { type: "cds.String" } } },
      },
    });
    expect(result).toContain("<script>evil</script>");
  });

  test("element name with HTML chars appears verbatim in table cell", async () => {
    const result = await renderer({
      csnInteropEffective: "1.0",
      $version: "2.0",
      definitions: {
        MyEntity: { kind: "entity", elements: { ['"><img src=x>']: { type: "cds.String" } } },
      },
    });
    expect(result).toContain('"><img src=x>');
  });
});

// ---------------------------------------------------------------------------
// 3. Annotation link callback — URL injection
// ---------------------------------------------------------------------------
describe("Annotation link callback URL injection", () => {
  function makeAnnotatedDoc(): CSNInteropEffectiveDocument {
    return makeDoc({
      definitions: {
        MyEntity: { "kind": "entity", "@MyAnnotation": "trigger", "elements": { ID: { type: "cds.String" } } },
      },
    });
  }

  test("javascript: URL is placed verbatim into href (no scheme validation)", async () => {
    const result = await generateMarkdown(makeAnnotatedDoc(), {
      annotationLinkCallbacks: { "@MyAnnotation": () => "javascript:alert(1)" },
    });
    expect(result).toContain('href="javascript:alert(1)"');
  });

  test("data: URL is placed verbatim into href", async () => {
    const result = await generateMarkdown(makeAnnotatedDoc(), {
      annotationLinkCallbacks: { "@MyAnnotation": () => "data:text/html,<script>alert(1)</script>" },
    });
    expect(result).toContain('href="data:text/html');
  });

  test("callback returning empty string produces no anchor link", async () => {
    const result = await generateMarkdown(makeAnnotatedDoc(), {
      annotationLinkCallbacks: { "@MyAnnotation": () => "" },
    });
    expect(result).not.toContain('<a href=""');
  });

  test("callback returning undefined throws TypeError (known bug — no null check)", async () => {
    await expect(
      generateMarkdown(makeAnnotatedDoc(), {
        annotationLinkCallbacks: { "@MyAnnotation": (): string => undefined as unknown as string },
      }),
    ).rejects.toThrow("Cannot read properties of undefined");
  });
});

// ---------------------------------------------------------------------------
// 4. Prototype pollution resistance
// ---------------------------------------------------------------------------
describe("Prototype pollution resistance", () => {
  test("__proto__ key in definitions does not leak onto Object.prototype", async () => {
    const polluted = JSON.parse(
      '{"csnInteropEffective":"1.0","$version":"2.0","definitions":{"__proto__":{"kind":"entity","elements":{"ID":{"type":"cds.String"}}}}}',
    );
    const before = Object.prototype.hasOwnProperty.call(Object.prototype, "kind");
    try {
      await parser(polluted);
    } catch {
      // Validation may reject the special key; the important guarantee is no prototype mutation.
    }
    expect(Object.prototype.hasOwnProperty.call(Object.prototype, "kind")).toBe(before);
  });

  test("constructor key in definitions is rendered as an ordinary definition", async () => {
    const tricky = JSON.parse(
      '{"csnInteropEffective":"1.0","$version":"2.0","definitions":{"constructor":{"kind":"entity","elements":{"ID":{"type":"cds.String"}}}}}',
    );
    await expect(parser(tricky)).resolves.toContain("constructor");
  });
});

// ---------------------------------------------------------------------------
// 5. Large and degenerate inputs
// ---------------------------------------------------------------------------
describe("Large and edge-case inputs", () => {
  test("document with empty definitions is rejected by schema validation", async () => {
    await expect(generateMarkdown({ csnInteropEffective: "1.0", $version: "2.0", definitions: {} })).rejects.toThrow();
  });

  test("entity with 100 elements renders without error", async () => {
    const elements: Record<string, { type: string }> = {};
    for (let i = 0; i < 100; i++) elements[`field${i}`] = { type: "cds.String" };
    const doc: CSNInteropEffectiveDocument = {
      csnInteropEffective: "1.0",
      $version: "2.0",
      definitions: { BigEntity: { kind: "entity", elements } },
    };
    const result = await generateMarkdown(doc);
    expect(result).toContain("field99");
  });

  test("entity name of 1000 chars renders without crashing", async () => {
    const longName = "A".repeat(1000);
    const result = await renderer({
      csnInteropEffective: "1.0",
      $version: "2.0",
      definitions: { [longName]: { kind: "entity", elements: { ID: { type: "cds.String" } } } },
    });
    expect(result).toContain(longName);
  });

  test("doc field of 10000 chars renders without truncation", async () => {
    const longDoc = "x".repeat(10000);
    const result = await generateMarkdown(makeDocWithEntity("Foo", { doc: longDoc }));
    expect(result).toContain(longDoc);
  });
});

// ---------------------------------------------------------------------------
// 6. generateHtml — output structure integrity
// ---------------------------------------------------------------------------
describe("generateHtml — output structure", () => {
  test("document with title starts with <h1>", async () => {
    const result = await generateHtml(makeDoc({ meta: { document: { title: "Test Doc", version: "1.0" } } }));
    expect(result.trim()).toMatch(/^<h1/);
  });

  test("minimal document renders its entity name in HTML", async () => {
    const result = await generateHtml(makeDoc());
    expect(result).toContain("MinEntity");
  });
});
