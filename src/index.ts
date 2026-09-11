import { parser } from "./parser.js";
import * as customWebComponent from "./customWebComponent/csnRenderer.js";
import type { CSNInteropEffectiveDocument } from "@sap/csn-interop-specification";
import type { CsnRendererConfig } from "./types/index.js";

/**
 * Converts JSON CSNInteropEffectiveDocument object into a Markdown string.
 *
 * @param inputText A valid JSON CSNInteropEffectiveDocument object.
 * @param config
 */
export async function generateMarkdown(
  inputText: CSNInteropEffectiveDocument,
  config?: CsnRendererConfig,
): Promise<string> {
  return parser(inputText, config);
}

/**
 * Converts JSON CSNInteropEffectiveDocument object into an HTML string.
 *
 * @param inputText A valid JSON CSNInteropEffectiveDocument object.
 * @param config
 */
export async function generateHtml(
  inputText: CSNInteropEffectiveDocument,
  config?: CsnRendererConfig,
): Promise<string> {
  return parser(inputText, config, true);
}

export { customWebComponent };

export * from "./types/index.js";
