import type { ExplorerState } from "./definitionExplorer.js";

export interface SharedExampleState {
  exampleId: string;
  explorer: Partial<ExplorerState>;
}

const sharedStateKeys = ["example", "definition", "format", "tab", "section", "item", "element", "previewRow"] as const;

export const readSharedExampleState = (search: string): SharedExampleState | null => {
  const searchParams = new URLSearchParams(search);
  const exampleId = searchParams.get("example");
  if (exampleId === null) return null;

  const view = searchParams.get("tab");
  const section = searchParams.get("section");
  const previewRow = searchParams.get("previewRow");

  return {
    exampleId,
    explorer: {
      definition: searchParams.get("definition") ?? undefined,
      view: view === "overview" || view === "elements" || view === "rendered" ? view : undefined,
      section:
        section === "annotations" || section === "properties" || section === "private-properties" ? section : undefined,
      item: searchParams.get("item") ?? undefined,
      element: searchParams.get("element") ?? undefined,
      previewRow: previewRow !== null && /^table-\d+-row-\d+$/.test(previewRow) ? previewRow : undefined,
    },
  };
};

export const writeSharedExampleState = (search: string, exampleId: string, state: Partial<ExplorerState>): string => {
  const searchParams = new URLSearchParams(search);
  searchParams.set("example", exampleId);
  searchParams.delete("format");

  for (const [key, value] of Object.entries({
    definition: state.definition,
    tab: state.view,
    section: state.section,
    item: state.item,
    element: state.element,
    previewRow: state.previewRow,
  })) {
    if (value) {
      searchParams.set(key, value);
    } else {
      searchParams.delete(key);
    }
  }

  return searchParams.toString();
};

export const clearSharedExampleState = (search: string): string => {
  const searchParams = new URLSearchParams(search);
  sharedStateKeys.forEach((key) => searchParams.delete(key));
  return searchParams.toString();
};
