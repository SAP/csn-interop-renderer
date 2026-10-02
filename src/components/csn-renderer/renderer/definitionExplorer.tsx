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
import { Button, Input, Select, Tabs } from "@open-resource-discovery/ui-components";
import RenderedOutput from "./renderedOutput";
import styles from "./renderer.module.css";
import type { CsnDocument } from "./types";

interface Props {
  document: CsnDocument;
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
  previewRow: string;
}

const definitionGroups = [
  ["service", "Service definitions"],
  ["type", "Type definitions"],
  ["entity", "Entity definitions"],
  ["context", "Context definitions"],
] as const;

const elementFilterItems = {
  all: "All elements",
  keys: "Keys",
  associations: "Associations",
  annotated: "Annotated",
};

const detailViewItems = {
  overview: "Overview",
  elements: "Elements",
  rendered: "Preview",
};

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

const resolveDetailView = (kind: string | undefined, requestedView: DetailView | undefined): DetailView =>
  kind === "type" && requestedView === "elements" ? "overview" : (requestedView ?? "overview");

export default function DefinitionExplorer({
  document,
  renderedContent,
  initialState,
  onStateChange,
}: Props): ReactNode {
  const definitions = useMemo(() => Object.entries(document.definitions ?? {}), [document]);
  const initialDefinitionName = initialState?.definition ?? "";
  const [selectedName, setSelectedName] = useState(initialDefinitionName);
  const [view, setView] = useState<DetailView>(() =>
    resolveDetailView(document.definitions?.[initialDefinitionName]?.kind, initialState?.view),
  );
  const [activeSection, setActiveSection] = useState<DetailSection>(initialState?.section ?? "annotations");
  const [selectedItem, setSelectedItem] = useState(initialState?.item ?? "");
  const [selectedElement, setSelectedElement] = useState(initialState?.element ?? "");
  const [selectedPreviewRow, setSelectedPreviewRow] = useState(initialState?.previewRow ?? "");
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
    const nextSelectedName = definitionExists && initialState?.definition !== undefined ? initialState.definition : "";
    setSelectedName(nextSelectedName);
    setView(resolveDetailView(document.definitions?.[nextSelectedName]?.kind, initialState?.view));
    setActiveSection(initialState?.section ?? "annotations");
    setSelectedItem(initialState?.item ?? "");
    setSelectedElement(initialState?.element ?? "");
    setSelectedPreviewRow(initialState?.previewRow ?? "");
  }, [definitions, document.definitions, initialState]);

  useEffect(() => {
    onStateChange?.({
      definition: selectedName,
      view,
      section: activeSection,
      item: selectedItem,
      element: selectedElement,
      previewRow: selectedPreviewRow,
    });
  }, [activeSection, onStateChange, selectedElement, selectedItem, selectedName, selectedPreviewRow, view]);

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
        ([key]) => !key.startsWith("@") && !key.startsWith("__") && !["kind", "elements", "doc"].includes(key),
      )
    : [];
  const privateProperties = selectedDefinition
    ? Object.entries(selectedDefinition).filter(([key]) => key.startsWith("__"))
    : [];
  const isServiceDefinition = selectedDefinition?.kind === "service";
  const isTypeDefinition = selectedDefinition?.kind === "type";
  const availableDetailViews = isTypeDefinition
    ? (["overview", "rendered"] as const)
    : (["overview", "elements", "rendered"] as const);
  const availableDetailViewItems = isTypeDefinition
    ? { overview: detailViewItems.overview, rendered: detailViewItems.rendered }
    : isServiceDefinition
      ? { ...detailViewItems, elements: "Exposed Entities" }
      : detailViewItems;
  const currentDetailViewLabel =
    view === "elements" && isServiceDefinition ? "Exposed Entities" : detailViewItems[view];
  const exposedEntities = isServiceDefinition
    ? definitions.filter(([name, definition]) => definition.kind === "entity" && name.startsWith(`${selectedName}.`))
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
    setView("overview");
    setActiveSection("annotations");
    setSelectedItem("");
    setSelectedElement("");
    setSelectedPreviewRow("");
    setElementQuery("");
    setElementFilter("all");
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
        onKeyDown={onDefinitionResizeKeyDown}>
        <Button
          className={styles.DefinitionResizeToggle}
          variant="ghost"
          size="icon"
          aria-label={isDefinitionNavCollapsed ? "Show definitions panel" : "Hide definitions panel"}
          onPointerDown={(event) => event.stopPropagation()}
          onClick={toggleDefinitionNav}>
          {isDefinitionNavCollapsed ? "›" : "‹"}
        </Button>
      </div>
      <section className={styles.DefinitionDetail}>
        <div className={styles.DetailHeader}>
          <div className={styles.DetailTitle}>
            <span className={styles.PaneTitle}>
              {selectedDefinition ? formatDefinitionKind(selectedDefinition.kind) : "CSN model"}
            </span>
            <h2>{selectedName || "Select a definition"}</h2>
          </div>
          {selectedDefinition !== undefined && (
            <>
              <div className={styles.DetailTabsContainer}>
                <Tabs.Root value={view} onValueChange={(value) => setView(value as DetailView)}>
                  <Tabs.List className={styles.DetailTabs} aria-label="Definition details">
                    {availableDetailViews.map((tab) => (
                      <Tabs.Tab
                        key={tab}
                        className={view === tab ? styles.DetailTabActive : styles.DetailTab}
                        value={tab}>
                        {tab === "rendered"
                          ? "Preview"
                          : tab === "elements" && isServiceDefinition
                            ? "Exposed Entities"
                            : tab[0].toUpperCase() + tab.slice(1)}
                      </Tabs.Tab>
                    ))}
                  </Tabs.List>
                </Tabs.Root>
              </div>
              <div className={styles.DetailViewMenu}>
                <Select.Root
                  value={view}
                  items={availableDetailViewItems}
                  onValueChange={(value) => setView(value as DetailView)}>
                  <Select.Trigger aria-label={`Select definition view; current: ${currentDetailViewLabel}`}>
                    <svg aria-hidden="true" viewBox="0 0 24 24">
                      <circle cx="5" cy="12" r="1.5" />
                      <circle cx="12" cy="12" r="1.5" />
                      <circle cx="19" cy="12" r="1.5" />
                    </svg>
                  </Select.Trigger>
                  <Select.Portal>
                    <Select.Positioner
                      side="bottom"
                      align="end"
                      sideOffset={4}
                      alignItemWithTrigger={false}
                      collisionAvoidance={{ side: "shift", align: "shift", fallbackAxisSide: "none" }}>
                      <Select.Popup>
                        {Object.entries(availableDetailViewItems).map(([itemValue, label]) => (
                          <Select.Item key={itemValue} value={itemValue}>
                            <Select.ItemIndicator />
                            <Select.ItemText>{label}</Select.ItemText>
                          </Select.Item>
                        ))}
                      </Select.Popup>
                    </Select.Positioner>
                  </Select.Portal>
                </Select.Root>
              </div>
            </>
          )}
        </div>
        {selectedDefinition === undefined ? (
          <div className={styles.DetailContent}>
            <p className={styles.EmptyDetail}>Select a definition to inspect its details.</p>
          </div>
        ) : view === "rendered" ? (
          renderedContent ? (
            <RenderedOutput
              content={renderedContent}
              selectedRowId={selectedPreviewRow}
              onRowSelect={setSelectedPreviewRow}
            />
          ) : (
            <p className={styles.EmptyDetail}>Run the renderer to view the generated output.</p>
          )
        ) : view === "elements" ? (
          <div className={styles.DetailContent}>
            <h3>{isServiceDefinition ? "Exposed Entities" : "Elements"}</h3>
            {isServiceDefinition ? (
              exposedEntities.length > 0 ? (
                <div className={styles.ElementList}>
                  {exposedEntities.map(([name, definition]) => {
                    const label = definition["@EndUserText.label"];
                    return (
                      <button
                        key={name}
                        className={styles.ElementCard}
                        type="button"
                        onClick={() => {
                          selectDefinition(name);
                        }}>
                        <strong>{name}</strong>
                        <span>Entity</span>
                        {typeof label === "string" && <small>{label}</small>}
                      </button>
                    );
                  })}
                </div>
              ) : (
                <p className={styles.EmptyDetail}>This service exposes no entities.</p>
              )
            ) : elements.length > 0 ? (
              <>
                <div className={styles.ElementFilters}>
                  <Input
                    className={styles.ElementFilterInput}
                    type="search"
                    value={elementQuery}
                    placeholder="Filter elements"
                    aria-label="Filter elements"
                    onChange={(event) => setElementQuery(event.target.value)}
                  />
                  <div className={styles.ElementFilterSelect}>
                    <Select.Root
                      value={elementFilter}
                      items={elementFilterItems}
                      onValueChange={(value) => setElementFilter(value as ElementFilter)}>
                      <Select.Trigger aria-label="Filter elements by type">
                        <Select.Value />
                        <Select.Icon />
                      </Select.Trigger>
                      <Select.Portal>
                        <Select.Positioner
                          side="bottom"
                          align="start"
                          sideOffset={4}
                          alignItemWithTrigger={false}
                          collisionAvoidance={{ side: "shift", align: "shift", fallbackAxisSide: "none" }}>
                          <Select.Popup>
                            {Object.entries(elementFilterItems).map(([itemValue, label]) => (
                              <Select.Item key={itemValue} value={itemValue}>
                                <Select.ItemIndicator />
                                <Select.ItemText>{label}</Select.ItemText>
                              </Select.Item>
                            ))}
                          </Select.Popup>
                        </Select.Positioner>
                      </Select.Portal>
                    </Select.Root>
                  </div>
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
                      <span
                        className={styles.AnnotationValue}
                        data-value-type={getValueType(value)}
                        title={formatValue(value)}>
                        {formatValue(value)}
                      </span>
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
                {properties.length > 0 ? (
                  properties.map(([key, value]) => (
                    <button
                      key={key}
                      id={`csn-item-properties-${encodeURIComponent(key)}`}
                      className={selectedItem === key ? styles.PropertyCardActive : styles.PropertyCard}
                      type="button"
                      onClick={() => selectInspectorItem("properties", key)}>
                      <span className={styles.PropertyKey}>{key}</span>
                      <span
                        className={styles.PropertyValue}
                        data-value-type={getValueType(value)}
                        title={formatValue(value)}>
                        {formatValue(value)}
                      </span>
                    </button>
                  ))
                ) : (
                  <p className={styles.EmptySection}>No properties</p>
                )}
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
                      <span className={styles.PropertyKey}>{key}</span>
                      <span
                        className={styles.PropertyValue}
                        data-value-type={getValueType(value)}
                        title={formatValue(value)}>
                        {formatValue(value)}
                      </span>
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
