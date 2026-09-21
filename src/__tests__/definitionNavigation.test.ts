import { findDefinitionLine } from "../components/csn-renderer/renderer/definitionNavigation.js";

describe("definition navigation", () => {
  test("finds the editor line for a selected definition", () => {
    const csn = ["{", '  "definitions": {', '    "Airline": {', '      "kind": "entity"', "    }", "  }", "}"].join(
      "\n",
    );

    expect(findDefinitionLine(csn, "Airline")).toBe(3);
    expect(findDefinitionLine(csn, "Missing")).toBeUndefined();
    expect(findDefinitionLine("{}", "Airline")).toBeUndefined();
    expect(findDefinitionLine('{\n  "definitions": {}\n}', "Airline")).toBeUndefined();
  });

  test("does not confuse nested properties with definition names", () => {
    const csn = [
      "{",
      '  "definitions": {',
      '    "Entity": {',
      '      "kind": "entity"',
      "    },",
      '    "kind": {',
      '      "kind": "entity"',
      "    }",
      "  }",
      "}",
    ].join("\n");

    expect(findDefinitionLine(csn, "kind")).toBe(6);
  });
});
