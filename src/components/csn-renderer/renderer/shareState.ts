import type { CsnDocument, ExplorerState } from "./types.js";

export const isExposedDefinitionProperty = (key: string): boolean =>
  !key.startsWith("@") && !key.startsWith("__") && !["kind", "elements", "doc"].includes(key);

export const normalizeExplorerState = (document: CsnDocument, state: Partial<ExplorerState>): ExplorerState => {
  const empty = { definition: "", element: "", section: "", item: "" };
  const definitions = document.definitions ?? {};
  if (!state.definition || !Object.hasOwn(definitions, state.definition)) return empty;

  const definition = definitions[state.definition];
  const selected = { ...empty, definition: state.definition };
  if (state.element && Object.hasOwn(definition.elements ?? {}, state.element)) {
    return { ...selected, element: state.element };
  }
  if (
    state.item &&
    Object.hasOwn(definition, state.item) &&
    ((state.section === "annotations" && state.item.startsWith("@")) ||
      (state.section === "private" && state.item.startsWith("__")) ||
      (state.section === "properties" && isExposedDefinitionProperty(state.item)))
  ) {
    return { ...selected, section: state.section, item: state.item };
  }
  return selected;
};

export interface SharedExampleState {
  exampleId: string;
  explorer: Partial<ExplorerState>;
}

const sharedStateKeys = [
  "example",
  "kind",
  "definition",
  "format",
  "tab",
  "section",
  "item",
  "element",
  "previewRow",
] as const;

const readFragmentParams = (hash: string): URLSearchParams => new URLSearchParams(hash.replace(/^#/, ""));

const formatFragment = (params: URLSearchParams): string => {
  const fragment = params.toString();
  return fragment ? `#${fragment}` : "";
};

export const readSharedExampleState = (hash: string): SharedExampleState | null => {
  const searchParams = readFragmentParams(hash);
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

export const writeSharedExampleState = (
  hash: string,
  exampleId: string,
  state: Partial<ExplorerState>,
  definitionKind?: string,
): string => {
  const searchParams = readFragmentParams(hash);
  sharedStateKeys.forEach((key) => searchParams.delete(key));
  searchParams.set("example", exampleId);

  if (state.definition) {
    if (definitionKind) searchParams.set("kind", definitionKind);
    searchParams.set("definition", state.definition);
  }

  if (state.element) {
    searchParams.set("element", state.element);
  }

  if (!state.element && state.section && state.item) {
    searchParams.set("section", state.section);
    searchParams.set("item", state.item);
  }

  return formatFragment(searchParams);
};

export const clearSharedExampleState = (hash: string): string => {
  const searchParams = readFragmentParams(hash);
  sharedStateKeys.forEach((key) => searchParams.delete(key));
  return formatFragment(searchParams);
};
