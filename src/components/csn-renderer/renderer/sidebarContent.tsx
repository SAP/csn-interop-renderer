import { Button } from "@open-resource-discovery/ui-components";
import { type ReactNode } from "react";
import type { ExampleDocument } from "./types";
import styles from "./renderer.module.css";

interface Props {
  examples: readonly ExampleDocument[];
  activeExample: ExampleDocument | null;
  onTryExampleClick: (example: ExampleDocument) => void;
}

export default function SidebarContent({ examples, activeExample, onTryExampleClick }: Props): ReactNode {
  return (
    <aside className={styles.FileSidebar} aria-label="CSN examples">
      <div className={styles.FileSidebarHeader}>
        <span className={styles.PaneTitle}>Examples</span>
      </div>
      <div className={styles.FileList}>
        {examples.map((example) => (
          <Button
            key={example.id}
            className={activeExample?.id === example.id ? styles.FileButtonActive : styles.FileButton}
            variant="outline"
            onClick={() => onTryExampleClick(example)}>
            {example.name}
          </Button>
        ))}
        {examples.length === 0 && <p className={styles.EmptyFileList}>No example files available.</p>}
      </div>
    </aside>
  );
}
