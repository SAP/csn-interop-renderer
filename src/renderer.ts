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

const csnInteropEffectiveV1ExtensionsDocumentationPage =
  "https://sap.github.io/csn-interop-specification/spec-v1/extensions/";

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
): entry is StringTypeDefinition | LargeStringTypeDefinition {
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

function renderContentWithI18n(content: unknown, i18n: CSNInteropRoot["i18n"] | undefined): string {
  const escapedContent = JSON.stringify(content).replace(/{/g, "&lbrace;").replace(/}/g, "&rbrace;");

  if (!i18n) {
    return escapedContent;
  }
  const matches = escapedContent.match(/^{i18n>(.*)}$/);
  const enKey = Object.keys(i18n).find((key) => key.match(/^en$/i));
  if (matches?.[1] && enKey && i18n[enKey]?.[matches[1]]) {
    return i18n[enKey][matches[1]];
  }
  return escapedContent;
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

function renderObject(content: object | null): string {
  return `<code>${JSON.stringify(content).replace(/{/g, "&lbrace;").replace(/}/g, "&rbrace;")}</code>`;
}

function getExtensionsDocumentationLink(_version?: string): string {
  return csnInteropEffectiveV1ExtensionsDocumentationPage;
}

// Sub render functions
function processEntities(
  entities: [string, EntityDefinition][],
  serviceNames: string[],
  i18n: CSNInteropRoot["i18n"] | undefined,
): string {
  if (!entities.length) return "";
  let output = "## Entity Definitions\n\n";
  for (const [entityName, entityDefinition] of entities) {
    output += `### ${entityName}\n\n`;
    if (entityDefinition.doc) {
      output += `${marked.parse(entityDefinition.doc)}\n`;
    }

    const dotSplittedEntityName = entityName.split(".");

    if (dotSplittedEntityName.length > 1 && serviceNames.includes(dotSplittedEntityName[0])) {
      output += `Exposed via:\n[${dotSplittedEntityName[0]}](#${dotSplittedEntityName[0].toLowerCase()})\n\n`;
    }

    output += `<table>\n`;

    output += `<tr>`;
    output += `<th>Element</th>`;
    output += `<th>Type</th>`;
    output += `<th>Description</th>`;
    output += `</tr>`;

    for (const [elementName, elementDefinition] of Object.entries(entityDefinition.elements)) {
      const annotations: [string, unknown][] = Object.entries(elementDefinition).filter(([key]) => key.startsWith("@"));
      const restProps = Object.entries(elementDefinition).filter(
        ([key]) => !key.startsWith("@") && !["doc", "type", "length", "cardinality", "on", "target"].includes(key),
      );

      const lengthConstraint =
        isLengthConstrainable(elementDefinition) && elementName.length ? `(${elementName.length})` : "";
      const typeLink = isCustomType(elementDefinition)
        ? `<a href="#${elementDefinition.type.toLowerCase()}">${elementDefinition.type}</a>`
        : elementDefinition.type + lengthConstraint;

      let description = "";

      const descriptionParts = restProps.map(
        ([key, value]) => `${key}: ${typeof value === "object" ? renderObject(value) : value}`,
      );

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

        descriptionParts.push(
          `Association ${cardinality} <a href="#${getHeaderId(targetEntityName)}">${targetEntityName}</a> (${pathDescription}) via <a href="#${getHeaderId(entityName, viaKey)}">${viaKey}</a>`,
        );
      }

      const annotationParts = annotations.map(
        ([key, value]) =>
          `${key}: ${typeof value === "object" ? renderObject(value) : renderContentWithI18n(value, i18n)}`,
      );

      if (descriptionParts.length) {
        description += `${descriptionParts.join("<br />")}<br /><br />`;
      }
      if (annotationParts.length) {
        description += `<a href="${getExtensionsDocumentationLink()}" target="_blank">Annotations</a>:<br />`;
        description += `${annotationParts.join("<br />")}`;
      }

      output += `<tr>`;
      output += `<td><strong id="${getHeaderId(entityName, elementName)}">${elementName}</strong><br /><br /><small>${elementDefinition.doc ? elementDefinition.doc : ""}</small></td>`;
      output += `<td>${typeLink}</td>`;
      output += `<td>${description}</td>`;
      output += `</tr>\n`;
    }

    output += "</table>\n\n";
  }
  return output;
}

function processTypes(types: [string, TypeDefinition][], i18n: CSNInteropRoot["i18n"] | undefined): string {
  if (!types.length) return "";
  let output = "## Type Definitions\n\n";
  for (const [typeName, typeDefinition] of types) {
    output += `### ${typeName}\n\n`;
    if (typeDefinition.doc) {
      output += `${marked.parse(typeDefinition.doc)}\n`;
    }

    const annotations: [string, unknown][] = Object.entries(typeDefinition).filter(([key]) => key.startsWith("@"));
    const restProps = Object.entries(typeDefinition).filter(
      ([key]) => !key.startsWith("@") && !["doc", "kind", "type", "length"].includes(key),
    );

    if (!restProps.length && !annotations.length) return output;

    output += `<table>\n`;

    output += `<tr>`;
    output += `<th>Type</th>`;
    output += `<th>Description</th>`;
    output += `</tr>`;

    output += `<tr>`;
    const lengthConstraint =
      isLengthConstrainable(typeDefinition) && typeDefinition.length ? `(${typeDefinition.length})` : "";
    output += `<td>${typeDefinition.type}${lengthConstraint}</td>`;
    output += `<td>`;
    let description = "";
    const descriptionParts = restProps.map(
      ([key, value]) => `${key}: ${typeof value === "object" ? renderObject(value) : value}`,
    );
    const annotationParts = annotations.map(
      ([key, value]) =>
        `${key}: ${typeof value === "object" ? renderObject(value) : renderContentWithI18n(value, i18n)}`,
    );

    if (descriptionParts.length) {
      description += `${descriptionParts.join("<br />")}<br /><br />`;
    }
    if (annotationParts.length) {
      description += `<a href="${getExtensionsDocumentationLink()}" target="_blank">Annotations</a>:<br />`;
      description += `${annotationParts.join("<br />")}`;
    }
    output += description;
    output += `</td>`;
    output += `</tr>\n`;

    output += `</table>\n\n`;
  }
  return output;
}

function processServices(
  services: [string, ServiceDefinition][],
  entities: [string, EntityDefinition][],
  i18n: CSNInteropRoot["i18n"] | undefined,
): string {
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

    const annotations: [string, unknown][] = Object.entries(serviceDefinition).filter(([key]) => key.startsWith("@"));
    const restProps = Object.entries(serviceDefinition).filter(
      ([key]) => !key.startsWith("@") && !["doc", "kind"].includes(key),
    );

    if (!restProps.length && !annotations.length) return output;

    output += `<table>\n`;

    output += `<tr>`;
    output += `<th>Description</th>`;
    output += `</tr>`;

    output += `<tr>`;
    output += `<td>`;
    let description = "";
    const descriptionParts = restProps.map(
      ([key, value]) => `${key}: ${typeof value === "object" ? renderObject(value) : value}`,
    );
    const annotationParts = annotations.map(
      ([key, value]) =>
        `${key}: ${typeof value === "object" ? renderObject(value) : renderContentWithI18n(value, i18n)}`,
    );

    if (descriptionParts.length) {
      description += `${descriptionParts.join("<br />")}<br /><br />`;
    }
    if (annotationParts.length) {
      description += `<a href="${getExtensionsDocumentationLink()}" target="_blank">Annotations</a>:<br />`;
      description += `${annotationParts.join("<br />")}`;
    }
    output += description;
    output += `</td>`;
    output += `</tr>\n`;

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
