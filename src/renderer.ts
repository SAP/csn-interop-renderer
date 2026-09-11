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
} from "@sap/csn-interop-specification";
import { marked } from "marked";
import { gfmHeadingId } from "marked-gfm-heading-id";
import { getDescriptionData } from "./rendererUtil.js";
import type { AnnotationLinkCallbacks, CsnRendererConfig } from "./types/index.js";

type LengthConstrainable = StringTypeDefinition | LargeStringTypeDefinition | StringType | LargeStringType | CustomType;

// Helper functions
function createDefinitionKindPredicate<DefinitionKind extends DefinitionEntry["kind"]>(kind: DefinitionKind) {
  return (entry: DefinitionEntry): entry is Extract<DefinitionEntry, { kind: DefinitionKind }> => entry.kind === kind;
}

const isEntityDefinition = createDefinitionKindPredicate("entity");
const isTypeDefinition = createDefinitionKindPredicate("type");
const isServiceDefinition = createDefinitionKindPredicate("service");

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

function isLengthConstrainable(entry: TypeDefinition | ElementEntry): entry is LengthConstrainable {
  return Object.hasOwn(entry, "length");
}

function isCustomType(element: ElementEntry): element is CustomType {
  return !element.type.startsWith("cds.");
}

function isAssociationType(element: AssociationType | CustomType): element is AssociationType {
  return "target" in element && element.type === "cds.Association";
}

/**
 * Get the header id the same format as GitHub does it for rendered Markdown content.
 * @param definitionName The name of a definition
 * @param entityElementName The name of a definition element
 * @returns The Markdown headline id in specific GitHub format style
 *
 */
function getHeaderId(definitionName: string, entityElementName?: string): string {
  return entityElementName
    ? `${definitionName.toLowerCase().replaceAll(".", "")}-${entityElementName.toLowerCase().replaceAll(".", "")}`
    : definitionName.toLowerCase().replaceAll(".", "");
}

function renderDoc(doc?: string): string {
  return doc ? `${marked.parse(doc)}\n` : "";
}

function buildTable(headers: string[], rows: string[][]): string {
  const headerRow = `<tr>${headers.map((h) => `<th>${h}</th>`).join("")}</tr>`;
  const bodyRows = rows.map((cells) => `<tr>${cells.map((c) => `<td>${c}</td>`).join("")}</tr>`).join("\n");
  return `<table>\n${headerRow}${bodyRows}\n</table>\n\n`;
}

function filterDefinitions<K extends DefinitionEntry["kind"]>(
  definitions: CSNInteropEffectiveDocument["definitions"],
  predicate: (e: DefinitionEntry) => e is Extract<DefinitionEntry, { kind: K }>,
): [string, Extract<DefinitionEntry, { kind: K }>][] {
  return Object.entries(definitions).filter(([, def]) => predicate(def)) as [
    string,
    Extract<DefinitionEntry, { kind: K }>,
  ][];
}

function extractRefsFromOnClause(onClause: NonNullable<AssociationType["on"]>): {
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

// Sub render functions
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

      // TODO: Composition handling

      // Association handling
      if (isAssociationType(elementDefinition) && elementDefinition.target) {
        const targetEntityName = elementDefinition.target;
        const onClause = elementDefinition.on;
        let targetElementName = "";
        let viaKey = "";

        if (Array.isArray(onClause)) {
          ({ targetElementName, viaKey } = extractRefsFromOnClause(onClause));
        }

        const cardinality = elementDefinition.cardinality?.max === "*" ? "to many" : "to one";
        const pathDescription =
          targetEntityName && targetElementName
            ? `path: <a href="#${getHeaderId(targetEntityName)}">${targetEntityName}</a>.<a href="#${getHeaderId(targetEntityName, targetElementName)}">${targetElementName}</a>`
            : "";
        const viaClause = viaKey ? ` via <a href="#${getHeaderId(entityName, viaKey)}">${viaKey}</a>` : "";
        const pathClause = pathDescription ? ` (${pathDescription})` : "";

        customDescriptionCellDataText = `Association ${cardinality} <a href="#${getHeaderId(targetEntityName)}">${targetEntityName}</a>${pathClause}${viaClause}`;
      }

      rows.push([
        `<strong id="${getHeaderId(entityName, elementName)}">${elementName}</strong><br /><br />`,
        typeLink,
        await getDescriptionData(
          elementRestProps,
          annotationValueLinkTransformers,
          i18n,
          customDescriptionCellDataText,
        ),
      ]);
    }

    output += buildTable(["Element", "Type", "Description"], rows);
  }
  return output;
}

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

// Main renderer function
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
