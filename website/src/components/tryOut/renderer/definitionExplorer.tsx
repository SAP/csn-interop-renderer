import {
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
import { Button } from "@ui5/webcomponents-react";
import navigationLeftArrow from "@ui5/webcomponents-icons/dist/navigation-left-arrow.js";
import navigationRightArrow from "@ui5/webcomponents-icons/dist/navigation-right-arrow.js";
import RenderedOutput from "./renderedOutput";
import styles from "./renderer.module.css";
import type { CsnDocument, OutputFormat } from "./types";

interface Props {
  document: CsnDocument;
  format: OutputFormat;
  renderedContent: string;
  initialState?: Partial<ExplorerState>;
  onStateChange?: (state: ExplorerState) => void;
}

type DetailView = "overview" | "elements" | "rendered";
type DetailSection = "annotations" | "properties" | "private-properties";
type ElementFilter = "all" | "keys" | "associations" | "annotated";

export interface ExplorerState {
  definition: string;
  view: DetailView;
  section: DetailSection;
  item: string;
  element: string;
}

const definitionGroups = [
  ["context", "Context definitions"],
  ["entity", "Entity definitions"],
  ["service", "Service definitions"],
  ["type", "Type definitions"],
] as const;

const formatValue = (value: unknown): string => {
  if (typeof value === "string") return value;
  if (value === undefined) return "—";
  return JSON.stringify(value) ?? "—";
};

const getElementDetails = (
  element: unknown,
): {
  type: string;
  label?: string;
  description?: string;
  isKey: boolean;
  isAssociation: boolean;
  isAnnotated: boolean;
} => {
  if (element === null || typeof element !== "object") {
    return { type: formatValue(element), isKey: false, isAssociation: false, isAnnotated: false };
  }

  const properties = element as Record<string, unknown>;
  const type = typeof properties.type === "string" ? properties.type : "—";
  return {
    type,
    label: typeof properties["@EndUserText.label"] === "string" ? properties["@EndUserText.label"] : undefined,
    description: typeof properties.doc === "string" ? properties.doc : undefined,
    isKey: properties.key === true,
    isAssociation: type === "cds.Association" || type === "cds.Composition",
    isAnnotated: Object.keys(properties).some((key) => key.startsWith("@")),
  };
};

const formatDefinitionKind = (kind: string | undefined): string => {
  if (kind === undefined) return "Definition";
  return `${kind[0].toUpperCase()}${kind.slice(1)} definition`;
};

export default function DefinitionExplorer({
  document,
  format,
  renderedContent,
  initialState,
  onStateChange,
}: Props): ReactNode {
  const definitions = useMemo(() => Object.entries(document.definitions ?? {}), [document]);
  const [selectedName, setSelectedName] = useState(initialState?.definition ?? definitions[0]?.[0] ?? "");
  const [view, setView] = useState<DetailView>(initialState?.view ?? "overview");
  const [activeSection, setActiveSection] = useState<DetailSection>(initialState?.section ?? "annotations");
  const [selectedItem, setSelectedItem] = useState(initialState?.item ?? "");
  const [selectedElement, setSelectedElement] = useState(initialState?.element ?? "");
  const [definitionQuery, setDefinitionQuery] = useState("");
  const [elementQuery, setElementQuery] = useState("");
  const [elementFilter, setElementFilter] = useState<ElementFilter>("all");
  const [expandedGroups, setExpandedGroups] = useState<ReadonlySet<string>>(
    () => new Set(definitionGroups.map(([kind]) => kind)),
  );
  const [definitionWidth, setDefinitionWidth] = useState(35);
  const [isDefinitionNavCollapsed, setIsDefinitionNavCollapsed] = useState(false);
  const explorerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const definitionExists =
      initialState?.definition !== undefined && document.definitions?.[initialState.definition] !== undefined;
    setSelectedName(
      definitionExists && initialState?.definition !== undefined
        ? initialState.definition
        : (definitions[0]?.[0] ?? ""),
    );
    setView(initialState?.view ?? "overview");
    setActiveSection(initialState?.section ?? "annotations");
    setSelectedItem(initialState?.item ?? "");
    setSelectedElement(initialState?.element ?? "");
  }, [definitions, document.definitions, initialState]);

  useEffect(() => {
    onStateChange?.({
      definition: selectedName,
      view,
      section: activeSection,
      item: selectedItem,
      element: selectedElement,
    });
  }, [activeSection, onStateChange, selectedElement, selectedItem, selectedName, view]);

  useEffect(() => {
    const targetId =
      view === "elements" && selectedElement
        ? `csn-element-${encodeURIComponent(selectedElement)}`
        : selectedItem
          ? `csn-item-${activeSection}-${encodeURIComponent(selectedItem)}`
          : undefined;
    if (targetId === undefined) return;

    window.requestAnimationFrame(() =>
      globalThis.document.getElementById(targetId)?.scrollIntoView({ block: "center" }),
    );
  }, [activeSection, selectedElement, selectedItem, view]);

  const selectedDefinition = document.definitions?.[selectedName];
  const annotations = selectedDefinition
    ? Object.entries(selectedDefinition).filter(([key]) => key.startsWith("@"))
    : [];
  const properties = selectedDefinition
    ? Object.entries(selectedDefinition).filter(
        ([key]) => !key.startsWith("@") && !key.startsWith("__") && !["elements", "doc"].includes(key),
      )
    : [];
  const privateProperties = selectedDefinition
    ? Object.entries(selectedDefinition).filter(([key]) => key.startsWith("__"))
    : [];
  const elements = selectedDefinition?.elements ? Object.entries(selectedDefinition.elements) : [];
  const visibleElements = elements.filter(([name, element]) => {
    const details = getElementDetails(element);
    const query = elementQuery.trim().toLowerCase();
    const matchesQuery =
      query === "" ||
      name.toLowerCase().includes(query) ||
      details.type.toLowerCase().includes(query) ||
      details.label?.toLowerCase().includes(query) === true;
    const matchesFilter =
      elementFilter === "all" ||
      (elementFilter === "keys" && details.isKey) ||
      (elementFilter === "associations" && details.isAssociation) ||
      (elementFilter === "annotated" && details.isAnnotated);
    return matchesQuery && matchesFilter;
  });

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
    setSelectedItem("");
    setSelectedElement("");
  };

  const selectInspectorItem = (section: DetailSection, item: string): void => {
    setActiveSection(section);
    setSelectedItem(item);
    setSelectedElement("");
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

  const toggleDefinitionNav = useCallback((): void => {
    setIsDefinitionNavCollapsed((collapsed) => !collapsed);
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
        <input
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
        onKeyDown={onDefinitionResizeKeyDown}>
        <Button
          className={styles.DefinitionResizeToggle}
          design="Transparent"
          icon={isDefinitionNavCollapsed ? navigationRightArrow : navigationLeftArrow}
          tooltip={isDefinitionNavCollapsed ? "Show definitions panel" : "Hide definitions panel"}
          accessibleName={isDefinitionNavCollapsed ? "Show definitions panel" : "Hide definitions panel"}
          onPointerDown={(event) => event.stopPropagation()}
          onClick={toggleDefinitionNav}
        />
      </div>
      <section className={styles.DefinitionDetail}>
        <div className={styles.DetailHeader}>
          <div>
            <span className={styles.PaneTitle}>{formatDefinitionKind(selectedDefinition?.kind)}</span>
            <h2>{selectedName}</h2>
          </div>
          <div className={styles.DetailTabs} role="tablist" aria-label="Definition details">
            {(["overview", "elements", "rendered"] as const).map((tab) => (
              <button
                key={tab}
                className={view === tab ? styles.DetailTabActive : styles.DetailTab}
                type="button"
                role="tab"
                aria-selected={view === tab}
                onClick={() => setView(tab)}>
                {tab === "rendered" ? "Preview" : tab[0].toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
        {view === "rendered" ? (
          renderedContent ? (
            <RenderedOutput format={format} content={renderedContent} />
          ) : (
            <p className={styles.EmptyDetail}>Run the renderer to view the generated output.</p>
          )
        ) : view === "elements" ? (
          <div className={styles.DetailContent}>
            <h3>Elements</h3>
            {elements.length > 0 ? (
              <>
                <div className={styles.ElementFilters}>
                  <input
                    type="search"
                    value={elementQuery}
                    placeholder="Filter elements"
                    aria-label="Filter elements"
                    onChange={(event) => setElementQuery(event.target.value)}
                  />
                  <select
                    value={elementFilter}
                    aria-label="Filter elements by type"
                    onChange={(event) => setElementFilter(event.target.value as ElementFilter)}>
                    <option value="all">All elements</option>
                    <option value="keys">Keys</option>
                    <option value="associations">Associations</option>
                    <option value="annotated">Annotated</option>
                  </select>
                </div>
                {visibleElements.length > 0 ? (
                  <div className={styles.ElementList}>
                    {visibleElements.map(([name, element]) => {
                      const details = getElementDetails(element);
                      return (
                        <button
                          key={name}
                          id={`csn-element-${encodeURIComponent(name)}`}
                          className={selectedElement === name ? styles.ElementCardActive : styles.ElementCard}
                          type="button"
                          onClick={() => {
                            setSelectedElement(name);
                            setSelectedItem("");
                          }}>
                          <strong>{name}</strong>
                          <span>{details.type}</span>
                          {details.label && <small>{details.label}</small>}
                          {details.description && <p>{details.description}</p>}
                        </button>
                      );
                    })}
                  </div>
                ) : (
                  <p className={styles.EmptyDetail}>No elements match the current filter.</p>
                )}
              </>
            ) : (
              <p className={styles.EmptyDetail}>This definition has no elements.</p>
            )}
          </div>
        ) : (
          <div className={styles.DetailContent}>
            {selectedDefinition?.doc && <p className={styles.DefinitionDescription}>{selectedDefinition.doc}</p>}
            <details className={styles.CollapsibleSection} open>
              <summary
                onClick={() => {
                  setActiveSection("annotations");
                  setSelectedItem("");
                }}>
                Annotations
              </summary>
              <div className={styles.AnnotationList}>
                {annotations.length > 0 ? (
                  annotations.map(([key, value]) => (
                    <button
                      key={key}
                      id={`csn-item-annotations-${encodeURIComponent(key)}`}
                      className={selectedItem === key ? styles.AnnotationCardActive : styles.AnnotationCard}
                      type="button"
                      onClick={() => selectInspectorItem("annotations", key)}>
                      <span className={styles.AnnotationKey}>{key}</span>
                      <code className={styles.AnnotationValue}>{formatValue(value)}</code>
                    </button>
                  ))
                ) : (
                  <p className={styles.EmptySection}>No annotations</p>
                )}
              </div>
            </details>
            <details className={styles.CollapsibleSection} open>
              <summary
                onClick={() => {
                  setActiveSection("properties");
                  setSelectedItem("");
                }}>
                Properties
              </summary>
              <div className={styles.PropertyList}>
                {properties.map(([key, value]) => (
                  <button
                    key={key}
                    id={`csn-item-properties-${encodeURIComponent(key)}`}
                    className={selectedItem === key ? styles.PropertyCardActive : styles.PropertyCard}
                    type="button"
                    onClick={() => selectInspectorItem("properties", key)}>
                    <span>{key}</span>
                    <span>{formatValue(value)}</span>
                  </button>
                ))}
              </div>
            </details>
            {privateProperties.length > 0 && (
              <details className={styles.PrivateProperties} open>
                <summary
                  onClick={() => {
                    setActiveSection("private-properties");
                    setSelectedItem("");
                  }}>
                  Private properties
                </summary>
                <div className={styles.PropertyList}>
                  {privateProperties.map(([key, value]) => (
                    <button
                      key={key}
                      id={`csn-item-private-properties-${encodeURIComponent(key)}`}
                      className={selectedItem === key ? styles.PropertyCardActive : styles.PropertyCard}
                      type="button"
                      onClick={() => selectInspectorItem("private-properties", key)}>
                      <span>{key}</span>
                      <span>{formatValue(value)}</span>
                    </button>
                  ))}
                </div>
              </details>
            )}
          </div>
        )}
      </section>
    </div>
  );
}
