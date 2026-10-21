declare module "*.module.css" {
  const classes: Record<string, string>;
  export default classes;
}

declare module "*.svg" {
  const source: string;
  export default source;
}

declare module "@open-resource-discovery/ui-components/styles";
