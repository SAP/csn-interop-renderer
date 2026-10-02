import {
  findActiveDefinitionName,
  findDefinitionLine,
} from "../components/csn-renderer/renderer/definitionNavigation.js";

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

  test("uses the definition heading currently reached by the detail scroll", () => {
    const definitions = [
      { name: "Pet", top: 100 },
      { name: "Pets", top: 360 },
      { name: "Error", top: 620 },
    ];

    expect(findActiveDefinitionName(definitions, 50)).toBe("Pet");
    expect(findActiveDefinitionName(definitions, 400)).toBe("Pets");
    expect(findActiveDefinitionName(definitions, 700)).toBe("Error");
    expect(findActiveDefinitionName([], 100)).toBeUndefined();
  });
});
