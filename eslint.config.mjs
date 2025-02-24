import path from "path";
import { withCustomConfig } from "@sap/eslint-config";

const conf = withCustomConfig([
  {
    ignores: ["dist", "reports", "website/build/", "website/.docusaurus/", "sap-csn-interop-renderer-*"],
  },
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    files: ["src/**/*.ts"],
    languageOptions: {
      parserOptions: {
        project: "tsconfig.json",
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    files: ["website/**/*.ts", "website/**/*.tsx"],
    languageOptions: {
      parserOptions: {
        project: "tsconfig.json",
        tsconfigRootDir: path.resolve(import.meta.dirname, "./website"),
      },
    },
  },
]);

export default conf;
