import {
  type TypeDefinition,
  type AssociationType,
  type CSNInteropEffectiveDocument,
  type ElementEntry,
  type DefinitionEntry,
  type EntityDefinition,
  type StringTypeDefinition,
  type LargeStringTypeDefinition,
  type StructuredElementReference,
  type EqualsOperator,
  type SmallerOperator,
  type SmallerEqualsOperator,
  type GreaterOperator,
  type GreaterEqualsOperator,
  type ANDOperator,
  type OnValue,
  type CustomType,
  type ServiceDefinition,
  type StringType,
  type LargeStringType,
  type CompositionType,
} from "@sap/csn-interop-specification";
import { marked } from "marked";
import { gfmHeadingId } from "marked-gfm-heading-id";
import { getDescriptionData } from "./rendererUtil.js";
import type { AnnotationLinkCallbacks, CsnRendererConfig } from "./types/index.js";

type LengthConstrainable = StringTypeDefinition | LargeStringTypeDefinition | StringType | LargeStringType | CustomType;
type RelationshipType = AssociationType | CompositionType;
type RelationshipKind = "Association" | "Composition";

/**
 * Creates a type guard for a specific definition kind.
 *
 * @param kind Definition kind to match.
 */
function createDefinitionKindPredicate<DefinitionKind extends DefinitionEntry["kind"]>(kind: DefinitionKind) {
  return (entry: DefinitionEntry): entry is Extract<DefinitionEntry, { kind: DefinitionKind }> => entry.kind === kind;
}

const isEntityDefinition = createDefinitionKindPredicate("entity");
const isTypeDefinition = createDefinitionKindPredicate("type");
const isServiceDefinition = createDefinitionKindPredicate("service");

/**
 * Checks whether an `on`-clause entry is a structured element reference.
 *
 * @param entry `on`-clause entry to inspect.
 */
function isStructuredElementReference(
  entry:
    | StructuredElementReference
    | EqualsOperator
    | SmallerOperator
    | SmallerEqualsOperator
    | GreaterOperator
    | GreaterEqualsOperator
    | ANDOperator
    | OnValue,
): entry is StructuredElementReference {
  return typeof entry === "object" && Object.hasOwn(entry, "ref");
}

/**
 * Checks whether a type or element declares a length constraint.
 *
 * @param entry Type or element to inspect.
 */
function isLengthConstrainable(entry: TypeDefinition | ElementEntry): entry is LengthConstrainable {
  return Object.hasOwn(entry, "length");
}

/**
 * Checks whether an element uses a user-defined CDS type.
 *
 * @param element Element to inspect.
 */
function isCustomType(element: ElementEntry): element is CustomType {
  return !element.type.startsWith("cds.");
}

/**
 * Checks whether an element is a CDS association with a target.
 *
 * @param element Association or custom type to inspect.
 */
function isAssociationType(element: AssociationType | CustomType): element is AssociationType {
  return "target" in element && element.type === "cds.Association";
}

/**
 * Checks whether an element is a CDS composition with a target.
 *
 * @param element Composition or custom type to inspect.
 */
function isCompositionType(element: CompositionType | CustomType): element is CompositionType {
  return "target" in element && element.type === "cds.Composition";
}

/**
 * Creates the GitHub-style heading ID for a definition or element.
 *
 * @param definitionName Definition name.
 * @param entityElementName Optional element name.
 */
function getHeaderId(definitionName: string, entityElementName?: string): string {
  return entityElementName
    ? `${definitionName.toLowerCase().replaceAll(".", "")}-${entityElementName.toLowerCase().replaceAll(".", "")}`
    : definitionName.toLowerCase().replaceAll(".", "");
}

/**
 * Renders an optional documentation string as Markdown content.
 *
 * @param doc Documentation string to render.
 */
function renderDoc(doc?: string): string {
  return doc ? `${marked.parse(doc)}\n` : "";
}

/**
 * Builds an HTML table embedded in the generated Markdown.
 *
 * @param headers Column headings.
 * @param rows Table rows and their cell content.
 */
function buildTable(headers: string[], rows: string[][]): string {
  const headerRow = `<tr>${headers.map((h) => `<th>${h}</th>`).join("")}</tr>`;
  const bodyRows = rows.map((cells) => `<tr>${cells.map((c) => `<td>${c}</td>`).join("")}</tr>`).join("\n");
  return `<table>\n${headerRow}${bodyRows}\n</table>\n\n`;
}

/**
 * Selects definitions matching a typed kind predicate.
 *
 * @param definitions Document definitions to filter.
 * @param predicate Type guard for the required definition kind.
 */
