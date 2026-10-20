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

  return {
    exampleId,
    explorer: {
      definition: searchParams.get("definition") ?? undefined,
      element: searchParams.get("element") ?? undefined,
      section: searchParams.get("section") ?? undefined,
      item: searchParams.get("item") ?? undefined,
    },
  };
};

export const writeSharedExampleState = (search: string, exampleId: string, state: Partial<ExplorerState>): string => {
  const searchParams = new URLSearchParams(search);
  searchParams.set("example", exampleId);
  for (const key of ["format", "tab", "previewRow"]) {
    searchParams.delete(key);
  }

  if (state.definition) {
    searchParams.set("definition", state.definition);
  } else {
    searchParams.delete("definition");
  }

  if (state.element) {
    searchParams.set("element", state.element);
  } else {
    searchParams.delete("element");
  }

  if (state.section && state.item) {
    searchParams.set("section", state.section);
    searchParams.set("item", state.item);
  } else {
    searchParams.delete("section");
    searchParams.delete("item");
  }

  return searchParams.toString();
};

export const clearSharedExampleState = (search: string): string => {
  const searchParams = new URLSearchParams(search);
  sharedStateKeys.forEach((key) => searchParams.delete(key));
  return searchParams.toString();
};
