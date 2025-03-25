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
} from "@sap/csn-interop-specification";
import { marked } from "marked";
import { gfmHeadingId } from "marked-gfm-heading-id";

// Helper functions
function isEntityDefinition(entry: DefinitionEntry): entry is EntityDefinition {
  return entry.kind === "entity";
}

function isStructuredElementReference(
  entry: StructuredElementReference | EqualsOperator | ANDOperator | OnValue,
): entry is StructuredElementReference {
  return typeof entry === "object" && Object.hasOwn(entry, "ref");
}

function isLengthConstrainable(entry: TypeDefinition): entry is StringTypeDefinition | LargeStringTypeDefinition {
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

function renderStringWithI18n(content: string, i18n: CSNInteropRoot["i18n"]): string {
  const esacpedContent =
    typeof content.replace === "function" ? content.replace(/{/g, "&lbrace;").replace(/}/g, "&rbrace;") : content;
  if (!i18n || typeof content?.match !== "function") return esacpedContent;
  const matches = content.match(/^{i18n>(.*)}$/);
  const enKey = Object.keys(i18n).find((key) => key.match(/^en$/i));
  if (matches?.[1] && enKey && i18n[enKey]?.[matches[1]]) {
    return i18n[enKey][matches[1]];
  }
  return esacpedContent;
}

/**
 * Get the header id the same format as GitHub does it for rendered markdown content.
 * @param definitionName The name of a definition
 * @param definitionElementName The name of a definition element
 * @returns The markdown headline id
 *
 */
function getHeaderId(definitionName: string, entityElementName?: string): string {
  if (entityElementName) {
    return `${definitionName.toLowerCase().replaceAll(".", "")}-${entityElementName.toLowerCase().replaceAll(".", "")}`;
  }
  return definitionName.toLowerCase().replaceAll(".", "");
}

function renderObject(content: string): string {
  return `<code>${JSON.stringify(content, undefined, 2).replace(/{/g, "&lbrace;").replace(/}/g, "&rbrace;")}</code>`;
}

// Sub render functions
function processEntities(
  entities: [string, EntityDefinition][],
  serviceNames: string[],
  i18n: CSNInteropRoot["i18n"],
): string {
  let output = "## Entity Definitions\n\n";
  // Process entities
  for (const [entityName, entity] of entities) {
    output += `### ${entityName}\n\n`;

    const dotSplittedEntityName = entityName.split(".");

    if (dotSplittedEntityName.length > 1 && serviceNames.includes(dotSplittedEntityName[0])) {
      output += `- **Exposed via**: [${dotSplittedEntityName[0]}](#${dotSplittedEntityName[0].toLowerCase()})\n`;
    }

    output += "\n";

    // Table header for entity elements
    output += `<table>\n<tr>`;
    output += `<th><strong>Element</strong></th><th><strong>Type</strong></th><th><strong>Description</strong></th>`;
    output += `</tr>\n`;

    for (const [elementName, element] of Object.entries(entity.elements)) {
      const descriptionParts: string[] = [];

      // Key and derived type handling
      if (isCustomType(element) && element.key) {
        descriptionParts.push("<strong>Key</strong>: true");
      }

      // Association handling
      if (isAssociationType(element) && element.target) {
        const targetEntityName = element.target;
        const onClause = element.on;
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

        const cardinality = element.cardinality?.max === "*" ? "to many" : "to one";
        const pathDescription =
          targetEntityName && targetElementName
            ? `Path: <a href="#${getHeaderId(targetEntityName)}">${targetEntityName}</a>.<a href="#${getHeaderId(targetEntityName, targetElementName)}">${targetElementName}</a>`
            : "";

        descriptionParts.push(
          `<strong>Association</strong>: Links ${cardinality} <a href="#${getHeaderId(targetEntityName)}">${targetEntityName}</a> (${pathDescription}) via <a href="#${getHeaderId(entityName, viaKey)}">${viaKey}</a>`,
        );
      }

      // Annotation handling
      for (const [key, value] of Object.entries(element)) {
        if (key.startsWith("@")) {
          const formattedValue = typeof value === "object" ? renderObject(value) : renderStringWithI18n(value, i18n);
          descriptionParts.push(`<strong>${key}</strong>: ${formattedValue}`);
        }
      }

      const description = descriptionParts.join("<br />");
      const typeLink = isCustomType(element)
        ? `<a href="#${element.type.toLowerCase()}">${element.type}</a>`
        : element.type;

      output += `<tr>`;
      output += `<td><strong id="${getHeaderId(entityName, elementName)}">${elementName}</strong></td>`;
      output += `<td>${typeLink}</td>`;
      output += `<td>${description}</td>`;
      output += `</tr>\n`;
    }

    output += "</table>\n\n";
  }
  return output;
}

function processTypes(types: [string, TypeDefinition][], i18n: CSNInteropRoot["i18n"]): string {
  if (!types.length) return "";
  let output = "## Type Definitions\n\n";
  for (const [typeName, definition] of types) {
    const doc = definition.doc || "";
    const lengthConstraint = isLengthConstrainable(definition) && definition.length ? `(${definition.length})` : "";
    const annotations = Object.entries(definition).filter(([key]) => key.startsWith("@"));
    const restProps = Object.entries(definition).filter(
      ([key]) => !key.startsWith("@") && !["doc", "kind", "type", "length"].includes(key),
    );

    output += `### ${typeName}\n\n`;

    if (doc) output += `${marked.parse(doc)}\n`;

    output += `<table>\n<tr><th>Type</th><th>Description</th></tr>\n`;

    const descriptionParts = restProps.map(
      ([key, value]) => `<strong>${key}</strong>: ${typeof value === "object" ? renderObject(value) : value}`,
    );
    const annotationParts = annotations.map(
      ([key, value]) =>
        `<strong>${key}</strong>: ${typeof value === "object" ? renderObject(value) : renderStringWithI18n(value, i18n)}`,
    );

    output += `<tr>`;
    output += `<td>${definition.type}${lengthConstraint}</td>`;
    output += `<td>`;
    if (descriptionParts.length) {
      output += `${descriptionParts.join("<br />")}<br /><br />`;
    }
    if (annotationParts.length) {
      output += `<strong>Annotations</strong><br />${annotationParts.join("<br />")}`;
    }
    output += `</td></tr>\n`;

    output += `</table>\n\n`;
  }
  return output;
}

function processServices(
  services: [string, ServiceDefinition][],
  entities: [string, EntityDefinition][],
  i18n: CSNInteropRoot["i18n"],
): string {
  if (!services.length) return "";
  let output = "## Services\n\n";
  for (const [serviceName, definition] of services) {
    const exposedEntities = entities.filter(([entityName]) => entityName.split(".")[0] === serviceName);
    const doc = definition.doc || "";
    const annotations = Object.entries(definition).filter(([key]) => key.startsWith("@"));
    const restProps = Object.entries(definition).filter(
      ([key]) => !key.startsWith("@") && !["doc", "kind", "type", "length"].includes(key),
    );

    output += `### ${serviceName}\n\n`;

    if (doc) output += `${marked.parse(doc)}\n`;

    if (exposedEntities) {
      output += `Exposed Entities:\n\n${exposedEntities.reduce((result, [entityName]) => [...result, `  - [${entityName}](#${getHeaderId(entityName)})`], [] as string[]).join("\n")}\n\n`;
    }

    if (!restProps.length && !annotations.length) return output;

    output += `<table>\n<tr><th>Description</th></tr>\n`;

    const descriptionParts = restProps.map(
      ([key, value]) => `<strong>${key}</strong>: ${typeof value === "object" ? renderObject(value) : value}`,
    );

    const annotationParts = annotations.map(
      ([key, value]) =>
        `<strong>${key}</strong>: ${typeof value === "object" ? renderObject(value) : renderStringWithI18n(value, i18n)}`,
    );

    output += `<tr>`;
    output += `<td>`;
    if (descriptionParts.length) {
      output += `<td>${descriptionParts.join("<br />")}<br /><br />`;
    }
    if (annotationParts.length) {
      output += `<strong>Annotations</strong><br />${annotationParts.join("<br />")}`;
    }
    output += `</td></tr>\n`;

    output += `</table>\n\n`;
  }
  return output;
}

// Main renderer function
export const renderer = async (json: CSNInteropRoot, asHTml: boolean = false): Promise<string> => {
  const { definitions, meta, i18n } = json;

  let output = "";

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

  output += processEntities(
    entities,
    services.map((serviceTuple) => serviceTuple[0]),
    i18n,
  );
  output += processTypes(types, i18n);
  output += processServices(services, entities, i18n);

  if (asHTml) {
    marked.use(gfmHeadingId());
    const html = await marked.parse(output);
    return html;
  }

  return output;
};
