import { Button, Label, Title } from "@ui5/webcomponents-react";
import type { ReactNode } from "react";
import FileIcon from "./img/file.svg";
import Error from "../error/error";
import Loader from "../loader/loader";

interface Props {
  error: unknown;
  isRendering: boolean;
  onTryExampleClick: () => void;
}

export default function SidebarContent({ error, isRendering, onTryExampleClick }: Props): ReactNode {
  if (error !== null) {
    return (
      <div style={{ textAlign: "center", marginTop: "150px" }}>
        <Error name="unableToLoad" title="Error while rendering" description={String(error)} />
      </div>
    );
  }

  if (isRendering) {
    return (
      <div style={{ textAlign: "center", marginTop: "150px" }}>
        <Loader />
        <Title style={{ marginTop: "20px" }} size="H3">
          Rendering
        </Title>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", marginTop: "150px" }}>
      <FileIcon />
      <Title style={{ marginTop: "20px" }} size="H3">
        Paste some CSN JSON content input in the editor!
      </Title>
      <Label style={{ marginTop: "5px" }}>or</Label>
      <div style={{ marginTop: "5px" }}>
        <Button design="Emphasized" onClick={onTryExampleClick}>
          Try out Example
        </Button>
      </div>
    </div>
  );
}