function filterDefinitions<K extends DefinitionEntry["kind"]>(
  definitions: CSNInteropEffectiveDocument["definitions"],
  predicate: (e: DefinitionEntry) => e is Extract<DefinitionEntry, { kind: K }>,
): [string, Extract<DefinitionEntry, { kind: K }>][] {
  return Object.entries(definitions).filter(([, def]) => predicate(def)) as [
    string,
    Extract<DefinitionEntry, { kind: K }>,
  ][];
}

/**
 * Extracts the target element and local key referenced by a relationship `on` clause.
 *
 * @param onClause Relationship `on` clause to inspect.
 */
function extractRefsFromOnClause(onClause: NonNullable<RelationshipType["on"]>): {
  targetElementName: string;
  viaKey: string;
} {
  let targetElementName = "";
  let viaKey = "";
  for (const entry of onClause) {
    if (isStructuredElementReference(entry)) {
      if (!targetElementName && entry.ref.length === 2) {
        targetElementName = entry.ref[1];
      } else if (!viaKey && entry.ref.length === 1) {
        viaKey = entry.ref[0];
      }

      if (targetElementName && viaKey) return { targetElementName, viaKey };
    }
  }
  return { targetElementName, viaKey };
}

/**
 * Renders the description for an association or composition element.
 *
 * @param kind Relationship kind to display.
 * @param relationship Association or composition to describe.
 * @param entityName Source entity name used for local-key links.
 */
function renderRelationshipDescription(
  kind: RelationshipKind,
  relationship: RelationshipType,
  entityName: string,
): string {
  const targetEntityName = relationship.target;
  const onClause = relationship.on;
  let targetElementName = "";
  let viaKey = "";

  if (Array.isArray(onClause)) {
    ({ targetElementName, viaKey } = extractRefsFromOnClause(onClause));
  }

  const cardinality = relationship.cardinality?.max === "*" ? "to many" : "to one";
  const pathDescription = targetElementName
    ? `path: <a href="#${getHeaderId(targetEntityName)}">${targetEntityName}</a>.<a href="#${getHeaderId(targetEntityName, targetElementName)}">${targetElementName}</a>`
    : "";
  const viaClause = viaKey ? ` via <a href="#${getHeaderId(entityName, viaKey)}">${viaKey}</a>` : "";
  const pathClause = pathDescription ? ` (${pathDescription})` : "";

  return `${kind} ${cardinality} <a href="#${getHeaderId(targetEntityName)}">${targetEntityName}</a>${pathClause}${viaClause}`;
}

/**
 * Renders all entity definitions and their elements.
 *
 * @param entities Entity definitions to render.
 * @param serviceNames Service names used to identify exposed entities.
 * @param i18n Optional translations.
 * @param annotationValueLinkTransformers Optional annotation-link callbacks.
 */
async function processEntities(
  entities: [string, EntityDefinition][],
  serviceNames: string[],
  i18n: CSNInteropEffectiveDocument["i18n"] | undefined,
  annotationValueLinkTransformers: AnnotationLinkCallbacks | undefined,
): Promise<string> {
  if (!entities.length) return "";

  let output = "## Entity Definitions\n\n";
  for (const [entityName, entityDefinition] of entities) {
    output += `### ${entityName}\n\n`;

    const serviceName = serviceNames.find((name) => entityName.startsWith(`${name}.`));
    if (serviceName) {
      output += `Entity exposed via:\n[${serviceName}](#${getHeaderId(serviceName)})\n\n`;
    }

    output += renderDoc(entityDefinition.doc);

    const entityRestProps = Object.entries(entityDefinition).filter(
      ([key]) => !["kind", "doc", "elements"].includes(key),
    );

    output += `${await getDescriptionData(entityRestProps, annotationValueLinkTransformers, i18n)}\n\n`;

    output += `Elements: \n\n`;

    const rows: string[][] = [];
    for (const [elementName, elementDefinition] of Object.entries(entityDefinition.elements)) {
      const elementRestProps = Object.entries(elementDefinition).filter(
        ([key]) => !["type", "length", "cardinality", "on", "target"].includes(key),
      );

      const lengthConstraint =
        isLengthConstrainable(elementDefinition) && elementDefinition.length ? `(${elementDefinition.length})` : "";
      const typeLink = isCustomType(elementDefinition)
        ? `<a href="#${getHeaderId(elementDefinition.type)}">${elementDefinition.type}</a>`
        : elementDefinition.type + lengthConstraint;

      let customDescriptionCellDataText: string | undefined;
      let compositionDescription: string | undefined;

      if (isCompositionType(elementDefinition) && elementDefinition.target) {
        compositionDescription = renderRelationshipDescription("Composition", elementDefinition, entityName);
      }

      // Association handling
      if (isAssociationType(elementDefinition) && elementDefinition.target) {
        customDescriptionCellDataText = renderRelationshipDescription("Association", elementDefinition, entityName);
      }

      const descriptionData = await getDescriptionData(
        elementRestProps,
        annotationValueLinkTransformers,
        i18n,
        customDescriptionCellDataText,
      );
      const descriptionCellData = compositionDescription
        ? [compositionDescription, descriptionData].filter(Boolean).join("<br />")
        : descriptionData;

      rows.push([
        `<strong id="${getHeaderId(entityName, elementName)}">${elementName}</strong><br /><br />`,
        typeLink,
        descriptionCellData,
      ]);
    }

    output += buildTable(["Element", "Type", "Description"], rows);
  }
  return output;
}

