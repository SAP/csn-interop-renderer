import {
  type TypeDefinition,
  type AssociationType,
  type CSNInteropRoot,
  type ElementEntry,
  type DefinitionEntry,
  type EntityDefinition,
  type StringTypeDefinition,
  type LargeStringTypeDefinition,
  type StructuredElementReference,
  type EqualsOperator,
  type ANDOperator,
  type OnValue,
  type CustomType,
  type ServiceDefinition,
  StringType,
  LargeStringType,
} from "@sap/csn-interop-specification";
import { marked } from "marked";
import { gfmHeadingId } from "marked-gfm-heading-id";
import { getDescriptionData } from "./rendererUtil.js";
import { AnnotationLinkCallback, CsnRendererConfig } from "./types/index.js";

// Helper functions
function isEntityDefinition(entry: DefinitionEntry): entry is EntityDefinition {
  return entry.kind === "entity";
}

function isStructuredElementReference(
  entry: StructuredElementReference | EqualsOperator | ANDOperator | OnValue,
): entry is StructuredElementReference {
  return typeof entry === "object" && Object.hasOwn(entry, "ref");
}

function isLengthConstrainable(
  entry: TypeDefinition | ElementEntry,
): entry is StringTypeDefinition | LargeStringTypeDefinition | StringType | LargeStringType | CustomType {
  return Object.hasOwn(entry, "length");
}

function isTypeDefinition(entry: DefinitionEntry): entry is TypeDefinition {
  return entry.kind === "type";
}

function isServiceDefinition(entry: DefinitionEntry): entry is ServiceDefinition {
  return entry.kind === "service";
}

function isCustomType(element: ElementEntry): element is CustomType {
  return !element.type.startsWith("cds.");
}

function isAssociationType(element: AssociationType | CustomType): element is AssociationType {
  return "target" in element && element.type === "cds.Association";
}

/**
 * Get the header id the same format as GitHub does it for rendered markdown content.
 * @param definitionName The name of a definition
 * @param entityElementName The name of a definition element
 * @returns The markdown headline id in specific GitHub format style
 *
 */
function getHeaderId(definitionName: string, entityElementName?: string): string {
  if (entityElementName) {
    return `${definitionName.toLowerCase().replaceAll(".", "")}-${entityElementName.toLowerCase().replaceAll(".", "")}`;
  }
  return definitionName.toLowerCase().replaceAll(".", "");
}

// Sub render functions
async function processEntities(
  entities: [string, EntityDefinition][],
  serviceNames: string[],
  i18n: CSNInteropRoot["i18n"] | undefined,
  annotationValueLinkTransformers: AnnotationLinkCallback[] | undefined,
): Promise<string> {
  if (!entities.length) return "";
  let output = "## Entity Definitions\n\n";
  for (const [entityName, entityDefinition] of entities) {
    output += `### ${entityName}\n\n`;

    const dotSplittedEntityName = entityName.split(".");

    if (
      dotSplittedEntityName.length > 1 &&
      dotSplittedEntityName[0] &&
      serviceNames.includes(dotSplittedEntityName[0])
    ) {
      output += `Entity exposed via:\n[${dotSplittedEntityName[0]}](#${dotSplittedEntityName[0].toLowerCase()})\n\n`;
    }

    if (entityDefinition.doc) {
      output += `${marked.parse(entityDefinition.doc)}\n`;
    }

    const entityRestProps = Object.entries(entityDefinition).filter(
      ([key]) => !["kind", "doc", "elements"].includes(key),
    );

    output += `${await getDescriptionData(entityRestProps, annotationValueLinkTransformers, i18n)}\n\n`;

    output += `Elements: \n\n`;

    output += `<table>\n`;

    output += `<tr>`;
    output += `<th>Element</th>`;
    output += `<th>Type</th>`;
    output += `<th>Description</th>`;
    output += `</tr>`;

    for (const [elementName, elementDefinition] of Object.entries(entityDefinition.elements)) {
      const elementRestProps = Object.entries(elementDefinition).filter(
        ([key]) => !["type", "length", "cardinality", "on", "target"].includes(key),
      );

      const lengthConstraint =
        isLengthConstrainable(elementDefinition) && elementDefinition.length ? `(${elementDefinition.length})` : "";
      const typeLink = isCustomType(elementDefinition)
        ? `<a href="#${elementDefinition.type.toLowerCase()}">${elementDefinition.type}</a>`
        : elementDefinition.type + lengthConstraint;

      let customDescriptionCellDataText = undefined;

      // TODO: Composition handling

      // Association handling
      if (isAssociationType(elementDefinition) && elementDefinition.target) {
        const targetEntityName = elementDefinition.target;
        const onClause = elementDefinition.on;
        let targetElementName = "";
        let viaKey = "";

        // Extract foreign key and path descriptions
        if (Array.isArray(onClause)) {
          if (isStructuredElementReference(onClause[0])) {
            if (onClause[0].ref.length === 2) {
              targetElementName = onClause[0].ref[1];
            } else if (onClause[0].ref.length === 1) {
              viaKey = onClause[0].ref[0];
            }
          }
          if (isStructuredElementReference(onClause[2])) {
            if (onClause[2].ref.length === 2) {
              targetElementName = onClause[2].ref[1];
            } else if (onClause[2].ref.length === 1) {
              viaKey = onClause[2].ref[0];
            }
          }
        }

        const cardinality = elementDefinition.cardinality?.max === "*" ? "to many" : "to one";
        const pathDescription =
          targetEntityName && targetElementName
            ? `path: <a href="#${getHeaderId(targetEntityName)}">${targetEntityName}</a>.<a href="#${getHeaderId(targetEntityName, targetElementName)}">${targetElementName}</a>`
            : "";

        customDescriptionCellDataText = `Association ${cardinality} <a href="#${getHeaderId(targetEntityName)}">${targetEntityName}</a> (${pathDescription}) via <a href="#${getHeaderId(entityName, viaKey)}">${viaKey}</a>`;
      }

      output += `<tr>`;
      output += `<td><strong id="${getHeaderId(entityName, elementName)}">${elementName}</strong><br /><br /></td>`;
      output += `<td>${typeLink}</td>`;
      output += `<td>${await getDescriptionData(elementRestProps, annotationValueLinkTransformers, i18n, customDescriptionCellDataText)}</td>`;
      output += `</tr>\n`;
    }

    output += "</table>\n\n";
  }
  return output;
}

