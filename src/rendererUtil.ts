import { CSNInteropRoot } from "@sap/csn-interop-specification";
import { csnInteropEffectiveV1ExtensionsDocumentationPage } from "./constants.js";

export function getDescriptionCellData(
  props: [string, unknown][],
  annotations: [string, unknown][],
  i18n: CSNInteropRoot["i18n"] | undefined,
  customDescriptionCellDataText?: string,
): string {
  if (customDescriptionCellDataText) return customDescriptionCellDataText;

  let description = "";
  const propsParts = props.map(([key, value]) => `${key}: ${typeof value === "object" ? renderObject(value) : value}`);
  const annotationParts = annotations.map(
    ([key, value]) => `${key}: ${typeof value === "object" ? renderObject(value) : renderContentWithI18n(value, i18n)}`,
  );

  if (propsParts.length) {
    description += `${propsParts.join("<br />")}<br /><br />`;
  }
  if (annotationParts.length) {
    description += `<a href="${getExtensionsDocumentationLink()}" target="_blank">Annotations</a>:<br />`;
    description += `${annotationParts.join("<br />")}`;
  }
  return description;
}

function getExtensionsDocumentationLink(_version?: string): string {
  return csnInteropEffectiveV1ExtensionsDocumentationPage;
}

function renderObject(content: object | null): string {
  return `<code>${JSON.stringify(content).replace(/{/g, "&lbrace;").replace(/}/g, "&rbrace;")}</code>`;
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
