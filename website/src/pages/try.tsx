import Layout from "@theme/Layout";
import BrowserOnly from "@docusaurus/BrowserOnly";
import { useColorMode } from "@docusaurus/theme-common";
import { useHistory, useLocation } from "@docusaurus/router";
import "@sap/csn-interop-renderer/csn-renderer/styles";
import type { AnnotationLinkCallbacks } from "@sap/csn-interop-renderer";
import { lazy, Suspense, type ReactNode, useEffect } from "react";
import { exampleDocuments } from "../components/tryOut/examples";

const CsnInteropRenderer = lazy(() => import("@sap/csn-interop-renderer/csn-renderer"));

const exampleAnnotationLinkCallbacks: AnnotationLinkCallbacks = {
  "@EntityRelationship.entityType": () => "https://example.com/",
  "@ODM.entityName": () => "https://example.com/",
  "@ODM.oidReference.entityName": () => "https://example.com/",
};

function CsnRendererDemo({ sessionId }: { sessionId: string }): ReactNode {
  const { colorMode } = useColorMode();

  return (
    <Suspense fallback={<div>Loading renderer…</div>}>
      <div className="csn-interop-renderer-demo">
        <CsnInteropRenderer
          key={sessionId}
          examples={exampleDocuments}
          annotationLinkCallbacks={exampleAnnotationLinkCallbacks}
          defaultTheme={colorMode}
        />
      </div>
    </Suspense>
  );
}

export default function TryPage(): ReactNode {
  const history = useHistory();
  const location = useLocation();
  const shouldReset = new URLSearchParams(location.search).has("reset");

  useEffect(() => {
    if (shouldReset) history.replace(location.pathname);
  }, [history, location.pathname, shouldReset]);

  return (
    <Layout noFooter>
      <BrowserOnly fallback={<div>Loading renderer…</div>}>
        {() => <CsnRendererDemo sessionId={location.key ?? `${location.pathname}${location.search}`} />}
      </BrowserOnly>
    </Layout>
  );
}
