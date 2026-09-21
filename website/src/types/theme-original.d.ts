declare module "@theme-original/MDXComponents" {
  // Inline type — avoids depending on @theme/MDXComponents which is also
  // a webpack-only alias invisible to TypeScript.
  type MdxComponentsObject = Record<string, import("react").ComponentType<Record<string, unknown>>>;

  const mdxComponents: MdxComponentsObject;

  export default mdxComponents;
}

declare module "@theme-original/DocItem/Layout" {
  import type { Props } from "@theme/DocItem/Layout";

  const docItemLayout: import("react").ComponentType<Props>;

  export default docItemLayout;
}
