import {
  clearSharedExampleState,
  readSharedExampleState,
  writeSharedExampleState,
} from "../components/csn-renderer/renderer/shareState.js";

describe("shared example state", () => {
  test("returns null when no example is selected", () => {
    expect(readSharedExampleState("format=markdown")).toBeNull();
  });

  test("reads valid URL state and ignores invalid values", () => {
    expect(
      readSharedExampleState(
        "example=airline&format=markdown&definition=Service&tab=elements&section=properties&item=title&element=ID&previewRow=table-2-row-4",
      ),
    ).toEqual({
      exampleId: "airline",
      format: "markdown",
      explorer: {
        definition: "Service",
        view: "elements",
        section: "properties",
        item: "title",
        element: "ID",
        previewRow: "table-2-row-4",
      },
    });

    expect(readSharedExampleState("example=airline&format=pdf&tab=unknown&previewRow=row-1")).toEqual({
      exampleId: "airline",
      format: "html",
      explorer: {
        definition: undefined,
        view: undefined,
        section: undefined,
        item: undefined,
        element: undefined,
        previewRow: undefined,
      },
    });
  });

  test("writes shared state without discarding unrelated parameters", () => {
    expect(
      writeSharedExampleState("theme=dark&format=markdown", "airline", {
        definition: "Service",
        view: "rendered",
      }),
    ).toBe("theme=dark&example=airline&definition=Service&tab=rendered");
  });

  test("clears only shared state parameters", () => {
    expect(clearSharedExampleState("theme=dark&example=airline&format=html&tab=rendered")).toBe("theme=dark");
  });
});
