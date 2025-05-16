import { parser } from "./parser.js";
import * as customWebComponent from "./customWebComponent/csnRenderer.js";
import { CSNInteropEffectiveDocument } from "@sap/csn-interop-specification";
import { CsnRendererConfig } from "./types/index.js";

/**
 * Converts JSON CSNInteropEffectiveDocument object into an markdown string.
 *
 * @param inputText A valid JSON CSNInteropEffectiveDocument object.
 */
async function generateMarkdown(inputText: CSNInteropEffectiveDocument, config?: CsnRendererConfig): Promise<string> {
  const result = await parser(inputText, config);
  return result;
}

/**
 * Converts JSON CSNInteropEffectiveDocument object into an html string.
 *
 * @param inputText A valid JSON CSNInteropEffectiveDocument object.
 */
async function generateHtml(inputText: CSNInteropEffectiveDocument, config?: CsnRendererConfig): Promise<string> {
  const result = await parser(inputText, config, true);
  return result;
}

export { generateHtml, generateMarkdown, customWebComponent };
export * from "./types/index.js";
