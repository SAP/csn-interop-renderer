import { renderer } from "../renderer.js";
import { generateMarkdown, generateHtml } from "../index.js";
import { renderContentWithI18n, getDescriptionData } from "../rendererUtil.js";
import example from "../../examples/CSNInterop.js";
import type { CSNInteropEffectiveDocument } from "@sap/csn-interop-specification";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function makeDoc(overrides: Partial<CSNInteropEffectiveDocument> = {}): CSNInteropEffectiveDocument {
  return {
    csnInteropEffective: "1.0",
    $version: "2.0",
    definitions: {
      MinEntity: {
        kind: "entity",
        elements: { ID: { type: "cds.String" } },
      },
    },
    ...overrides,
  };
}

describe("Renderer Tests", () => {
  test("generates markdown output from example file", async () => {
    const result = await renderer(example);

    expect(result).toMatchSnapshot();
  });
});

describe("Renderer — i18n", () => {
  test("i18n content is resolved to English text in output", async () => {
    const docWithI18n = makeDoc(
      JSON.parse(
        JSON.stringify({
          definitions: {
            MyEntity: {
              "kind": "entity",
              "@EndUserText.label": "{i18n>greeting}",
              "elements": { ID: { type: "cds.String" } },
            },
          },
          i18n: { en: { greeting: "Hello World" } },
        }),
      ) as Partial<CSNInteropEffectiveDocument>,
    );
    const result = await generateMarkdown(docWithI18n);
    expect(result).toContain("Hello World");
    expect(result).not.toContain("{i18n>greeting}");
  });
});

