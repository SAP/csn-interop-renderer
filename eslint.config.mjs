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
    rules: {
      "require-await": "off",
      "@typescript-eslint/require-await": "error",
      "@typescript-eslint/return-await": "error",
      "@typescript-eslint/promise-function-async": "error",
    },
  },
  {
    files: ["website/**/*.ts", "website/**/*.tsx"],
  },
]);

export default conf;
