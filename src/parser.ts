import { CSNInteropRoot, schemas } from "@sap/csn-interop-specification";
import { renderer } from "./renderer.js";
import { CsnInteropRendererConfig } from "./types/index.js";

export const parser = async (
  text: CSNInteropRoot,
  config?: CsnInteropRendererConfig,
  generateAsHTml: boolean = false,
): Promise<string> => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  let Draft07;
  const jsonSchemaLib = await import("json-schema-library");

  // Check if we are in Node environment
  if (typeof process !== "undefined" && process.versions && process.versions.node) {
    // Node environment
    Draft07 = jsonSchemaLib.default.Draft07;
  } else {
    // Browser environment
    Draft07 = jsonSchemaLib.Draft07;
  }

  const draft07 = new Draft07(schemas.csnInteropEffectiveSchema);
  const errors = draft07.validate(text);

  if (errors.length) {
    const preparedErrors = [];

    for (const error of errors) {
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