// ---------------------------------------------------------------------------
// generateMarkdown — output format assertions
// ---------------------------------------------------------------------------
describe("generateMarkdown — output format", () => {
  test("title renders as H1 markdown heading", async () => {
    const doc = makeDoc({
      meta: { document: { title: "My API", version: "1.0" } },
    });
    const result = await generateMarkdown(doc);
    expect(result).toMatch(/^# My API/m);
  });

  test("meta.document.doc content appears after title", async () => {
    const doc = makeDoc({
      meta: {
        document: { title: "My API", doc: "Overview **text**.", version: "1.0" },
      },
    });
    const result = await generateMarkdown(doc);
    expect(result).toContain("# My API");
    expect(result).toContain("Overview **text**.");
    const titleIndex = result.indexOf("# My API");
    const docIndex = result.indexOf("Overview **text**.");
    expect(docIndex).toBeGreaterThan(titleIndex);
  });

  test("entity section uses ## heading and entity name uses ### heading", async () => {
    const result = await generateMarkdown(
      makeDoc({
        definitions: {
          MyEntity: { kind: "entity", elements: { ID: { type: "cds.String" } } },
        },
      }),
    );
    expect(result).toContain("## Entity Definitions");
    expect(result).toContain("### MyEntity");
  });

  test("type section uses ## heading and type name uses ### heading", async () => {
    const result = await generateMarkdown(
      makeDoc({
        definitions: {
          MyType: { kind: "type", type: "cds.String" },
        },
      }),
    );
    expect(result).toContain("## Type Definitions");
    expect(result).toContain("### MyType");
  });

  test("service section uses ## heading and service name uses ### heading", async () => {
    const result = await generateMarkdown(
      makeDoc({
        definitions: {
          "MyService": { kind: "service" },
          "MyService.Entity": { kind: "entity", elements: { ID: { type: "cds.String" } } },
        },
      }),
    );
    expect(result).toContain("## Services");
    expect(result).toContain("### MyService");
  });

  test("entity exposed via a service lists the service with anchor link", async () => {
    const result = await generateMarkdown(
      makeDoc({
        definitions: {
          "MyService": { kind: "service" },
          "MyService.Entity": { kind: "entity", elements: { ID: { type: "cds.String" } } },
        },
      }),
    );
    expect(result).toContain("Entity exposed via:");
    expect(result).toContain("[MyService](#myservice)");
  });

  test("entity NOT under a service has no 'Entity exposed via' line", async () => {
    const result = await generateMarkdown(
      makeDoc({
        definitions: {
          StandaloneEntity: { kind: "entity", elements: { ID: { type: "cds.String" } } },
        },
      }),
    );
    expect(result).not.toContain("Entity exposed via");
  });

  test("entity doc field is parsed as markdown and rendered as HTML in output", async () => {
    const result = await generateMarkdown(
      makeDoc({
        definitions: {
          MyEntity: {
            kind: "entity",
            doc: "This is **bold** text.",
            elements: { ID: { type: "cds.String" } },
          },
        },
      }),
    );
    // doc is processed via marked — Markdown is converted to HTML
    expect(result).toContain("<strong>bold</strong>");
  });

  test("annotation without callback renders as plain key: <code>value</code>", async () => {
    const result = await generateMarkdown(
      JSON.parse(
        JSON.stringify({
          csnInteropEffective: "1.0",
          $version: "2.0",
          definitions: {
            MyEntity: {
              "kind": "entity",
              "@EndUserText.label": "Airline",
              "elements": { ID: { type: "cds.String" } },
            },
          },
        }),
      ) as CSNInteropEffectiveDocument,
    );
    expect(result).toContain('@EndUserText.label: <code>"Airline"</code>');
  });

  test("annotation with callback renders as anchor link in markdown output", async () => {
    const result = await generateMarkdown(
      JSON.parse(
        JSON.stringify({
          csnInteropEffective: "1.0",
          $version: "2.0",
          definitions: {
            MyEntity: { "kind": "entity", "@MyAnnotation": "val", "elements": { ID: { type: "cds.String" } } },
          },
        }),
      ) as CSNInteropEffectiveDocument,
      {
        annotationLinkCallbacks: {
          "@MyAnnotation": () => "https://docs.example.com",
        },
      },
    );
    expect(result).toContain('<a href="https://docs.example.com"');
    expect(result).not.toContain('href=""');
  });
});

// ---------------------------------------------------------------------------
// generateHtml — output format assertions
// ---------------------------------------------------------------------------
describe("generateHtml — output format", () => {
  test("title renders as <h1> HTML element", async () => {
    const doc = makeDoc({
      meta: { document: { title: "My API", version: "1.0" } },
    });
    const result = await generateHtml(doc);
    expect(result).toMatch(/<h1[^>]*>.*My API.*<\/h1>/s);
  });

  test("entity section renders as <h2> HTML element", async () => {
    const result = await generateHtml(
      makeDoc({
        definitions: {
          MyEntity: { kind: "entity", elements: { ID: { type: "cds.String" } } },
        },
      }),
    );
    expect(result).toMatch(/<h2[^>]*>.*Entity Definitions.*<\/h2>/s);
  });

  test("entity name renders as <h3> HTML element", async () => {
    const result = await generateHtml(
      makeDoc({
        definitions: {
          MyEntity: { kind: "entity", elements: { ID: { type: "cds.String" } } },
        },
      }),
    );
    expect(result).toMatch(/<h3[^>]*>.*MyEntity.*<\/h3>/s);
  });

  test("output contains anchor IDs derived from entity names", async () => {
    const result = await generateHtml(
      makeDoc({
        definitions: {
          "MyService.Entity": { kind: "entity", elements: { ID: { type: "cds.String" } } },
        },
      }),
    );
    // gfmHeadingId converts "MyService.Entity" → id="myserviceentity"
    expect(result).toContain('id="myserviceentity"');
  });

  test("annotation with callback renders anchor link in HTML output", async () => {
    const result = await generateHtml(
      JSON.parse(
        JSON.stringify({
          csnInteropEffective: "1.0",
          $version: "2.0",
          definitions: {
            MyEntity: { "kind": "entity", "@MyAnnotation": "val", "elements": { ID: { type: "cds.String" } } },
          },
        }),
      ) as CSNInteropEffectiveDocument,
      {
        annotationLinkCallbacks: {
          "@MyAnnotation": () => "https://docs.example.com",
        },
      },
    );
    expect(result).toContain('<a href="https://docs.example.com"');
  });
});

// ---------------------------------------------------------------------------
// renderer.ts — processEntities branch coverage
// ---------------------------------------------------------------------------
describe("renderer — associations", () => {
  test("association with cardinality max=* renders 'Association to many'", async () => {
    const doc = JSON.parse(
      JSON.stringify({
        csnInteropEffective: "1.0",
        $version: "2.0",
        definitions: {
          Target: { kind: "entity", elements: { ID: { type: "cds.String" } } },
          Source: {
            kind: "entity",
            elements: {
              targets: {
                type: "cds.Association",
                target: "Target",
                cardinality: { max: "*" },
                on: [{ ref: ["targets", "ID"] }, "=", { ref: ["ID"] }],
              },
              ID: { type: "cds.String" },
            },
          },
        },
      }),
    ) as CSNInteropEffectiveDocument;
    const result = await renderer(doc);
    expect(result).toContain("Association to many");
  });

  test("association onClause ref[0] length=1 sets viaKey", async () => {
    const doc = JSON.parse(
      JSON.stringify({
        csnInteropEffective: "1.0",
        $version: "2.0",
        definitions: {
          Target: { kind: "entity", elements: { ID: { type: "cds.String" } } },
          Source: {
            kind: "entity",
            elements: {
              foreignKeyId: { type: "cds.String" },
              toTarget: {
                type: "cds.Association",
                target: "Target",
                cardinality: { max: "1" },
                on: [{ ref: ["foreignKeyId"] }, "=", { ref: ["Target", "ID"] }],
              },
            },
          },
        },
      }),
    ) as CSNInteropEffectiveDocument;
    const result = await renderer(doc);
    expect(result).toContain("foreignKeyId");
    expect(result).toContain("Association to one");
  });

  test("association onClause ref[2] length=1 sets viaKey", async () => {
    const doc = JSON.parse(
      JSON.stringify({
        csnInteropEffective: "1.0",
        $version: "2.0",
        definitions: {
          Target: { kind: "entity", elements: { ID: { type: "cds.String" } } },
          Source: {
            kind: "entity",
            elements: {
              fkField: { type: "cds.String" },
              toTarget: {
                type: "cds.Association",
                target: "Target",
                cardinality: { max: "1" },
                on: [{ ref: ["Target", "ID"] }, "=", { ref: ["fkField"] }],
              },
            },
          },
        },
      }),
    ) as CSNInteropEffectiveDocument;
    const result = await renderer(doc);
    expect(result).toContain("fkField");
    expect(result).toContain("Association to one");
  });

  test("association without on clause renders without crashing", async () => {
    const doc = JSON.parse(
      JSON.stringify({
        csnInteropEffective: "1.0",
        $version: "2.0",
        definitions: {
          Target: { kind: "entity", elements: { ID: { type: "cds.String" } } },
          Source: {
            kind: "entity",
            elements: {
              toTarget: { type: "cds.Association", target: "Target" },
              ID: { type: "cds.String" },
            },
          },
        },
      }),
    ) as CSNInteropEffectiveDocument;
    const result = await renderer(doc);
    expect(result).toContain("Association to one");
  });
});

// ---------------------------------------------------------------------------
// renderer.ts — processTypes
// ---------------------------------------------------------------------------
describe("renderer — type definitions", () => {
  test("type with no annotations skips the table", async () => {
    const result = await renderer(makeDoc({ definitions: { MyType: { kind: "type", type: "cds.String" } } }));
    expect(result).toContain("## Type Definitions");
    expect(result).toContain("### MyType");
    expect(result).not.toContain("<table>");
  });

  test("type with annotation renders table with Type and Description columns", async () => {
    const result = await renderer(
      JSON.parse(
        JSON.stringify({
          csnInteropEffective: "1.0",
          $version: "2.0",
          definitions: {
            MyType: { "kind": "type", "type": "cds.String", "@EndUserText.label": "My Label" },
          },
        }),
      ) as CSNInteropEffectiveDocument,
    );
    expect(result).toContain("<th>Type</th>");
    expect(result).toContain("<th>Description</th>");
    expect(result).toContain("@EndUserText.label");
  });

  test("type with length constraint renders type with length", async () => {
    const result = await renderer(
      JSON.parse(
        JSON.stringify({
          csnInteropEffective: "1.0",
          $version: "2.0",
          definitions: {
            ShortString: { "kind": "type", "type": "cds.String", "length": 20, "@EndUserText.label": "Short" },
          },
        }),
      ) as CSNInteropEffectiveDocument,
    );
    expect(result).toContain("cds.String(20)");
  });
});

// ---------------------------------------------------------------------------
// renderer.ts — processServices
// ---------------------------------------------------------------------------
describe("renderer — service definitions", () => {
  test("service with no annotations skips the service table", async () => {
    const result = await renderer(
      makeDoc({
        definitions: {
          "MyService": { kind: "service" },
          "MyService.Entity": { kind: "entity", elements: { ID: { type: "cds.String" } } },
        },
      }),
    );
    expect(result).toContain("## Services");
    const serviceSection = result.slice(result.indexOf("## Services"));
    expect(serviceSection).not.toContain("<table>");
  });

  test("service with annotation renders table with Description column", async () => {
    const doc = JSON.parse(
      JSON.stringify({
        csnInteropEffective: "1.0",
        $version: "2.0",
        definitions: {
          "MyService": { "kind": "service", "@EndUserText.label": "My Service" },
          "MyService.Entity": { kind: "entity", elements: { ID: { type: "cds.String" } } },
        },
      }),
    ) as CSNInteropEffectiveDocument;
    const result = await renderer(doc);
    expect(result).toContain("<th>Description</th>");
    expect(result).toContain("@EndUserText.label");
  });

  test("service lists its exposed entities with anchor links", async () => {
    const result = await renderer(
      makeDoc({
        definitions: {
          "MySvc": { kind: "service" },
          "MySvc.Foo": { kind: "entity", elements: { ID: { type: "cds.String" } } },
          "MySvc.Bar": { kind: "entity", elements: { ID: { type: "cds.String" } } },
        },
      }),
    );
    expect(result).toContain("Exposed Entities:");
    expect(result).toContain("[MySvc.Foo]");
    expect(result).toContain("[MySvc.Bar]");
  });
});

// ---------------------------------------------------------------------------
// rendererUtil.ts — renderContentWithI18n
// ---------------------------------------------------------------------------
describe("renderContentWithI18n", () => {
  test("string without i18n wraps in <code> with JSON quotes", () => {
    expect(renderContentWithI18n("hello", undefined)).toBe('<code>"hello"</code>');
  });

  test("null without i18n renders as <code>null</code>", () => {
    expect(renderContentWithI18n(null, undefined)).toBe("<code>null</code>");
  });

  test("boolean true without i18n renders as <code>true</code>", () => {
    expect(renderContentWithI18n(true, undefined)).toBe("<code>true</code>");
  });

  test("number with i18n provided returns <code>number</code>", () => {
    expect(renderContentWithI18n(42, { en: {} })).toBe("<code>42</code>");
  });

  test("curly braces are escaped to &lbrace; / &rbrace;", () => {
    const result = renderContentWithI18n({ key: "value" }, undefined);
    expect(result).toContain("&lbrace;");
    expect(result).toContain("&rbrace;");
    expect(result).not.toContain("{");
    expect(result).not.toContain("}");
  });

  test("i18n key resolved from en locale", () => {
    expect(renderContentWithI18n("{i18n>greeting}", { en: { greeting: "Hello" } })).toBe("Hello");
  });

  test("i18n key lookup is case-insensitive for language code", () => {
    expect(renderContentWithI18n("{i18n>greeting}", { EN: { greeting: "Hello" } })).toBe("Hello");
  });

  test("unresolved i18n key falls back to <code> wrapper", () => {
    expect(renderContentWithI18n("{i18n>missing}", { en: { other: "x" } })).toContain("<code>");
  });

  test("i18n key with empty string value falls back to <code> wrapper", () => {
    expect(renderContentWithI18n("{i18n>emptyKey}", { en: { emptyKey: "" } })).toContain("<code>");
  });
});

// ---------------------------------------------------------------------------
// rendererUtil.ts — getDescriptionData
// ---------------------------------------------------------------------------
describe("getDescriptionData", () => {
  test("customDescriptionCellDataText is returned verbatim", async () => {
    const custom = "custom <b>text</b>";
    expect(await getDescriptionData([], undefined, undefined, custom)).toBe(custom);
  });

  test("doc prop is parsed via marked", async () => {
    const result = await getDescriptionData([["doc", "**bold**"]], undefined, undefined);
    expect(result).toContain("bold");
  });

  test("doc prop with non-string value is JSON.stringified", async () => {
    const result = await getDescriptionData([["doc", { nested: "object" }]], undefined, undefined);
    expect(result).toContain("nested");
  });

  test("non-doc non-annotation prop renders as 'key: <code>value</code>'", async () => {
    const result = await getDescriptionData([["someKey", "someValue"]], undefined, undefined);
    expect(result).toContain("someKey:");
    expect(result).toContain("someValue");
  });

  test("annotation without callback renders as plain key: <code>value</code>", async () => {
    const result = await getDescriptionData([["@MyAnnotation", "myValue"]], undefined, undefined);
    expect(result).toContain("@MyAnnotation:");
    expect(result).toContain("<code>");
    expect(result).not.toContain("<a ");
  });

  test("annotation with sync callback returning plain string renders anchor link", async () => {
    const result = await getDescriptionData(
      [["@MyAnnotation", "myValue"]],
      { "@MyAnnotation": ((_v: unknown) => "https://sync-result.com") as () => string },
      undefined,
    );
    expect(result).toContain('<a href="https://sync-result.com"');
  });

  test("annotation with async callback renders anchor link", async () => {
    const result = await getDescriptionData(
      [["@MyAnnotation", "myValue"]],
      {
        "@MyAnnotation": async () => {
          await Promise.resolve();
          return "https://async-result.com";
        },
      },
      undefined,
    );
    expect(result).toContain('<a href="https://async-result.com"');
  });

  test("annotation with a promise-returning callback renders an anchor link", async () => {
    const callback: () => Promise<string> = Promise.resolve.bind(Promise, "https://promise-result.com");
    const result = await getDescriptionData([["@MyAnnotation", "myValue"]], { "@MyAnnotation": callback }, undefined);

    expect(result).toContain('<a href="https://promise-result.com"');
  });
});
