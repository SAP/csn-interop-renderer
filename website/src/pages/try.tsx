import Layout from "@theme/Layout";
import React from "react";
import Renderer from "../components/tryOut/renderer/renderer";

export default function TryPage(): React.JSX.Element {
  return (
    <Layout noFooter>
      <Renderer />
    </Layout>
  );
}
