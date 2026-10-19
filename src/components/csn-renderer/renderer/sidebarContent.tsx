import { Button } from "@open-resource-discovery/ui-components";
import { type ChangeEvent, type ReactNode, useRef } from "react";
import type { ExampleDocument } from "./types";
import styles from "./renderer.module.css";

interface Props {
  examples: readonly ExampleDocument[];
  activeExample: ExampleDocument | null;
  onTryExampleClick: (example: ExampleDocument) => void;
  onFileSelect: (file: File) => void;
}

export default function SidebarContent({ examples, activeExample, onTryExampleClick, onFileSelect }: Props): ReactNode {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const onInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const [file] = event.target.files ?? [];
    if (file !== undefined) onFileSelect(file);
    event.target.value = "";
  };

  return (
    <aside className={styles.FileSidebar} aria-label="CSN files">
      <div className={styles.FileSidebarHeader}>
        <span className={styles.PaneTitle}>Files</span>
        <Button variant="outline" size="sm" onClick={() => fileInputRef.current?.click()}>
          Open file
        </Button>
        <input
          ref={fileInputRef}
          className={styles.FileInput}
          type="file"
          accept="application/json,.json"
          aria-label="Open CSN JSON file"
          onChange={onInputChange}
        />
      </div>
      <div className={styles.FileList}>
        <span className={styles.FileListLabel}>Examples</span>
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
