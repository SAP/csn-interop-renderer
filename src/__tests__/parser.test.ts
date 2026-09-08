import { parser } from "../parser.js";
import type { CSNInteropEffectiveDocument } from "@sap/csn-interop-specification";

describe("parser", () => {
  test("rejects a non-object input", async () => {
    await expect(parser("not a document" as unknown as CSNInteropEffectiveDocument)).rejects.toThrow(/type.*object/i);
  });

  test("rejects a document missing the definitions field with a validation error", async () => {
    const bad = { csnInteropEffective: "1.0", $version: "2.0" } as unknown as CSNInteropEffectiveDocument;

    await expect(parser(bad)).rejects.toThrow(/definitions/i);
  });

  test("rejects null input", async () => {
    await expect(parser(null as unknown as CSNInteropEffectiveDocument)).rejects.toThrow(/type.*object/i);
  });

  test("rejects an empty document", async () => {
    await expect(parser({} as unknown as CSNInteropEffectiveDocument)).rejects.toThrow(/csnInteropEffective/i);
  });

  test("renders a minimal valid document", async () => {
    const doc: CSNInteropEffectiveDocument = {
      csnInteropEffective: "1.0",
      $version: "2.0",
      definitions: {
        MinEntity: { kind: "entity", elements: { ID: { type: "cds.String" } } },
      },
    };
    await expect(parser(doc)).resolves.toContain("MinEntity");
  });
});
