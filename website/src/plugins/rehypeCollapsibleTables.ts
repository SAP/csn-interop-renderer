const LONG_TABLE_ROW_THRESHOLD = 10;

interface HastNode {
  type: string;
  tagName?: string;
  name?: string;
  value?: string;
  children?: HastNode[];
  properties?: Record<string, unknown>;
}
const isElement = (node: HastNode, name: string): boolean =>
  (node.type === "element" && node.tagName === name) ||
  (node.type === "mdxJsxFlowElement" && node.name === name) ||
  (node.type === "mdxJsxTextElement" && node.name === name);
const text = (node: HastNode): string => node.value ?? node.children?.map(text).join("") ?? "";
const element = (tagName: string, className: string, children: HastNode[]): HastNode => ({
  type: "element",
  tagName,
  properties: { className: [className] },
  children,
});
const rows = (table: HastNode): HastNode[] => {
  const result: HastNode[] = [];
  const visit = (node: HastNode): void => {
    if (node !== table && isElement(node, "table")) return;
    if (isElement(node, "tr")) {
      result.push(node);
      return;
    }
    node.children?.forEach(visit);
  };
  table.children?.forEach(visit);
  return result;
};
const cells = (row: HastNode): HastNode[] =>
  (row.children ?? []).filter((child) => isElement(child, "th") || isElement(child, "td"));