/**
 * Renders all custom type definitions.
 *
 * @param types Type definitions to render.
 * @param i18n Optional translations.
 * @param annotationValueLinkTransformers Optional annotation-link callbacks.
 */
async function processTypes(
  types: [string, TypeDefinition][],
  i18n: CSNInteropEffectiveDocument["i18n"] | undefined,
  annotationValueLinkTransformers: AnnotationLinkCallbacks | undefined,
): Promise<string> {
  if (!types.length) return "";
  let output = "## Type Definitions\n\n";
  for (const [typeName, typeDefinition] of types) {
    output += `### ${typeName}\n\n`;
    output += renderDoc(typeDefinition.doc);

    const restProps: [string, unknown][] = Object.entries(typeDefinition).filter(
      ([key]) => !["doc", "kind", "type", "length"].includes(key),
    );

    if (!restProps.length) continue;

    const lengthConstraint =
      isLengthConstrainable(typeDefinition) && typeDefinition.length ? `(${typeDefinition.length})` : "";

    output += buildTable(
      ["Type", "Description"],
      [
        [
          `${typeDefinition.type}${lengthConstraint}`,
          await getDescriptionData(restProps, annotationValueLinkTransformers, i18n),
        ],
      ],
    );
  }
  return output;
}

/**
 * Renders all service definitions and their exposed entities.
 *
 * @param services Service definitions to render.
 * @param entities Entity definitions used to identify exposed entities.
 * @param i18n Optional translations.
 * @param annotationValueLinkTransformers Optional annotation-link callbacks.
 */
async function processServices(
  services: [string, ServiceDefinition][],
  entities: [string, EntityDefinition][],
  i18n: CSNInteropEffectiveDocument["i18n"] | undefined,
  annotationValueLinkTransformers: AnnotationLinkCallbacks | undefined,
): Promise<string> {
  if (!services.length) return "";
  let output = "## Services\n\n";
  for (const [serviceName, serviceDefinition] of services) {
    output += `### ${serviceName}\n\n`;
    output += renderDoc(serviceDefinition.doc);

    const exposedEntities = entities.filter(([entityName]) => entityName.startsWith(`${serviceName}.`));
    if (exposedEntities.length) {
      output += `Exposed Entities:\n\n${exposedEntities.reduce((result, [entityName]) => [...result, `  - [${entityName}](#${getHeaderId(entityName)})`], [] as string[]).join("\n")}\n\n`;
    }

    const restProps: [string, unknown][] = Object.entries(serviceDefinition).filter(
      ([key]) => !["doc", "kind"].includes(key),
    );

    if (!restProps.length) continue;

    output += buildTable(
      ["Description"],
      [[await getDescriptionData(restProps, annotationValueLinkTransformers, i18n)]],
    );
  }
  return output;
}

/**
 * Renders a CSN Interoperability document as Markdown or HTML.
 *
 * @param json Document to render.
 * @param config Optional renderer configuration.
 * @param asHtml Converts the generated Markdown to HTML when `true`.
 */
export const renderer = async (
  json: CSNInteropEffectiveDocument,
  config?: CsnRendererConfig,
  asHtml = false,
): Promise<string> => {
  const { definitions, meta, i18n } = json;

  let output = "";

  if (meta?.document?.title) output += `# ${meta.document.title}\n\n`;
  if (meta?.document?.doc) output += `${meta.document.doc}\n\n`;

  const entities = filterDefinitions(definitions, isEntityDefinition);
  const types = filterDefinitions(definitions, isTypeDefinition);
  const services = filterDefinitions(definitions, isServiceDefinition);

  output += await processEntities(
    entities,
    services.map(([serviceName]) => serviceName),
    i18n,
    config?.annotationLinkCallbacks,
  );
  output += await processTypes(types, i18n, config?.annotationLinkCallbacks);
  output += await processServices(services, entities, i18n, config?.annotationLinkCallbacks);

  if (asHtml) {
    marked.use(gfmHeadingId());
    return marked.parse(output);
  }

  return output;
};
