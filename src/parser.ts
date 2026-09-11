import { schemas, type CSNInteropEffectiveDocument } from "@sap/csn-interop-specification";
import { compileSchema } from "json-schema-library";
import type { CsnRendererConfig } from "./types/index.js";
import { renderer } from "./renderer.js";

/**
 * Validates and renders a CSN Interoperability document.
 *
 * @param text Document to validate and render.
 * @param config Optional renderer configuration.
 * @param generateAsHtml Converts the generated Markdown to HTML when `true`.
 */
export const parser = async (
  text: CSNInteropEffectiveDocument,
  config?: CsnRendererConfig,
  generateAsHtml: boolean = false,
): Promise<string> => {
  const validationResult = compileSchema(schemas.csnInteropEffectiveSchema).validate(text);

  if (validationResult.errors.length) {
    throw new Error(
      validationResult.errors.map((error) => `\n[${error.type}]: ${error.message} (${error.code})`).join(""),
    );
  }

  return renderer(text, config, generateAsHtml);
};
