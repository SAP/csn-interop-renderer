import { CSNInteropEffectiveDocument } from "@sap/csn-interop-specification";
import { AnnotationLinkCallbacks, LinkCallbackFunction } from "./types/index.js";
import { marked } from "marked";

// TODO: extend function to support html line endings <br> and/or markdown line endings \n
// because the function can be called inside html table where <br> is needed and in plain markdown context where \n is needed BUT <br> just happens to work as well
export async function getDescriptionData(
  props: [string, unknown][],
  annotationLinkCallbacks: AnnotationLinkCallbacks | undefined,
  i18n: CSNInteropEffectiveDocument["i18n"] | undefined,
  customDescriptionCellDataText?: string,
): Promise<string> {
  if (customDescriptionCellDataText) return customDescriptionCellDataText;

  const annotations: [string, unknown][] = props.filter(([key]) => key.startsWith("@"));
  const restProps = props.filter(([key]) => !key.startsWith("@"));

  let description = "";

  const restPropsParts = restProps.map((prop) => {
    if (prop[0] === "doc") {
      return `${marked.parse(typeof prop[1] === "string" ? prop[1] : JSON.stringify(prop[1]))}`;
    }
    return `${prop[0]}: ${renderContentWithI18n(prop[1], i18n)}`;
  });

  const annotationParts = await Promise.all(
    annotations.map(async ([key, value]) => {
      if (annotationLinkCallbacks) {
        let transformer: LinkCallbackFunction | undefined = undefined;
        for (const annotationKey in annotationLinkCallbacks) {
          if (annotationKey === key) {
            transformer = annotationLinkCallbacks[annotationKey];
          }
        }
        let linkValue: string | undefined = undefined;
        if (transformer) {
          if (transformer.constructor.name === "AsyncFunction") {
            linkValue = await transformer(value);
          } else if (transformer.constructor.name === "Function") {
            if ((transformer(value) as Promise<string>).then) {
              await (transformer(value) as Promise<string>).then((result) => {
                linkValue = result;
              });
            } else {
              linkValue = transformer(value) as string;
            }
          }
        }
        if (linkValue) {
          return `${key}: <a href="${linkValue}" target="_blank">${renderContentWithI18n(value, i18n)}</a>`;
        }
        return `${key}: ${renderContentWithI18n(value, i18n)}`;
      }
      return `${key}: ${renderContentWithI18n(value, i18n)}`;
    }),
  );

  if (restPropsParts.length) {
    description += `${restPropsParts.join("<br />")}<br />`;
  }

  if (annotationParts.length) {
    description += `${annotationParts.join("<br />")}`;
  }
  return description;
}

export function renderContentWithI18n(content: unknown, i18n: CSNInteropEffectiveDocument["i18n"] | undefined): string {
  const escapedContent = JSON.stringify(content).replace(/{/g, "&lbrace;").replace(/}/g, "&rbrace;");

  if (!i18n) {
    return `<code>${escapedContent}</code>`;
  }
  if (typeof content === "string") {
    const matches = content.match(/^{i18n>(.*)}$/);
    const enKey = Object.keys(i18n).find((key) => key.match(/^en$/i));
    if (matches && matches[1] && enKey && i18n[enKey] && i18n[enKey][matches[1]]) {
      return i18n[enKey][matches[1]] || `<code>${escapedContent}</code>`;
    }
  }
  return `<code>${escapedContent}</code>`;
}
