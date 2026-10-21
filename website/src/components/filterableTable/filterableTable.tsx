import {
  type ChangeEvent,
  type KeyboardEvent,
  type ReactNode,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import styles from "./filterableTable.module.css";

const CONTENT_GUTTER = 16;
const MINIMUM_COLUMN_WIDTH = 80;

interface Props {
  children?: ReactNode;
}

export default function FilterableTable({ children }: Props): ReactNode {
  const [filter, setFilter] = useState("");
  const [matchingRowCount, setMatchingRowCount] = useState(0);
  const [maxWidth, setMaxWidth] = useState<number>();
  const [hasBeenResized, setHasBeenResized] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const userResizedRef = useRef(false);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const updateBounds = (): void => {
      if (userResizedRef.current) return;
      const containerRect = container.getBoundingClientRect();
      const navigation = document.querySelector<HTMLElement>("[class*=tableOfContents]");
      const navigationLeft = navigation?.getBoundingClientRect().left;
      const rightBoundary =
        navigationLeft !== undefined && navigationLeft > containerRect.left
          ? navigationLeft - CONTENT_GUTTER
          : window.innerWidth - CONTENT_GUTTER;
      setMaxWidth(Math.max(rightBoundary - containerRect.left, 0));
    };
    updateBounds();
    const observer = new ResizeObserver(updateBounds);
    observer.observe(container);
    window.addEventListener("resize", updateBounds);
    return (): void => {
      observer.disconnect();
      window.removeEventListener("resize", updateBounds);
    };
  }, []);

  useEffect(() => {
    const normalizedFilter = filter.trim().toLocaleLowerCase();
    const rows = Array.from(contentRef.current?.querySelectorAll("tr") ?? []).filter((row) => !row.querySelector("th"));
    rows.forEach((row) => {
      row.hidden = normalizedFilter !== "" && !row.textContent?.toLocaleLowerCase().includes(normalizedFilter);
    });
    const visibleRowCount = rows.filter((row) => !row.hidden).length;
    setMatchingRowCount(visibleRowCount);
  }, [children, filter]);

  useEffect(() => {
    const table = contentRef.current?.querySelector<HTMLTableElement>("table");
    const headers = Array.from(table?.querySelectorAll<HTMLTableCellElement>("thead th") ?? []);
    if (!table || !headers.length) return;

    const cleanups = headers.slice(0, -1).map((header, index) => {
      const resizeHandle = document.createElement("span");
      resizeHandle.className = styles.ColumnResizeHandle;
      resizeHandle.setAttribute("aria-hidden", "true");
      header.append(resizeHandle);

      const handlePointerDown = (event: PointerEvent): void => {
        event.preventDefault();
        event.stopPropagation();
        resizeHandle.setPointerCapture(event.pointerId);
        const initialWidths = headers.map((item) => item.getBoundingClientRect().width);
        const rows = Array.from(table.querySelectorAll<HTMLTableRowElement>("tr"));
        table.style.width = `${table.getBoundingClientRect().width}px`;

        const startX = event.clientX;
        const handlePointerMove = (moveEvent: PointerEvent): void => {
          const requestedDelta = moveEvent.clientX - startX;
          const minimumDelta = MINIMUM_COLUMN_WIDTH - initialWidths[index];
          const maximumDelta = initialWidths[index + 1] - MINIMUM_COLUMN_WIDTH;
          const delta = Math.min(Math.max(requestedDelta, minimumDelta), maximumDelta);

          rows.forEach((row) => {
            const cells = row.children;
            const resizedCell = cells.item(index) as HTMLElement | null;
            const adjacentCell = cells.item(index + 1) as HTMLElement | null;
            if (resizedCell) resizedCell.style.width = `${initialWidths[index] + delta}px`;
            if (adjacentCell) adjacentCell.style.width = `${initialWidths[index + 1] - delta}px`;
          });
        };
        const stopResizing = (): void => {
          window.removeEventListener("pointermove", handlePointerMove);
          window.removeEventListener("pointerup", stopResizing);
          window.removeEventListener("pointercancel", stopResizing);
          if (resizeHandle.hasPointerCapture(event.pointerId)) resizeHandle.releasePointerCapture(event.pointerId);
          setHasBeenResized(true);
        };

        window.addEventListener("pointermove", handlePointerMove);
        window.addEventListener("pointerup", stopResizing);
        window.addEventListener("pointercancel", stopResizing);
      };

      resizeHandle.addEventListener("pointerdown", handlePointerDown);
      return (): void => {
        resizeHandle.removeEventListener("pointerdown", handlePointerDown);
        resizeHandle.remove();
      };
    });

    return (): void => cleanups.forEach((cleanup) => cleanup());
  }, [children]);

  const clearFilter = (): void => setFilter("");
  const hasNoMatchingRows = filter.trim() !== "" && matchingRowCount === 0;
  const resetSize = (): void => {
    userResizedRef.current = false;
    containerRef.current?.style.removeProperty("height");
    containerRef.current?.style.removeProperty("width");
    const table = contentRef.current?.querySelector<HTMLTableElement>("table");
    table?.style.removeProperty("width");
    table?.querySelectorAll<HTMLElement>("th, td").forEach((cell) => cell.style.removeProperty("width"));
    setHasBeenResized(false);
  };

  return (
    <div
      className={styles.FilterableTable}
      data-filterable-table=""
      ref={containerRef}
      style={maxWidth && !hasBeenResized ? { maxWidth } : undefined}>
      <div className={styles.Controls}>
        <input
          aria-label="Filter table by any value"
          className={styles.FilterInput}
          onChange={(event: ChangeEvent<HTMLInputElement>) => setFilter(event.target.value)}
          onKeyDown={(event: KeyboardEvent<HTMLInputElement>) => {
            if (event.key === "Escape") clearFilter();
          }}
          placeholder="Filter by any value"
          type="search"
          value={filter}
        />
        <button className={styles.ClearButton} disabled={filter === ""} onClick={clearFilter} type="button">
          Clear filter
        </button>
        <button
          className={`${styles.ClearButton} ${styles.ResetButton}`}
          disabled={!hasBeenResized}
          onClick={resetSize}
          type="button">
          Reset size
        </button>
      </div>
      {filter !== "" && !hasNoMatchingRows && (
        <p aria-live="polite" className={styles.MatchCount} role="status">
          {matchingRowCount} {matchingRowCount === 1 ? "match" : "matches"}
        </p>
      )}
      {hasNoMatchingRows && (
        <p aria-live="polite" className={styles.EmptyState} role="status">
          No matching rows.
        </p>
      )}
      <div className={styles.Content} ref={contentRef}>
        {children}
      </div>
    </div>
  );
}
