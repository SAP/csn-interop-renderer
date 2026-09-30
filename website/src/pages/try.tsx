import Layout from "@theme/Layout";
import BrowserOnly from "@docusaurus/BrowserOnly";
import { useColorMode } from "@docusaurus/theme-common";
import "@sap/csn-interop-renderer/csn-renderer/styles";
import { lazy, Suspense, type ReactNode } from "react";
import { exampleDocuments } from "../components/tryOut/examples";

const CsnInteropRenderer = lazy(() => import("@sap/csn-interop-renderer/csn-renderer"));

function CsnRendererDemo(): ReactNode {
  const { colorMode } = useColorMode();

  return (
    <Suspense fallback={<div>Loading renderer…</div>}>
      <div className="csn-interop-renderer-demo">
        <CsnInteropRenderer examples={exampleDocuments} defaultTheme={colorMode} />
      </div>
    </Suspense>
  );
}

export default function TryPage(): ReactNode {
  return (
    <Layout noFooter>
      <BrowserOnly fallback={<div>Loading renderer…</div>}>{() => <CsnRendererDemo />}</BrowserOnly>
    </Layout>
  );
}
