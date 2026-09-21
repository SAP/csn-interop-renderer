import { Button, Spinner } from "@open-resource-discovery/ui-components";
import type { ReactNode } from "react";
import type { ExampleDocument } from "./examples";
import styles from "./renderer.module.css";
import FileIcon from "./img/file.svg";
import Error from "../error/error";

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
        <Spinner size="lg" aria-label="Rendering" />
        <h3 className={styles.StatusTitle}>Rendering</h3>
      </div>
    );
  }

  return (
    <section className={styles.EmptyState}>
      <FileIcon className={styles.EmptyStateIcon} />
      <h3 className={styles.EmptyStateAction}>Paste CSN JSON content into the editor</h3>
      <div className={styles.ExampleDivider}>
        <span>or</span>
      </div>
      <h3 className={styles.EmptyStateAction}>Drag and drop a CSN JSON file</h3>
      <div className={styles.ExampleDivider}>
        <span>or</span>
      </div>
      <p className={styles.ExampleLabel}>Try out an example</p>
      <div className={styles.ExampleList}>
        {examples.map((example) => (
          <Button
            key={example.name}
            className={styles.ExampleButton}
            variant="outline"
            onClick={() => onTryExampleClick(example)}>
            {example.name}
          </Button>
        ))}
      </div>
    </section>
  );
}
