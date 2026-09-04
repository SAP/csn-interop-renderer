import { parser } from "../parser.js";
import example from "../../examples/CSNInterop.js";
import { CSNInteropEffectiveDocument } from "@sap/csn-interop-specification";

describe("Parser Tests", () => {
  test("should throw some errors if corrupt file is provided", async () => {
    const exampleString = "asdasjklajs;;";
    expect.assertions(2);

    try {
      await parser(exampleString as unknown as CSNInteropEffectiveDocument);
    } catch (error: unknown) {
      expect(error).toBeDefined();
      expect(error).toMatchSnapshot();
    }
  });

  test("should throw some errors JSON file is invalid", async () => {
    // @ts-expect-error We intentionally break something here
    delete example.definitions;

    expect.assertions(2);

    try {
      await parser(example);
    } catch (error: unknown) {
      expect(error).toBeDefined();
      expect(error).toMatchSnapshot();
    }
  });

  test("rejects a document missing the definitions field with a validation error", async () => {
    const bad = { csnInteropEffective: "1.0", $version: "2.0" } as unknown as CSNInteropEffectiveDocument;
    const error = await parser(bad).catch((e: unknown) => e);
    expect(error).toBeInstanceOf(Error);
    expect((error as Error).message).toMatch(/definitions/i);
  });

  test("rejects null input", async () => {
    await expect(parser(null as unknown as CSNInteropEffectiveDocument)).rejects.toThrow();
  });

  test("rejects empty object (missing required fields)", async () => {
    await expect(parser({} as unknown as CSNInteropEffectiveDocument)).rejects.toThrow();
  });

  test("accepts a minimal valid document and returns a non-empty string", async () => {
    const doc: CSNInteropEffectiveDocument = {
      csnInteropEffective: "1.0",
      $version: "2.0",
      definitions: {
        MinEntity: { kind: "entity", elements: { ID: { type: "cds.String" } } },
      },
    };
    const result = await parser(doc);
    expect(typeof result).toBe("string");
    expect(result.length).toBeGreaterThan(0);
  });
});
