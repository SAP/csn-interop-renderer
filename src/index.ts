import { parser } from "./parser.js";
import * as customWebComponent from "./customWebComponent/csnRenderer.js";
import { CSNInteropRoot } from "@sap/csn-interop-specification";
import { CsnInteropRendererConfig } from "./types/index.js";

/**
 * Converts JSON CSNInteropRoot object into an markdown string.
 *
 * @param inputText A valid JSON CSNInteropRoot object.
 */
async function generateMarkdown(inputText: CSNInteropRoot, config?: CsnInteropRendererConfig): Promise<string> {
  const result = await parser(inputText, config);
  return result;
}

/**
 * Converts JSON CSNInteropRoot object into an html string.
 *
 * @param inputText A valid JSON CSNInteropRoot object.
 */
async function generateHtml(inputText: CSNInteropRoot, config?: CsnInteropRendererConfig): Promise<string> {
  const result = await parser(inputText, config, true);
  return result;
}

export { generateHtml, generateMarkdown, customWebComponent };
export * from "./types/index.js";
