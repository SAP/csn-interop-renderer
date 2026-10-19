import {
  type CSSProperties,
  type KeyboardEvent as ReactKeyboardEvent,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
  type SyntheticEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Button, Input } from "@open-resource-discovery/ui-components";
import type { AnnotationLinkCallbacks } from "@sap/csn-interop-renderer";
import styles from "./renderer.module.css";
import type { CsnDefinition, CsnDocument } from "./types";

interface Props {
  document: CsnDocument;
  annotationLinkCallbacks?: AnnotationLinkCallbacks;
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

const extensionDocumentationBaseUrl = "https://sap.github.io/csn-interop-specification/spec-v1/extensions";

const extensionDocumentationPaths: Readonly<Record<string, string>> = {
  Aggregation: "aggregation",
  AnalyticsDetails: "analytics-details",
  API: "api",
  Consumption: "consumption",
  DataIntegration: "dataintegration",
  EndUserText: "end-user-text",
  EntityRelationship: "entity-relationship",
  ObjectModel: "object-model",
  ODM: "odm",
  PersonalData: "personal-data",
  Semantics: "semantics",
};

const getExtensionDocumentationLink = (annotationKey: string): string | undefined => {
  const namespace = annotationKey.match(/^@([^.]+)/)?.[1];
  const path = namespace === undefined ? undefined : extensionDocumentationPaths[namespace];
  return path === undefined ? undefined : `${extensionDocumentationBaseUrl}/${path}`;
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

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const formatDefinitionKind = (kind: string | undefined): string => {
  if (kind === undefined) return "Definition";
  return `${kind[0].toUpperCase()}${kind.slice(1)} definition`;
};

interface DefinitionDetailsProps {
  name: string;
  definition: CsnDefinition;
  definitions: readonly [string, CsnDefinition][];
  onDefinitionSelect: (name: string) => void;
  annotationLinkCallbacks?: AnnotationLinkCallbacks;
}

interface CollapsibleDetailSectionProps {
  title: string;
  children: ReactNode;
}

function CollapsibleDetailSection({ title, children }: CollapsibleDetailSectionProps): ReactNode {
  return (
    <details className={styles.DetailSection} open>
      <summary>
        <h3>{title}</h3>
      </summary>
      <div className={styles.DetailSectionContent}>{children}</div>
    </details>
  );
}

const detailFilterOptions = [
  ["annotations", "Annotations"],
  ["elements", "Elements"],
  ["properties", "Properties"],
  ["private", "Private"],
] as const;

type DetailFilter = (typeof detailFilterOptions)[number][0];

const createAllDetailFilters = (): Set<DetailFilter> => new Set(detailFilterOptions.map(([filter]) => filter));

function DefinitionDetails({
  name,
  definition,
  definitions,
  onDefinitionSelect,
  annotationLinkCallbacks,
}: DefinitionDetailsProps): ReactNode {
  const annotations = Object.entries(definition).filter(([key]) => key.startsWith("@"));
  const [annotationLinks, setAnnotationLinks] = useState<Record<string, string>>({});
  const [activeFilters, setActiveFilters] = useState<ReadonlySet<DetailFilter>>(createAllDetailFilters);
  const [draftFilters, setDraftFilters] = useState<ReadonlySet<DetailFilter>>(createAllDetailFilters);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const [filterMenuQuery, setFilterMenuQuery] = useState("");
  const [detailQuery, setDetailQuery] = useState("");
  const elements = Object.entries(definition.elements ?? {});
  const properties = Object.entries(definition).filter(
    ([key]) => !key.startsWith("@") && !key.startsWith("__") && !["kind", "elements", "doc"].includes(key),
  );
  const privateProperties = Object.entries(definition).filter(([key]) => key.startsWith("__"));
  const availableDetailFilters = detailFilterOptions.filter(([filter]) => {
    if (filter === "annotations") return annotations.length > 0;
    if (filter === "elements") return elements.length > 0;
    if (filter === "properties") return properties.length > 0;
    return privateProperties.length > 0;
  });
  const showDetailFilter = availableDetailFilters.length > 1;
  const serviceEntities =
    definition.kind === "service"
      ? definitions.filter(([entityName, entity]) => entity.kind === "entity" && entityName.startsWith(`${name}.`))
      : [];
  const normalizedDetailQuery = detailQuery.trim().toLowerCase();
  const matchesDetailQuery = (key: string): boolean => key.toLowerCase().includes(normalizedDetailQuery);
  const filteredAnnotations =
    !showDetailFilter || activeFilters.has("annotations") ? annotations.filter(([key]) => matchesDetailQuery(key)) : [];
  const filteredElements =
    !showDetailFilter || activeFilters.has("elements") ? elements.filter(([key]) => matchesDetailQuery(key)) : [];
  const filteredPrivateProperties =
    !showDetailFilter || activeFilters.has("private")
      ? privateProperties.filter(([key]) => matchesDetailQuery(key))
      : [];
  const filteredProperties =
    !showDetailFilter || activeFilters.has("properties") ? properties.filter(([key]) => matchesDetailQuery(key)) : [];
  const hasFilteredDetails =
    filteredAnnotations.length +
      filteredElements.length +
      filteredPrivateProperties.length +
      filteredProperties.length >
    0;

  const toggleDraftFilter = (filter: DetailFilter): void => {
    setDraftFilters((currentFilters) => {
      const nextFilters = new Set(currentFilters);
      if (nextFilters.has(filter)) nextFilters.delete(filter);
      else nextFilters.add(filter);
      return nextFilters;
    });
  };

  const handleFilterMenuToggle = (event: SyntheticEvent<HTMLDetailsElement>): void => {
    const isOpen = event.currentTarget.open;
    setIsFilterMenuOpen(isOpen);
    if (isOpen) {
      setDraftFilters(new Set(activeFilters));
      setFilterMenuQuery("");
    }
  };

  const applyFilters = (): void => {
    setActiveFilters(new Set(draftFilters));
    setIsFilterMenuOpen(false);
  };

  const visibleFilterOptions = availableDetailFilters.filter(([, label]) =>
    label.toLowerCase().includes(filterMenuQuery.trim().toLowerCase()),
  );

  useEffect(() => {
    let isCurrent = true;

    const resolveLinks = async (): Promise<void> => {
      const links = await Promise.all(
        Object.entries(definition)
          .filter(([key]) => key.startsWith("@"))
          .map(async ([key, value]) => {
            const callback = annotationLinkCallbacks?.[key];
            if (callback === undefined) return [key, undefined] as const;

            try {
              return [key, await callback(value)] as const;
            } catch {
              return [key, undefined] as const;
            }
          }),
      );

      if (!isCurrent) return;
      const nextLinks: Record<string, string> = {};
      for (const [key, link] of links) {
        if (link) nextLinks[key] = link;
      }
      setAnnotationLinks(nextLinks);
    };

    void resolveLinks();
    return (): void => {
      isCurrent = false;
    };
  }, [annotationLinkCallbacks, definition]);

  return (
    <article className={styles.DefinitionDetails}>
      <header className={styles.DefinitionDetailsHeader}>
        <span className={styles.PaneTitle}>{formatDefinitionKind(definition.kind)}</span>
        <h2>{name}</h2>
        {showDetailFilter && (
          <div className={styles.DetailSearch}>
            <div className={styles.DetailSearchBox}>
              <input
                className={styles.DetailSearchInput}
                type="search"
                value={detailQuery}
                placeholder="Search annotations and properties"
                aria-label="Search annotations and properties"
                onChange={(event) => setDetailQuery(event.target.value)}
              />
              {showDetailFilter && (
                <details className={styles.DetailFilterMenu} open={isFilterMenuOpen} onToggle={handleFilterMenuToggle}>
                  <summary>
                    Filter
                    {availableDetailFilters.some(([filter]) => !activeFilters.has(filter))
                      ? ` (${availableDetailFilters.filter(([filter]) => activeFilters.has(filter)).length})`
                      : ""}
                  </summary>
                  <div className={styles.DetailFilterPopover}>
                    <input
                      className={styles.DetailFilterMenuSearch}
                      type="search"
                      value={filterMenuQuery}
                      placeholder="Filter sections"
                      aria-label="Filter sections"
                      onChange={(event) => setFilterMenuQuery(event.target.value)}
                    />
                    <div className={styles.DetailFilterQuickActions}>
                      <button
                        type="button"
                        onClick={() => setDraftFilters(new Set(availableDetailFilters.map(([filter]) => filter)))}>
                        Select all
                      </button>
                      <button type="button" onClick={() => setDraftFilters(new Set())}>
                        Clear
                      </button>
                    </div>
                    <div className={styles.DetailFilterOptions}>
                      {visibleFilterOptions.map(([filter, label]) => (
                        <label key={filter}>
                          <input
                            type="checkbox"
                            checked={draftFilters.has(filter)}
                            onChange={() => toggleDraftFilter(filter)}
                          />
                          {label}
                        </label>
                      ))}
                    </div>
                    <div className={styles.DetailFilterFooter}>
                      <Button variant="outline" size="sm" onClick={() => setIsFilterMenuOpen(false)}>
                        Cancel
                      </Button>
                      <Button size="sm" onClick={applyFilters}>
                        Apply
                      </Button>
                    </div>
                  </div>
                </details>
              )}
            </div>
          </div>
        )}
      </header>
      {definition.doc && <p className={styles.DefinitionDescription}>{definition.doc}</p>}
      {serviceEntities.length > 0 && (
        <CollapsibleDetailSection title={`Service Entities (${serviceEntities.length})`}>
          <div className={styles.RelatedDefinitionList}>
            {serviceEntities.map(([entityName]) => (
              <button
                key={entityName}
                className={styles.RelatedDefinitionButton}
                type="button"
                onClick={() => onDefinitionSelect(entityName)}>
                {entityName}
              </button>
            ))}
          </div>
        </CollapsibleDetailSection>
      )}
      {filteredAnnotations.length > 0 && (
        <CollapsibleDetailSection title={`Annotations (${filteredAnnotations.length})`}>
          <div className={styles.AnnotationList}>
            {filteredAnnotations.map(([key, value]) => (
              <div key={key} className={styles.AnnotationCard}>
                {getExtensionDocumentationLink(key) !== undefined ? (
                  <a
                    className={styles.AnnotationDocumentationLink}
                    href={getExtensionDocumentationLink(key)}
                    target="_blank"
                    rel="noreferrer">
                    {key}
                  </a>
                ) : (
                  <span className={styles.AnnotationKey}>{key}</span>
                )}
                <span
                  className={styles.AnnotationValue}
                  data-value-type={getValueType(value)}
                  title={formatValue(value)}>
                  {annotationLinks[key] !== undefined ? (
                    <a className={styles.AnnotationLink} href={annotationLinks[key]} target="_blank" rel="noreferrer">
                      {formatValue(value)}
                    </a>
                  ) : (
                    formatValue(value)
                  )}
                </span>
              </div>
            ))}
          </div>
        </CollapsibleDetailSection>
      )}
      {filteredElements.length > 0 && (
        <CollapsibleDetailSection title={`Elements (${filteredElements.length})`}>
          <div className={`${styles.PropertyList} ${styles.ElementList}`}>
            {filteredElements.map(([elementName, element]) => {
              const elementProperties = isRecord(element) ? Object.entries(element) : [];
              const elementAnnotations = elementProperties.filter(([key]) => key.startsWith("@"));
              const elementDefinition = elementProperties.filter(([key]) => !key.startsWith("@"));

              return (
                <div key={elementName} className={`${styles.PropertyCard} ${styles.ElementCard}`}>
                  <span className={styles.PropertyKey}>{elementName}</span>
                  {isRecord(element) ? (
                    <>
                      {elementDefinition.length > 0 && (
                        <div className={styles.ElementPropertyGroup}>
                          <span className={styles.ElementPropertyGroupLabel}>Definition</span>
                          <div className={styles.ElementPropertyList}>
                            {elementDefinition.map(([key, value]) => (
                              <div key={key} className={styles.ElementProperty}>
                                <span className={styles.PropertyKey}>{key}</span>
                                <span
                                  className={styles.PropertyValue}
                                  data-value-type={getValueType(value)}
                                  title={formatValue(value)}>
                                  {formatValue(value)}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      {elementAnnotations.length > 0 && (
                        <div className={styles.ElementPropertyGroup}>
                          <span className={styles.ElementPropertyGroupLabel}>Annotations</span>
                          <div className={styles.ElementPropertyList}>
                            {elementAnnotations.map(([key, value]) => (
                              <div key={key} className={styles.ElementProperty}>
                                <span className={styles.PropertyKey}>{key}</span>
                                <span
                                  className={styles.PropertyValue}
                                  data-value-type={getValueType(value)}
                                  title={formatValue(value)}>
                                  {formatValue(value)}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <span
                      className={styles.PropertyValue}
                      data-value-type={getValueType(element)}
                      title={formatValue(element)}>
                      {formatValue(element)}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </CollapsibleDetailSection>
      )}
      {filteredPrivateProperties.length > 0 && (
        <CollapsibleDetailSection title={`Private Properties (${filteredPrivateProperties.length})`}>
          <div className={styles.PropertyList}>
            {filteredPrivateProperties.map(([key, value]) => (
              <div key={key} className={styles.PropertyCard}>
                <span className={styles.PropertyKey}>{key}</span>
                <span className={styles.PropertyValue} data-value-type={getValueType(value)} title={formatValue(value)}>
                  {formatValue(value)}
                </span>
              </div>
            ))}
          </div>
        </CollapsibleDetailSection>
      )}
      {filteredProperties.length > 0 && (
        <CollapsibleDetailSection title={`Exposed Properties (${filteredProperties.length})`}>
          <div className={styles.PropertyList}>
            {filteredProperties.map(([key, value]) => (
              <div key={key} className={styles.PropertyCard}>
                <span className={styles.PropertyKey}>{key}</span>
                <span className={styles.PropertyValue} data-value-type={getValueType(value)} title={formatValue(value)}>
                  {formatValue(value)}
                </span>
              </div>
            ))}
          </div>
        </CollapsibleDetailSection>
      )}
      {(normalizedDetailQuery !== "" || activeFilters.size > 0) && !hasFilteredDetails && (
        <p className={styles.EmptyDetail}>No detail names match the current search and filters.</p>
      )}
    </article>
  );
}

export default function DefinitionExplorer({
  document,
  annotationLinkCallbacks,
  initialState,
  onStateChange,
}: Props): ReactNode {
  const definitions = useMemo(() => Object.entries(document.definitions ?? {}), [document]);
  const initialDefinitionName = initialState?.definition ?? "";
  const [selectedName, setSelectedName] = useState(initialDefinitionName);
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
  }, [definitions, document.definitions, initialState]);

  useEffect(() => {
    onStateChange?.({ definition: selectedName });
  }, [onStateChange, selectedName]);

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
        <div className={styles.DetailContent}>
          {selectedName && document.definitions?.[selectedName] !== undefined ? (
            <DefinitionDetails
              name={selectedName}
              definition={document.definitions[selectedName]}
              definitions={definitions}
              onDefinitionSelect={selectDefinition}
              annotationLinkCallbacks={annotationLinkCallbacks}
            />
          ) : definitions.length > 0 ? (
            <p className={styles.EmptyDetail}>Select a definition to inspect its details.</p>
          ) : (
            <p className={styles.EmptyDetail}>This CSN model has no definitions.</p>
          )}
        </div>
      </section>
    </div>
  );
}