const cell = (label: string, className: string, children: HastNode[]): HastNode => ({
  ...element("td", className, children),
  properties: { className: [className], dataLabel: label },
});
const header = (label: string): HastNode => ({
  ...element("th", "tableHeader", [{ type: "text", value: label }]),
  properties: { className: ["tableHeader"], scope: "col" },
});
function metadata(nodes: HastNode[]): { label: string; value: HastNode[] } | undefined {
  const first = nodes[0];
  if (first?.type !== "text" || !first.value) return;
  const index = first.value.indexOf(":");
  const label = first.value.slice(0, index).trim();
  if (index < 0 || !label.match(/^@?[A-Za-z_$][\w.$-]*$/)) return;
  const value = first.value.slice(index + 1).trimStart();
  return { label, value: [...(value ? [{ type: "text", value }] : []), ...nodes.slice(1)] };
}
function lines(children: HastNode[]): HastNode[][] {
  return children.reduce<HastNode[][]>(
    (result, child) => {
      if (isElement(child, "br")) result.push([]);
      else result[result.length - 1].push(child);
      return result;
    },
    [[]],
  );
}
function description(cellNode: HastNode): void {
  const lineItems = lines(cellNode.children ?? [])
    .filter((line) => line.length)
    .map((line) => ({ line, item: metadata(line) }));
  cellNode.children = [
    element(
      "div",
      "descriptionContent",
      lineItems.map(({ line, item }) => {
        if (!item) return element("div", "descriptionText", line);
        const className =
          item.label === "@EndUserText.quickInfo"
            ? "descriptionMetadataPrimary"
            : item.label === "key"
              ? "descriptionMetadataItem descriptionMetadataKey"
              : item.label === "@EndUserText.heading"
                ? "descriptionMetadataItem descriptionMetadataHeading"
                : item.label.startsWith("@Semantics.")
                  ? "descriptionMetadataItem descriptionMetadataSemantic"
                  : "descriptionMetadataItem";
        return element("div", className, [
          element("span", "descriptionMetadataLabel", [{ type: "text", value: item.label }]),
          element("span", "descriptionMetadataValue", item.value),
        ]);
      }),
    ),
  ];
}
function itemLabel(item: HastNode): string | undefined {
  return text(item.children?.[0] ?? { type: "text" });
}
function itemValue(item: HastNode | undefined): HastNode[] {
  return item?.children?.[1]?.children ?? [];
}
function details(items: HastNode[], relationships: HastNode[]): HastNode {
  if (!items.length && !relationships.length)
    return cell("Details", "detailsCell", [element("span", "emptyValue", [{ type: "text", value: "—" }])]);
  return cell("Details", "detailsCell", [
    ...(relationships.length
      ? [
          element("div", "relationshipDetails", [
            element("span", "relationshipLabel", [{ type: "text", value: "Relationship" }]),
            ...relationships,
          ]),
        ]
      : []),
    element("div", "descriptionContent", items),
  ]);
}
function business(label: HastNode | undefined, quickInfo: HastNode | undefined): HastNode[] {
  const value = itemValue(label);
  const quickValue = itemValue(quickInfo);
  return value.length
    ? [
        element("div", "businessLabel", value),
        ...(text({ type: "element", children: quickValue }) !== text({ type: "element", children: value }) &&
        quickValue.length
          ? [element("div", "businessQuickInfo", quickValue)]
          : []),
      ]
    : [element("span", "emptyValue", [{ type: "text", value: "—" }])];
}
function sections(table: HastNode): void {
  const direct = (table.children ?? []).filter((child) => isElement(child, "tr"));
  if (!direct.length || (table.children ?? []).some((child) => isElement(child, "thead"))) return;
  table.children = [
    ...(table.children ?? []).filter((child) => !isElement(child, "tr")),
    element("thead", "tableHead", [direct[0]]),
    element("tbody", "tableBody", direct.slice(1)),
  ];
}
function enhance(table: HastNode): void {
  const tableRows = rows(table);
  const names = cells(tableRows[0] ?? { type: "element" }).map((item) => text(item).trim());
  const entity = names.join("|") === "Element|Type|Description";
  const definition = names.join("|") === "Type|Description" || names.join("|") === "Description";
  if (!entity && !definition) return;
  const descriptionIndex = names.indexOf("Description");
  tableRows.slice(1).forEach((row) => {
    const source = cells(row)[descriptionIndex];
    if (source) description(source);
  });
  if (entity) {
    tableRows[0].children = ["Element", "Type", "Business label", "Details"].map(header);
    tableRows.slice(1).forEach((row) => {
      const rowCells = cells(row);
      const items = rowCells[descriptionIndex]?.children?.[0]?.children ?? [];
      const label = items.find((item) => itemLabel(item) === "@EndUserText.label");
      const quick = items.find((item) => itemLabel(item) === "@EndUserText.quickInfo");
      const key = items.find((item) => itemLabel(item) === "key");
      const relation = items.filter((item) => /^(Association|Composition) to /.test(text(item)));
      const remaining = items.filter(
        (item) => item !== label && item !== quick && item !== key && !relation.includes(item),
      );
      const elementChildren = rowCells[0].children ?? [];
      row.children = [
        cell("Element", "elementCell", elementChildren),
        cell("Type", "typeCell", rowCells[1].children ?? []),
        cell("Business label", "businessLabelCell", business(label, quick)),
        details(key ? [key, ...remaining] : remaining, relation),
      ];
    });
  } else {
    const typed = names[0] === "Type";
    tableRows[0].children = (typed ? ["Type", "Business label", "Details"] : ["Business label", "Details"]).map(header);
    tableRows.slice(1).forEach((row) => {
      const rowCells = cells(row);
      const items = rowCells[descriptionIndex]?.children?.[0]?.children ?? [];
      const label = items.find((item) => itemLabel(item) === "@EndUserText.label");
      const quick = items.find((item) => itemLabel(item) === "@EndUserText.quickInfo");
      const relation = items.filter((item) => /^(Association|Composition) to /.test(text(item)));
      const remaining = items.filter((item) => item !== label && item !== quick && !relation.includes(item));
      row.children = [
        ...(typed ? [cell("Type", "typeCell", rowCells[0].children ?? [])] : []),
        cell("Business label", "businessLabelCell", business(label, quick)),
        details(remaining, relation),
      ];
    });
  }
  sections(table);
}
function transform(node: HastNode): void {
  if (!node.children) return;
  node.children = node.children.map((child) => {
    transform(child);
    if (!isElement(child, "table")) return child;
    enhance(child);
    return rows(child).length > LONG_TABLE_ROW_THRESHOLD
      ? { type: "mdxJsxFlowElement", name: "FilterableTable", children: [child] }
      : child;
  });
}
export default function rehypeCollapsibleTables() {
  return (tree: HastNode): void => transform(tree);
}
