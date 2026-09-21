import {
  clearSharedExampleState,
  readSharedExampleState,
  writeSharedExampleState,
} from "../components/csn-renderer/renderer/shareState.js";

describe("shared example state", () => {
  test("returns null when no example is selected", () => {
    expect(readSharedExampleState("tab=rendered")).toBeNull();
  });

  test("reads valid URL state and ignores invalid values", () => {
    expect(
      readSharedExampleState(
        "example=airline&definition=Service&tab=elements&section=properties&item=title&element=ID",
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

    expect(readSharedExampleState("example=airline&tab=unknown")).toEqual({
      exampleId: "airline",
      explorer: {
        definition: undefined,
        element: undefined,
        section: undefined,
        item: undefined,
      },
    });
  });

  test("writes shared state without discarding unrelated parameters", () => {
    expect(
      writeSharedExampleState("theme=dark&format=markdown", "airline", {
        definition: "Service",
      }),
    ).toBe("theme=dark&example=airline&definition=Service");

    expect(
      writeSharedExampleState("theme=dark", "airline", {
        definition: "Service",
        element: "ID",
      }),
    ).toBe("theme=dark&example=airline&definition=Service&element=ID");

    expect(
      writeSharedExampleState("theme=dark", "airline", {
        definition: "Service",
        section: "annotations",
        item: "@EndUserText.label",
      }),
    ).toBe("theme=dark&example=airline&definition=Service&section=annotations&item=%40EndUserText.label");
  });

  test("clears only shared state parameters", () => {
    expect(clearSharedExampleState("theme=dark&example=airline&format=html&tab=rendered")).toBe("theme=dark");
  });
});
