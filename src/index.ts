import { parser } from "./parser.js";
import * as customWebComponent from "./customWebComponent/csnRenderer.js";
import { CSNInteropRoot } from "@sap/csn-interop-specification";

/**
 * Converts JSON CSNInteropRoot object into an markdown string.
 *
 * @param inputText A valid JSON CSNInteropRoot object.
 */
async function generateMarkdown(inputText: CSNInteropRoot): Promise<string> {
  const result = await parser(inputText);
  return result;
}

/**
 * Converts JSON CSNInteropRoot object into an html string.
 *
 * @param inputText A valid JSON CSNInteropRoot object.
 */
async function generateHtml(inputText: CSNInteropRoot): Promise<string> {
  const result = await parser(inputText, true);
  return result;
}

export { generateHtml, generateMarkdown, customWebComponent };
