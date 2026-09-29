import DOMPurify from "dompurify";
import { type KeyboardEvent, type MouseEvent, type ReactNode, useEffect, useRef } from "react";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import styles from "./renderer.module.css";
import type { OutputFormat } from "./types";

interface Props {
  format: OutputFormat;
  content: string;
  selectedRowId?: string;
  onRowSelect?: (rowId: string) => void;
}

export default function RenderedOutput({ format, content, selectedRowId, onRowSelect }: Props): ReactNode {
  const sanitizedContent = DOMPurify.sanitize(content);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (wrapper === null) return;

    wrapper.querySelectorAll("table").forEach((table, tableIndex) => {
      let rowIndex = 0;
      Array.from(table.rows).forEach((row) => {
        if (row.parentElement?.tagName === "THEAD") return;

        const rowId = `table-${tableIndex}-row-${rowIndex++}`;
        row.dataset.previewRowId = rowId;
        row.tabIndex = 0;
        row.setAttribute("aria-label", "Select row to share");
        row.toggleAttribute("data-preview-row-selected", rowId === selectedRowId);
      });
    });

    if (selectedRowId === undefined || selectedRowId === "") return;

    const selectedRow = Array.from(wrapper.querySelectorAll<HTMLTableRowElement>("tr[data-preview-row-id]")).find(
      (row) => row.dataset.previewRowId === selectedRowId,
    );
    if (selectedRow === undefined) return;

    const frame = window.requestAnimationFrame(() => {
      const wrapperTop = wrapper.getBoundingClientRect().top;
      const rowTop = selectedRow.getBoundingClientRect().top;
      wrapper.scrollTo({
        top: wrapper.scrollTop + rowTop - wrapperTop - 16,
        behavior: "auto",
      });
    });
    return (): void => window.cancelAnimationFrame(frame);
  }, [content, format, selectedRowId]);

  const selectRow = (target: EventTarget | null): void => {
    if (!(target instanceof Element)) return;
    const row = target.closest<HTMLTableRowElement>("tr[data-preview-row-id]");
    if (row?.dataset.previewRowId !== undefined) onRowSelect?.(row.dataset.previewRowId);
  };

  const onClick = (event: MouseEvent<HTMLDivElement>): void => selectRow(event.target);
  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>): void => {
    if (event.key !== "Enter" && event.key !== " " && event.key !== "Spacebar") return;
    event.preventDefault();
    selectRow(event.target);
  };

  const wrapperProps = {
    ref: wrapperRef,
    className: styles.RenderWrapper,
    onClick,
    onKeyDown,
  };

  switch (format) {
    case "markdown":
      return (
        <div {...wrapperProps}>
          <p className={styles.PreviewHint}>Select a table row, then use Share to copy a link to that row.</p>
          <Markdown rehypePlugins={[rehypeRaw, rehypeSlug]}>{sanitizedContent}</Markdown>
        </div>
      );
    case "html":
      return (
        <div {...wrapperProps}>
          <p className={styles.PreviewHint}>Select a table row, then use Share to copy a link to that row.</p>
          <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
        </div>
      );
    case "web-component":
      return (
        <div {...wrapperProps}>
          <csn-renderer source={content} />
        </div>
      );
    default:
      throw new Error(`Unsupported output format: ${format}`);
  }
}
