import {
  clearSharedExampleState,
  normalizeExplorerState,
  readSharedExampleState,
  writeSharedExampleState,
} from "../components/csn-renderer/renderer/shareState.js";

describe("shared example fragment state", () => {
  test("returns null when no example is selected", () => {
    expect(readSharedExampleState("#tab=rendered")).toBeNull();
    expect(readSharedExampleState("")).toBeNull();
  });

  test("reads valid URL state and ignores invalid values", () => {
    expect(
      readSharedExampleState(
        "#example=airline&definition=Service&tab=elements&section=properties&item=title&element=ID",
      ),
    ).toEqual({
      exampleId: "airline",
      explorer: {
        definition: "Service",
        element: "ID",
        section: "properties",
        item: "title",
      },
    });

    expect(readSharedExampleState("#example=airline&tab=unknown")).toEqual({
      exampleId: "airline",
      explorer: {
        definition: undefined,
        element: undefined,
        section: undefined,
        item: undefined,
      },
    });
  });

  test("writes shared state without discarding unrelated fragment parameters", () => {
    expect(
      writeSharedExampleState("#theme=dark&format=markdown", "airline", {
        definition: "Service",
      }),
    ).toBe("#theme=dark&example=airline&definition=Service");

    expect(
      writeSharedExampleState("#theme=dark", "airline", {
        definition: "Service",
        element: "ID",
      }),
    ).toBe("#theme=dark&example=airline&definition=Service&element=ID");

    expect(
      writeSharedExampleState("#theme=dark", "airline", {
        definition: "Service",
        section: "annotations",
        item: "@EndUserText.label",
      }),
    ).toBe("#theme=dark&example=airline&definition=Service&section=annotations&item=%40EndUserText.label");
  });

  test("clears only shared state fragment parameters", () => {
    expect(clearSharedExampleState("#theme=dark&example=airline&format=html&tab=rendered")).toBe("#theme=dark");
    expect(clearSharedExampleState("#example=airline&definition=Service&element=ID")).toBe("");
    expect(clearSharedExampleState("#example=airline&kind=type&definition=AirlineUuid")).toBe("");
  });

  test("adds the model's definition kind and keeps older links readable", () => {
    const oldHash = "#example=airline&definition=AirlineUuid";
    const oldState = readSharedExampleState(oldHash);
    expect(oldState?.explorer.definition).toBe("AirlineUuid");
    const hash = writeSharedExampleState(oldHash, "airline", oldState?.explorer ?? {}, "type");
    expect(hash).toBe("#example=airline&kind=type&definition=AirlineUuid");
    expect(readSharedExampleState(hash)).toEqual(oldState);
  });

  test("replaces stale kinds when switching definitions and clears the kind with the selection", () => {
    const hash = writeSharedExampleState(
      "#theme=dark&example=airline&kind=type&definition=AirlineUuid",
      "airline",
      { definition: "AirlineService.Airline", element: "AirlineID" },
      "entity",
    );
    expect(hash).toBe("#theme=dark&example=airline&kind=entity&definition=AirlineService.Airline&element=AirlineID");
    expect(writeSharedExampleState(hash, "airline", {})).toBe("#theme=dark&example=airline");
  });

  test("restores encoded selection state from a URL fragment while preserving the query", () => {
    const url = new URL("https://example.com/try?theme=dark");
    const explorer = { definition: "Service.Airline & Routes", element: "ID/#" };
    url.hash = writeSharedExampleState(url.hash, "airline", explorer);

    expect(url.search).toBe("?theme=dark");
    expect(url.hash).toBe("#example=airline&definition=Service.Airline+%26+Routes&element=ID%2F%23");
    expect(readSharedExampleState(url.hash)).toEqual({ exampleId: "airline", explorer });

    url.hash = writeSharedExampleState(url.hash, "airline", {});
    expect(url.hash).toBe("#example=airline");
    url.hash = clearSharedExampleState(url.hash);
    expect(url.href).toBe("https://example.com/try?theme=dark");
  });

  test("keeps a whole-element selection and removes conflicting property selections", () => {
    const document = { definitions: { Entity: { elements: { ID: { type: "cds.String" } }, type: "example" } } };
    const selected = normalizeExplorerState(document, {
      definition: "Entity",
      element: "ID",
      section: "properties",
      item: "type",
    });
    expect(selected).toEqual({ definition: "Entity", element: "ID", section: "", item: "" });
    expect(
      writeSharedExampleState("", "example", {
        definition: "Entity",
        element: "ID",
        section: "properties",
        item: "type",
      }),
    ).toBe("#example=example&definition=Entity&element=ID");
  });

  test("validates actual model members and falls back to a valid definition property", () => {
    const document = {
      definitions: { Entity: { "elements": { ID: {} }, "type": "example", "@label": false, "__private": null } },
    };
    expect(
      normalizeExplorerState(document, {
        definition: "Entity",
        element: "missing",
        section: "properties",
        item: "type",
      }),
    ).toEqual({ definition: "Entity", element: "", section: "properties", item: "type" });
    for (const [section, item] of [
      ["annotations", "@label"],
      ["private", "__private"],
    ]) {
      expect(normalizeExplorerState(document, { definition: "Entity", section, item })).toEqual({
        definition: "Entity",
        element: "",
        section,
        item,
      });
    }
    for (const item of ["elements", "kind", "doc", "constructor", "missing", "@label"]) {
      expect(normalizeExplorerState(document, { definition: "Entity", section: "properties", item })).toEqual({
        definition: "Entity",
        element: "",
        section: "",
        item: "",
      });
    }
    expect(normalizeExplorerState(document, { definition: "constructor" })).toEqual({
      definition: "",
      element: "",
      section: "",
      item: "",
    });
    expect(normalizeExplorerState(document, { definition: "Entity", element: "constructor" })).toEqual({
      definition: "Entity",
      element: "",
      section: "",
      item: "",
    });
  });
});
