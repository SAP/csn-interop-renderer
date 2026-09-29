import Layout from "@theme/Layout";
import BrowserOnly from "@docusaurus/BrowserOnly";
import "@sap/csn-interop-renderer/react/styles";
import { lazy, Suspense, type ReactNode } from "react";
import { exampleDocuments } from "../components/tryOut/examples";

const CsnInteropRenderer = lazy(() => import("@sap/csn-interop-renderer/react"));

export default function TryPage(): ReactNode {
  return (
    <Layout noFooter>
      <BrowserOnly fallback={<div>Loading renderer…</div>}>
        {() => (
          <Suspense fallback={<div>Loading renderer…</div>}>
            <CsnInteropRenderer examples={exampleDocuments} />
          </Suspense>
        )}
      </BrowserOnly>
    </Layout>
  );
}
