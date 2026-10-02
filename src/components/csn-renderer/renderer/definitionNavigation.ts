export interface DefinitionPosition {
  name: string;
  top: number;
}

/** Returns the one-based editor line containing a top-level CSN definition. */
export const findDefinitionLine = (csn: string, definitionName: string): number | undefined => {
  const lines = csn.split("\n");
  const definitionKey = JSON.stringify(definitionName) + ":";
  const definitionsLineIndex = lines.findIndex((line) => line.trimStart().startsWith('"definitions":'));
  if (definitionsLineIndex === -1) return undefined;

  const firstDefinitionLine = lines
    .slice(definitionsLineIndex + 1)
    .find((line) => line.trim() !== "" && !line.trimStart().startsWith("}"));
  if (firstDefinitionLine === undefined) return undefined;

  const definitionIndentationLength = firstDefinitionLine.length - firstDefinitionLine.trimStart().length;
  const lineIndex = lines.findIndex(
    (line, index) =>
      index > definitionsLineIndex &&
      line.slice(0, definitionIndentationLength) === firstDefinitionLine.slice(0, definitionIndentationLength) &&
      line.slice(definitionIndentationLength).startsWith(definitionKey),
  );
  return lineIndex === -1 ? undefined : lineIndex + 1;
};

/** Returns the last definition heading at or above the visible-detail boundary. */
export const findActiveDefinitionName = (
  definitions: readonly DefinitionPosition[],
  scrollBoundary: number,
): string | undefined => {
  let activeName = definitions[0]?.name;

  for (const definition of definitions) {
    if (definition.top > scrollBoundary) break;
    activeName = definition.name;
  }

  return activeName;
};
