import {
  type UIEvent as ReactUIEvent,
  type CSSProperties,
  type KeyboardEvent as ReactKeyboardEvent,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Input } from "@open-resource-discovery/ui-components";
import styles from "./renderer.module.css";
import { findActiveDefinitionName } from "./definitionNavigation";
import type { CsnDefinition, CsnDocument } from "./types";

interface Props {
  document: CsnDocument;
  initialState?: Partial<ExplorerState>;
  onStateChange?: (state: ExplorerState) => void;
}

export interface ExplorerState {
  definition: string;
}

const definitionGroups = [
  ["service", "Service definitions"],
  ["type", "Type definitions"],
  ["entity", "Entity definitions"],
  ["context", "Context definitions"],
] as const;

const formatValue = (value: unknown): string => {
  if (typeof value === "string") return value;
  if (value === undefined) return "—";
  return JSON.stringify(value) ?? "—";
};

const getValueType = (value: unknown): "boolean" | "string" | "structured" | "empty" => {
  if (typeof value === "boolean") return "boolean";
  if (typeof value === "string") return "string";
  if (value === undefined || value === null) return "empty";
  return "structured";
};

const formatDefinitionKind = (kind: string | undefined): string => {
  if (kind === undefined) return "Definition";
  return `${kind[0].toUpperCase()}${kind.slice(1)} definition`;
};

interface DefinitionDetailsProps {
  name: string;
  definition: CsnDefinition;
  selectedItem: string;
  onItemToggle: (item: string, isOpen: boolean) => void;
}

