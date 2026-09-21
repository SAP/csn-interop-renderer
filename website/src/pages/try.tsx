import Layout from "@theme/Layout";
import BrowserOnly from "@docusaurus/BrowserOnly";
import { lazy, Suspense, type ReactNode } from "react";

const Renderer = lazy(() => import("../components/tryOut/renderer/renderer"));

export default function TryPage(): ReactNode {
  return (
    <Layout noFooter>
      <BrowserOnly fallback={<div>Loading renderer…</div>}>
        {() => (
          <Suspense fallback={<div>Loading renderer…</div>}>
            <Renderer />
          </Suspense>
        )}
      </BrowserOnly>
    </Layout>
  );
}