async function processTypes(
  types: [string, TypeDefinition][],
  i18n: CSNInteropRoot["i18n"] | undefined,
  annotationValueLinkTransformers: AnnotationLinkCallback[] | undefined,
): Promise<string> {
  if (!types.length) return "";
  let output = "## Type Definitions\n\n";
  for (const [typeName, typeDefinition] of types) {
    output += `### ${typeName}\n\n`;
    if (typeDefinition.doc) {
      output += `${marked.parse(typeDefinition.doc)}\n`;
    }

    const restProps: [string, unknown][] = Object.entries(typeDefinition).filter(
      ([key]) => !["doc", "kind", "type", "length"].includes(key),
    );

    if (!restProps.length) return output;

    output += `<table>\n`;

    output += `<tr>`;
    output += `<th>Type</th>`;
    output += `<th>Description</th>`;
    output += `</tr>`;

    output += `<tr>`;
    const lengthConstraint =
      isLengthConstrainable(typeDefinition) && typeDefinition.length ? `(${typeDefinition.length})` : "";
    output += `<td>${typeDefinition.type}${lengthConstraint}</td>`;
    output += `<td>${await getDescriptionData(restProps, annotationValueLinkTransformers, i18n)}</td>`;
    output += `</tr>\n`;

    output += `</table>\n\n`;
  }
  return output;
}

async function processServices(
  services: [string, ServiceDefinition][],
  entities: [string, EntityDefinition][],
  i18n: CSNInteropRoot["i18n"] | undefined,
  annotationValueLinkTransformers: AnnotationLinkCallback[] | undefined,
): Promise<string> {
  if (!services.length) return "";
  let output = "## Services\n\n";
  for (const [serviceName, serviceDefinition] of services) {
    output += `### ${serviceName}\n\n`;
    if (serviceDefinition.doc) {
      output += `${marked.parse(serviceDefinition.doc)}\n`;
    }

    const exposedEntities = entities.filter(([entityName]) => entityName.split(".")[0] === serviceName);
    if (exposedEntities) {
      output += `Exposed Entities:\n\n${exposedEntities.reduce((result, [entityName]) => [...result, `  - [${entityName}](#${getHeaderId(entityName)})`], [] as string[]).join("\n")}\n\n`;
    }

    const restProps: [string, unknown][] = Object.entries(serviceDefinition).filter(
      ([key]) => !["doc", "kind"].includes(key),
    );

    if (!restProps.length) return output;

    output += `<table>\n`;

    output += `<tr>`;
    output += `<th>Description</th>`;
    output += `</tr>`;

    output += `<tr>`;
    output += `<td>${await getDescriptionData(restProps, annotationValueLinkTransformers, i18n)}</td>`;
    output += `</tr>\n`;

    output += `</table>\n\n`;
  }
  return output;
}

// Main renderer function
export const renderer = async (
  json: CSNInteropRoot,
  config?: CsnRendererConfig,
  asHTml: boolean = false,
): Promise<string> => {
  const { definitions, meta, i18n, csnInteropEffective } = json;

  let output = "";

  switch (csnInteropEffective) {
    case "1.0":
      output += `>This Data Product definition description was done using the <a href="https://sap.github.io/csn-interop-specification/spec-v1/csn-interop-effective" target="_blank">Core Schema Notation Interoperability (short: CSN Interop)</a> format.\n\n`;
      break;
    default:
      break;
  }

  if (meta?.document?.title) output += `# ${meta.document.title}\n\n`;
  if (meta?.document?.doc) output += `${meta.document.doc}\n\n`;

  // Filter entities and types
  const entities = Object.entries(definitions).filter(([_, def]) => isEntityDefinition(def)) as [
    string,
    EntityDefinition,
  ][];

  const types = Object.entries(definitions).filter(([_, def]) => isTypeDefinition(def)) as [string, TypeDefinition][];

  const services = Object.entries(definitions).filter(([_, def]) => isServiceDefinition(def)) as [
    string,
    ServiceDefinition,
  ][];

  output += await processEntities(
    entities,
    services.map((serviceTuple) => serviceTuple[0]),
    i18n,
    config?.annotationLinkCallbacks,
  );
  output += await processTypes(types, i18n, config?.annotationLinkCallbacks);
  output += await processServices(services, entities, i18n, config?.annotationLinkCallbacks);

  if (asHTml) {
    marked.use(gfmHeadingId());
    const html = await marked.parse(output);
    return html;
  }

  return output;
};