function DefinitionDetails({ name, definition, selectedItem, onItemToggle }: DefinitionDetailsProps): ReactNode {
  const annotations = Object.entries(definition).filter(([key]) => key.startsWith("@"));
  const properties = Object.entries(definition).filter(
    ([key]) => !key.startsWith("@") && !key.startsWith("__") && !["kind", "elements", "doc"].includes(key),
  );
  const privateProperties = Object.entries(definition).filter(([key]) => key.startsWith("__"));

  return (
    <article
      id={`csn-definition-${encodeURIComponent(name)}`}
      className={styles.DefinitionDetails}
      data-definition-name={name}>
      <header className={styles.DefinitionDetailsHeader}>
        <span className={styles.PaneTitle}>{formatDefinitionKind(definition.kind)}</span>
        <h2>{name}</h2>
      </header>
      {definition.doc && <p className={styles.DefinitionDescription}>{definition.doc}</p>}
      {annotations.length > 0 && (
        <section className={styles.DetailSection}>
          <h3>Annotations ({annotations.length})</h3>
          <div className={styles.AnnotationList}>
            {annotations.map(([key, value]) => (
              <details
                key={key}
                className={
                  selectedItem === `${name}:annotations:${key}` ? styles.AnnotationCardActive : styles.AnnotationCard
                }
                onToggle={(event) => onItemToggle(`${name}:annotations:${key}`, event.currentTarget.open)}>
                <summary className={styles.AnnotationKey}>{key}</summary>
                <span
                  className={styles.AnnotationValue}
                  data-value-type={getValueType(value)}
                  title={formatValue(value)}>
                  {formatValue(value)}
                </span>
              </details>
            ))}
          </div>
        </section>
      )}
      {privateProperties.length > 0 && (
        <section className={styles.DetailSection}>
          <h3>Private Properties ({privateProperties.length})</h3>
          <div className={styles.PropertyList}>
            {privateProperties.map(([key, value]) => (
              <details
                key={key}
                className={
                  selectedItem === `${name}:private-properties:${key}` ? styles.PropertyCardActive : styles.PropertyCard
                }
                onToggle={(event) => onItemToggle(`${name}:private-properties:${key}`, event.currentTarget.open)}>
                <summary className={styles.PropertyKey}>{key}</summary>
                <span className={styles.PropertyValue} data-value-type={getValueType(value)} title={formatValue(value)}>
                  {formatValue(value)}
                </span>
              </details>
            ))}
          </div>
        </section>
      )}
      {properties.length > 0 && (
        <section className={styles.DetailSection}>
          <h3>Exposed Properties ({properties.length})</h3>
          <div className={styles.PropertyList}>
            {properties.map(([key, value]) => (
              <details
                key={key}
                className={
                  selectedItem === `${name}:properties:${key}` ? styles.PropertyCardActive : styles.PropertyCard
                }
                onToggle={(event) => onItemToggle(`${name}:properties:${key}`, event.currentTarget.open)}>
                <summary className={styles.PropertyKey}>{key}</summary>
                <span className={styles.PropertyValue} data-value-type={getValueType(value)} title={formatValue(value)}>
                  {formatValue(value)}
                </span>
              </details>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}

export default function DefinitionExplorer({ document, initialState, onStateChange }: Props): ReactNode {
  const definitions = useMemo(() => Object.entries(document.definitions ?? {}), [document]);
  const initialDefinitionName = initialState?.definition ?? "";
  const [selectedName, setSelectedName] = useState(initialDefinitionName);
  const [selectedItem, setSelectedItem] = useState("");
  const [scrollTargetName, setScrollTargetName] = useState("");
  const [definitionQuery, setDefinitionQuery] = useState("");
  const [expandedGroups, setExpandedGroups] = useState<ReadonlySet<string>>(
    () => new Set(definitionGroups.map(([kind]) => kind)),
  );
  const [definitionWidth, setDefinitionWidth] = useState(35);
  const [isDefinitionNavCollapsed, setIsDefinitionNavCollapsed] = useState(false);
  const explorerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const definitionExists =
      initialState?.definition !== undefined && document.definitions?.[initialState.definition] !== undefined;
    const nextSelectedName = definitionExists && initialState?.definition !== undefined ? initialState.definition : "";
    setSelectedName(nextSelectedName);
    setScrollTargetName(nextSelectedName);
  }, [definitions, document.definitions, initialState]);

  useEffect(() => {
    onStateChange?.({ definition: selectedName });
  }, [onStateChange, selectedName]);

  useEffect(() => {
    if (scrollTargetName === "") return;

    window.requestAnimationFrame(() =>
      globalThis.document.getElementById(`csn-definition-${encodeURIComponent(scrollTargetName)}`)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      }),
    );
    setScrollTargetName("");
  }, [scrollTargetName]);

  const toggleDefinitionGroup = (kind: string): void => {
    setExpandedGroups((currentGroups) => {
      const nextGroups = new Set(currentGroups);
      if (nextGroups.has(kind)) {
        nextGroups.delete(kind);
      } else {
        nextGroups.add(kind);
      }
      return nextGroups;
    });
  };

  const selectDefinition = (name: string): void => {
    setSelectedName(name);
    setScrollTargetName(name);
  };

  const selectInspectorItem = (item: string, isOpen: boolean): void => {
    setSelectedItem((currentItem) => (isOpen ? item : currentItem === item ? "" : currentItem));
  };

  const onDetailScroll = (event: ReactUIEvent<HTMLDivElement>): void => {
    const { currentTarget } = event;
    const scrollBoundary = currentTarget.getBoundingClientRect().top + 1;
    const headings = Array.from(currentTarget.querySelectorAll<HTMLElement>("[data-definition-name]"));
    const activeName = findActiveDefinitionName(
      headings.flatMap((heading) => {
        const name = heading.dataset.definitionName;
        return name === undefined ? [] : [{ name, top: heading.getBoundingClientRect().top }];
      }),
      scrollBoundary,
    );

    if (activeName !== undefined && activeName !== selectedName) {
      setSelectedName(activeName);
    }
  };

  const resizeDefinitionNav = useCallback((clientX: number): void => {
    const explorer = explorerRef.current;
    if (explorer === null) return;

    const { left, width } = explorer.getBoundingClientRect();
    const nextWidth = ((clientX - left) / width) * 100;
    if (nextWidth < 12) {
      setIsDefinitionNavCollapsed(true);
      return;
    }

    setIsDefinitionNavCollapsed(false);
    setDefinitionWidth(Math.min(Math.max(nextWidth, 22), 50));
  }, []);

  const onDefinitionResizeStart = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>): void => {
      event.preventDefault();
      event.currentTarget.setPointerCapture(event.pointerId);
      resizeDefinitionNav(event.clientX);
    },
    [resizeDefinitionNav],
  );

  const onDefinitionResizeMove = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>): void => {
      if (event.currentTarget.hasPointerCapture(event.pointerId)) {
        resizeDefinitionNav(event.clientX);
      }
    },
    [resizeDefinitionNav],
  );

  const onDefinitionResizeKeyDown = useCallback((event: ReactKeyboardEvent<HTMLDivElement>): void => {
    const widthStep = 4;
    if (event.key === "Home") {
      event.preventDefault();
      setIsDefinitionNavCollapsed(true);
      return;
    }
    if (event.key === "End") {
      event.preventDefault();
      setIsDefinitionNavCollapsed(false);
      setDefinitionWidth(50);
      return;
    }
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;

    event.preventDefault();
    setIsDefinitionNavCollapsed(false);
    setDefinitionWidth((currentWidth) =>
      Math.min(Math.max(currentWidth + (event.key === "ArrowLeft" ? -widthStep : widthStep), 22), 50),
    );
  }, []);

  const explorerStyle: CSSProperties & Record<"--definition-nav-width", string> = {
    "--definition-nav-width": `${definitionWidth}%`,
  };

  return (
    <div
      ref={explorerRef}
      className={styles.Explorer}
      data-definition-nav-collapsed={isDefinitionNavCollapsed}
      style={explorerStyle}>
      <nav className={styles.DefinitionNav} aria-label="CSN definitions">
        <div className={styles.NavHeading}>
          <span className={styles.PaneTitle}>CSN model</span>
          <strong>Definitions</strong>
        </div>
        <Input
          className={styles.DefinitionSearch}
          type="search"
          value={definitionQuery}
          placeholder="Search definitions"
          aria-label="Search definitions"
          onChange={(event) => setDefinitionQuery(event.target.value)}
        />
        {definitionGroups.map(([kind, title]) => {
          const group = definitions.filter(([name, definition]) => {
            if (definition.kind !== kind) return false;
            const label = definition["@EndUserText.label"];
            const searchableText = `${name} ${typeof label === "string" ? label : ""}`.toLowerCase();
            return searchableText.includes(definitionQuery.trim().toLowerCase());
          });
          if (group.length === 0) return null;
          const isExpanded = expandedGroups.has(kind);

          return (
            <section key={kind} className={styles.DefinitionGroup}>
              <button
                className={styles.DefinitionGroupToggle}
                type="button"
                aria-expanded={isExpanded}
                onClick={() => toggleDefinitionGroup(kind)}>
                <span>{title}</span>
                <span aria-hidden="true">{isExpanded ? "−" : "+"}</span>
              </button>
              {isExpanded &&
                group.map(([name]) => (
                  <button
                    key={name}
                    className={selectedName === name ? styles.DefinitionButtonActive : styles.DefinitionButton}
                    type="button"
                    onClick={() => selectDefinition(name)}>
                    {name}
                  </button>
                ))}
            </section>
          );
        })}
      </nav>
      <div
        className={styles.DefinitionResizeHandle}
        role="separator"
        aria-label="Resize definitions panel"
        aria-orientation="vertical"
        aria-valuemin={0}
        aria-valuemax={50}
        aria-valuenow={isDefinitionNavCollapsed ? 0 : definitionWidth}
        tabIndex={0}
        onPointerDown={onDefinitionResizeStart}
        onPointerMove={onDefinitionResizeMove}
        onKeyDown={onDefinitionResizeKeyDown}
      />
      <section className={styles.DefinitionDetail}>
        <div className={styles.DetailHeader}>
          <div className={styles.DetailTitle}>
            <span className={styles.PaneTitle}>CSN model</span>
            <h2>Definitions</h2>
          </div>
        </div>
        <div className={styles.DetailContent} onScroll={onDetailScroll}>
          {definitions.length > 0 ? (
            definitions.map(([name, definition]) => (
              <DefinitionDetails
                key={name}
                name={name}
                definition={definition}
                selectedItem={selectedItem}
                onItemToggle={selectInspectorItem}
              />
            ))
          ) : (
            <p className={styles.EmptyDetail}>This CSN model has no definitions.</p>
          )}
        </div>
      </section>
    </div>
  );
}
