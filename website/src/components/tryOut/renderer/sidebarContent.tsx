import { Button, Label, Title } from "@ui5/webcomponents-react";
import type { ReactNode } from "react";
import type { ExampleDocument } from "./examples";
import styles from "./renderer.module.css";
import FileIcon from "./img/file.svg";
import Error from "../error/error";
import Loader from "../loader/loader";

interface Props {
  error: unknown;
  isRendering: boolean;
  examples: readonly ExampleDocument[];
  onTryExampleClick: (example: ExampleDocument) => void;
}

export default function SidebarContent({ error, isRendering, examples, onTryExampleClick }: Props): ReactNode {
  if (error !== null) {
    return (
      <div className={styles.Status}>
        <Error name="unableToLoad" title="Error while rendering" description={String(error)} />
      </div>
    );
  }

  if (isRendering) {
    return (
      <div className={styles.Status}>
        <Loader />
        <Title className={styles.StatusTitle} size="H3">
          Rendering
        </Title>
      </div>
    );
  }

  return (
    <section className={styles.EmptyState}>
      <FileIcon className={styles.EmptyStateIcon} />
      <Title className={styles.EmptyStateAction} size="H3">
        Paste CSN JSON content into the editor
      </Title>
      <div className={styles.ExampleDivider}>
        <span>or</span>
      </div>
      <Title className={styles.EmptyStateAction} size="H3">
        Drag and drop a CSN JSON file
      </Title>
      <div className={styles.ExampleDivider}>
        <span>or</span>
      </div>
      <Label className={styles.ExampleLabel}>Try out an example</Label>
      <div className={styles.ExampleList}>
        {examples.map((example) => (
          <Button
            key={example.name}
            className={styles.ExampleButton}
            design="Default"
            onClick={() => onTryExampleClick(example)}>
            {example.name}
          </Button>
        ))}
      </div>
    </section>
  );
}
