import { CSNInteropRoot } from "@sap/csn-interop-specification";
import { AnnotationLinkCallback } from "./types/index.js";
import { marked } from "marked";

export function getDescriptionData(
  props: [string, unknown][],
  annotations: [string, unknown][],
  annotationLinkCallbacks: AnnotationLinkCallback[] | undefined,
  i18n: CSNInteropRoot["i18n"] | undefined,
  customDescriptionCellDataText?: string,
): string {
  if (customDescriptionCellDataText) return customDescriptionCellDataText;

  let description = "";

  const propsParts = props.map(([key, value]) => {
    if (key === "doc") {
      return `${marked.parse(typeof value === "string" ? value : JSON.stringify(value))}`;
    }
    return `${key}: ${renderContentWithI18n(value, i18n)}`;
  });

  const annotationParts = annotations.map(([key, value]) => {
    if (annotationLinkCallbacks) {
      const transformer = annotationLinkCallbacks.find((annotationKey) => Object.hasOwn(annotationKey, key));
      if (transformer) {
        return `${key}: <a href="${transformer[key](value)}" target="_blank">${value}</a>`;
      }
    }
    return `${key}: ${renderContentWithI18n(value, i18n)}`;
  });

  if (propsParts.length) {
    description += `${propsParts.join("<br />")}<br />`;
  }

  if (annotationParts.length) {
    description += `${annotationParts.join("<br />")}`;
  }
  return description;
}

export function renderContentWithI18n(content: unknown, i18n: CSNInteropRoot["i18n"] | undefined): string {
  const escapedContent = JSON.stringify(content).replace(/{/g, "&lbrace;").replace(/}/g, "&rbrace;");

  if (!i18n) {
    return `<code>${escapedContent}</code>`;
  }
  const matches = escapedContent.match(/^{i18n>(.*)}$/);
  const enKey = Object.keys(i18n).find((key) => key.match(/^en$/i));
  if (matches?.[1] && enKey && i18n[enKey]?.[matches[1]]) {
    return i18n[enKey][matches[1]];
  }
  return `<code>${escapedContent}</code>`;
}
