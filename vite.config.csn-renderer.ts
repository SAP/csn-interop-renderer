import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  esbuild: {
    jsx: "automatic",
  },
  build: {
    outDir: "dist",
    emptyOutDir: false,
    copyPublicDir: false,
    lib: {
      entry: resolve(import.meta.dirname, "src/components/csn-renderer/index.ts"),
      formats: ["es"],
      fileName: () => "csn-renderer/index.js",
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "@monaco-editor/react",
        "@open-resource-discovery/ui-components",
        "@sap/csn-interop-renderer",
        "classnames",
        "dompurify",
        "monaco-editor",
        "react-markdown",
        "rehype-raw",
        "rehype-slug",
      ],
      output: {
        assetFileNames: "csn-renderer/[name][extname]",
      },
    },
  },
});
