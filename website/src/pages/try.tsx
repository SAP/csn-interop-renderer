import Layout from "@theme/Layout";
import React from "react";
import Renderer from "../components/tryOut/renderer/renderer";
import { CsnRendererProps } from "@sap/csn-interop-renderer/dist/src/customWebComponent/csnRenderer";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace React.JSX {
    interface IntrinsicElements {
      "csn-renderer": CsnRendererProps;
    }
  }
}

export default function TryPage(): React.JSX.Element {
  return (
    <Layout noFooter>
      <Renderer />
    </Layout>
  );
}
