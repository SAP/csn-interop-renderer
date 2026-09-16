import Layout from "@theme/Layout";
import type { ReactNode } from "react";
import Renderer from "../components/tryOut/renderer/renderer";

export default function TryPage(): ReactNode {
  return (
    <Layout noFooter>
      <Renderer />
    </Layout>
  );
}
