import { CSNInteropEffectiveDocument } from "@sap/csn-interop-specification";
import type { AnnotationLinkCallbacks } from "./types/index.js";
import { marked } from "marked";

/**
 * Renders an item's non-structural properties and annotations as description content.
 *
 * Defaults to `<br />`, which works in Markdown and table cells. `"\n"` inserts a
 * Markdown soft break for callers that only need source line boundaries.
 *
 * @param props Properties to render.
 * @param annotationLinkCallbacks Optional annotation-link callbacks.
 * @param i18n Optional translations.
 * @param customDescriptionCellDataText Optional pre-rendered description.
 * @param lineEnding Property separator.
 */
export async function getDescriptionData(
  props: [string, unknown][],
  annotationLinkCallbacks: AnnotationLinkCallbacks | undefined,
  i18n: CSNInteropEffectiveDocument["i18n"] | undefined,
  customDescriptionCellDataText?: string,
  lineEnding: "<br />" | "\n" = "<br />",
): Promise<string> {
  if (customDescriptionCellDataText) return customDescriptionCellDataText;

  const annotations: [string, unknown][] = props.filter(([key]) => key.startsWith("@"));
  const restProps = props.filter(([key]) => !key.startsWith("@"));

  const restPropsParts = restProps.map((prop) => {
    if (prop[0] === "doc") {
      return `${marked.parse(typeof prop[1] === "string" ? prop[1] : JSON.stringify(prop[1]))}`;
    }
    return `${prop[0]}: ${renderContentWithI18n(prop[1], i18n)}`;
  });

  const annotationParts = await Promise.all(
    annotations.map(async ([key, value]) => {
      const transformer = annotationLinkCallbacks?.[key];
      let linkValue: string | undefined;

      if (transformer) {
        linkValue = await transformer(value);
      }

      if (linkValue) {
        return `${key}: <a href="${linkValue}" target="_blank">${renderContentWithI18n(value, i18n)}</a>`;
      }
      return `${key}: ${renderContentWithI18n(value, i18n)}`;
    }),
  );

  const restPropsDescription = restPropsParts.length ? `${restPropsParts.join(lineEnding)}${lineEnding}` : "";
  return `${restPropsDescription}${annotationParts.join(lineEnding)}`;
}

/**
 * Renders a value, resolving English i18n references when available.
 *
 * @param content Value to render.
 * @param i18n Optional translations.
 */
export function renderContentWithI18n(content: unknown, i18n: CSNInteropEffectiveDocument["i18n"] | undefined): string {
  const escapedContent = JSON.stringify(content).replace(/{/g, "&lbrace;").replace(/}/g, "&rbrace;");

  if (!i18n) {
    return `<code>${escapedContent}</code>`;
  }
  if (typeof content === "string") {
    const matches = content.match(/^{i18n>(.*)}$/);
    const enKey = Object.keys(i18n).find((key) => key.match(/^en$/i));
    if (matches && matches[1] && enKey && i18n[enKey] && i18n[enKey][matches[1]]) {
      return i18n[enKey][matches[1]];
    }
  }
  return `<code>${escapedContent}</code>`;
}
