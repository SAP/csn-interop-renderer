import { CSNInteropEffectiveDocument, schemas } from "@sap/csn-interop-specification";
import { renderer } from "./renderer.js";
import { CsnRendererConfig } from "./types/index.js";
import { compileSchema } from "json-schema-library";

export const parser = async (
  text: CSNInteropEffectiveDocument,
  config?: CsnRendererConfig,
  generateAsHTml: boolean = false,
): Promise<string> => {
  const draft07SchemaNode = compileSchema(schemas.csnInteropEffectiveSchema);
  const validationResult = draft07SchemaNode.validate(text);

  if (validationResult.errors.length) {
    const preparedErrors = [];

    for (const error of validationResult.errors) {
      preparedErrors.push({ message: error.message, type: error.type, code: error.code });
    }

    throw new Error(
      preparedErrors.reduce((combinedMessage, error) => {
        combinedMessage += `\n[${error.type}]: ${error.message} (${error.code})`;
        return combinedMessage;
      }, ""),
    );
  }
  return renderer(text, config, generateAsHTml);
};
