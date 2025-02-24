import { parser } from "../parser.js";
import example from "../../examples/CSNInterop.js";
import { CSNInteropRoot } from "@sap/csn-interop-specification";

describe("Parser Tests", () => {
  test("should throw some errors if corrupt file is provided", async () => {
    const exampleString = "asdasjklajs;;";
    expect.assertions(2);

    try {
      await parser(exampleString as unknown as CSNInteropRoot);
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
});
