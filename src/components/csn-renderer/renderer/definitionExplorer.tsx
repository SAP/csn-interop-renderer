import {
  type CSSProperties,
  type KeyboardEvent,
  type RefObject,
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
import ResizableSeparator from "./resizableSeparator";
import type { CsnDefinition, CsnDocument, ExplorerState } from "./types";
import { isExposedDefinitionProperty, normalizeExplorerState, writeSharedExampleState } from "./shareState";
import { resolveAnnotationLinks } from "./annotationLinks";

interface Props {
  document: CsnDocument;
  annotationLinkCallbacks?: AnnotationLinkCallbacks;
  initialState?: Partial<ExplorerState>;
  onStateChange?: (state: ExplorerState) => void;
  linkedExampleId?: string;
}

export type { ExplorerState } from "./types";

type DetailItemSection = "annotations" | "private" | "properties";

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

const getDefinitionHref = (name: string, exampleId: string): string => {
  const hash = writeSharedExampleState("", exampleId, { definition: name }, "entity");
  if (typeof window === "undefined") return hash;
  return `${window.location.pathname}${window.location.search}${hash}`;
};

interface DefinitionDetailsProps {
  name: string;
  definition: CsnDefinition;
  definitions: readonly [string, CsnDefinition][];
  onDefinitionSelect: (name: string) => void;
  selectedElement: string;
  onElementSelect: (name: string) => void;
  selectedSection: string;
  selectedItem: string;
  onDetailItemSelect: (section: DetailItemSection, name: string) => void;
  selectedDetailRef: RefObject<HTMLDivElement | null>;
  annotationLinkCallbacks?: AnnotationLinkCallbacks;
  linkedExampleId?: string;
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

const handleSelectableDetailKeyDown = (event: KeyboardEvent<HTMLDivElement>, onSelect: () => void): void => {
  if (event.key !== "Enter" && event.key !== " ") return;

  event.preventDefault();
  onSelect();
};

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
  selectedElement,
  onElementSelect,
  selectedSection,
  selectedItem,
  onDetailItemSelect,
  selectedDetailRef,
  annotationLinkCallbacks,
  linkedExampleId,
}: DefinitionDetailsProps): ReactNode {
  const annotations = Object.entries(definition).filter(([key]) => key.startsWith("@"));
  const [resolvedLinks, setResolvedLinks] = useState<{
    definition: CsnDefinition;
    callbacks: AnnotationLinkCallbacks | undefined;
    annotations: Record<string, string>;
    elements: Record<string, Record<string, string>>;
  } | null>(null);
  const currentLinks =
    resolvedLinks?.definition === definition && resolvedLinks.callbacks === annotationLinkCallbacks
      ? resolvedLinks
      : null;
  const annotationLinks = currentLinks?.annotations ?? {};
  const elementAnnotationLinks = currentLinks?.elements ?? {};
  const [activeFilters, setActiveFilters] = useState<ReadonlySet<DetailFilter>>(createAllDetailFilters);
  const [draftFilters, setDraftFilters] = useState<ReadonlySet<DetailFilter>>(createAllDetailFilters);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const [filterMenuQuery, setFilterMenuQuery] = useState("");
  const [detailQuery, setDetailQuery] = useState("");
  const elements = Object.entries(definition.elements ?? {});
  const properties = Object.entries(definition).filter(([key]) => isExposedDefinitionProperty(key));
  const privateProperties = Object.entries(definition).filter(([key]) => key.startsWith("__"));
  const availableDetailFilters = detailFilterOptions.filter(([filter]) => {
    if (filter === "annotations") return annotations.length > 0;
    if (filter === "elements") return elements.length > 0;
    if (filter === "properties") return properties.length > 0;
    return privateProperties.length > 0;
  });
  const showDetailFilter = availableDetailFilters.length > 1;
  const relatedEntities =
    definition.kind === "service" || definition.kind === "context"
      ? definitions.filter(([entityName, entity]) => entity.kind === "entity" && entityName.startsWith(`${name}.`))
      : [];
  const relatedEntitiesTitle = definition.kind === "service" ? "Exposed Entities" : "Entities";
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
      const [links, elementLinks] = await Promise.all([
        resolveAnnotationLinks(definition, annotationLinkCallbacks),
        Promise.all(
          Object.entries(definition.elements ?? {}).map(
            async ([elementName, element]) =>
              [
                elementName,
                isRecord(element) ? await resolveAnnotationLinks(element, annotationLinkCallbacks) : {},
              ] as const,
          ),
        ),
      ]);

      if (!isCurrent) return;
      setResolvedLinks({
        definition,
        callbacks: annotationLinkCallbacks,
        annotations: links,
        elements: Object.fromEntries(elementLinks),
      });
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
                placeholder="Search definition details"
                aria-label="Search definition details"
                onChange={(event) => setDetailQuery(event.target.value)}
              />
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
            </div>
          </div>
        )}
      </header>
      {definition.doc && <p className={styles.DefinitionDescription}>{definition.doc}</p>}
      {relatedEntities.length > 0 && (
        <CollapsibleDetailSection title={`${relatedEntitiesTitle} (${relatedEntities.length})`}>
          <div className={styles.RelatedDefinitionList}>
            {relatedEntities.map(([entityName]) =>
              linkedExampleId ? (
                <a
                  key={entityName}
                  className={styles.RelatedDefinitionLink}
                  href={getDefinitionHref(entityName, linkedExampleId)}
                  onClick={(event) => {
                    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
                    event.preventDefault();
                    onDefinitionSelect(entityName);
                  }}>
                  {entityName}
                </a>
              ) : (
                <Button
                  key={entityName}
                  variant="ghost"
                  className={styles.RelatedDefinitionLink}
                  onClick={() => onDefinitionSelect(entityName)}>
                  {entityName}
                </Button>
              ),
            )}
          </div>
        </CollapsibleDetailSection>
      )}
      {filteredAnnotations.length > 0 && (
        <CollapsibleDetailSection title={`Annotations (${filteredAnnotations.length})`}>
          <div className={styles.AnnotationList}>
            {filteredAnnotations.map(([key, value]) => (
              <div
                key={key}
                className={styles.AnnotationCard}
                role="button"
                aria-pressed={selectedSection === "annotations" && selectedItem === key}
                tabIndex={0}
                ref={selectedSection === "annotations" && selectedItem === key ? selectedDetailRef : undefined}
                onClick={() => onDetailItemSelect("annotations", key)}
                onKeyDown={(event) =>
                  handleSelectableDetailKeyDown(event, () => onDetailItemSelect("annotations", key))
                }>
                {getExtensionDocumentationLink(key) !== undefined ? (
                  <a
                    className={styles.AnnotationDocumentationLink}
                    href={getExtensionDocumentationLink(key)}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(event) => event.stopPropagation()}>
                    {key}
                  </a>
                ) : (
                  <span className={styles.AnnotationKey}>{key}</span>
                )}
                <span className={styles.AnnotationSeparator} aria-hidden="true">
                  :
                </span>
                <span
                  className={styles.AnnotationValue}
                  data-value-type={getValueType(value)}
                  title={formatValue(value)}>
                  {annotationLinks[key] !== undefined ? (
                    <a
                      className={styles.AnnotationLink}
                      href={annotationLinks[key]}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(event) => event.stopPropagation()}>
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
                <div
                  key={elementName}
                  className={`${styles.PropertyCard} ${styles.ElementCard}`}
                  role="button"
                  aria-pressed={selectedElement === elementName}
                  tabIndex={0}
                  ref={selectedElement === elementName ? selectedDetailRef : undefined}
                  onClick={() => onElementSelect(elementName)}
                  onKeyDown={(event) => handleSelectableDetailKeyDown(event, () => onElementSelect(elementName))}>
                  <span className={styles.PropertyKey}>{elementName}</span>
                  {isRecord(element) ? (
                    <>
                      {elementDefinition.length > 0 && (
                        <div className={styles.ElementPropertyGroup}>
                          <h4 className={styles.ElementPropertyGroupLabel}>Definition</h4>
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
                          <h4 className={styles.ElementPropertyGroupLabel}>Annotations</h4>
                          <div className={styles.ElementPropertyList}>
                            {elementAnnotations.map(([key, value]) => (
                              <div key={key} className={styles.ElementProperty}>
                                <span className={styles.PropertyKey}>{key}</span>
                                <span
                                  className={styles.PropertyValue}
                                  data-value-type={getValueType(value)}
                                  title={formatValue(value)}>
                                  {elementAnnotationLinks[elementName]?.[key] ? (
                                    <a
                                      className={styles.AnnotationLink}
                                      href={elementAnnotationLinks[elementName][key]}
                                      target="_blank"
                                      rel="noreferrer"
                                      onClick={(event) => event.stopPropagation()}
                                      onKeyDown={(event) => event.stopPropagation()}>
                                      {formatValue(value)}
                                    </a>
                                  ) : (
                                    formatValue(value)
                                  )}
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
          <div className={`${styles.PropertyList} ${styles.CompactPropertyList}`}>
            {filteredPrivateProperties.map(([key, value]) => (
              <div
                key={key}
                className={styles.PropertyCard}
                role="button"
                aria-pressed={selectedSection === "private" && selectedItem === key}
                tabIndex={0}
                ref={selectedSection === "private" && selectedItem === key ? selectedDetailRef : undefined}
                onClick={() => onDetailItemSelect("private", key)}
                onKeyDown={(event) => handleSelectableDetailKeyDown(event, () => onDetailItemSelect("private", key))}>
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
        <CollapsibleDetailSection title={`Properties (${filteredProperties.length})`}>
          <div className={`${styles.PropertyList} ${styles.CompactPropertyList}`}>
            {filteredProperties.map(([key, value]) => (
              <div
                key={key}
                className={styles.PropertyCard}
                role="button"
                aria-pressed={selectedSection === "properties" && selectedItem === key}
                tabIndex={0}
                ref={selectedSection === "properties" && selectedItem === key ? selectedDetailRef : undefined}
                onClick={() => onDetailItemSelect("properties", key)}
                onKeyDown={(event) =>
                  handleSelectableDetailKeyDown(event, () => onDetailItemSelect("properties", key))
                }>
                <span className={styles.PropertyKey}>{key}</span>
                <span className={styles.PropertyValue} data-value-type={getValueType(value)} title={formatValue(value)}>
                  {formatValue(value)}
                </span>
              </div>
            ))}
          </div>
        </CollapsibleDetailSection>
      )}
      {(normalizedDetailQuery !== "" || activeFilters.size > 0) &&
        !hasFilteredDetails &&
        relatedEntities.length === 0 && (
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
  linkedExampleId,
}: Props): ReactNode {
  const definitions = useMemo(() => Object.entries(document.definitions ?? {}), [document]);
  const selection = useMemo(() => normalizeExplorerState(document, initialState ?? {}), [document, initialState]);
  const {
    definition: selectedName,
    element: selectedElement,
    section: selectedSection,
    item: selectedItem,
  } = selection;
  const [definitionQuery, setDefinitionQuery] = useState("");
  const [expandedGroups, setExpandedGroups] = useState<ReadonlySet<string>>(
    () => new Set(definitionGroups.map(([kind]) => kind)),
  );
  const [definitionWidth, setDefinitionWidth] = useState(35);
  const explorerRef = useRef<HTMLDivElement>(null);
  const detailContentRef = useRef<HTMLDivElement>(null);
  const selectedDetailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const detailContent = detailContentRef.current;
    if (detailContent === null) return;

    const selectedDetail = selectedDetailRef.current;
    if (selectedDetail !== null) {
      const contentBounds = detailContent.getBoundingClientRect();
      const detailBounds = selectedDetail.getBoundingClientRect();
      detailContent.scrollTo({ top: detailContent.scrollTop + detailBounds.top - contentBounds.top - 12 });
      return;
    }

    detailContent.scrollTo({ top: 0 });
  }, [selectedElement, selectedItem, selectedName, selectedSection]);

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
    onStateChange?.({ definition: name, element: "", section: "", item: "" });
  };

  const selectElement = (name: string): void => {
    onStateChange?.({ definition: selectedName, element: name, section: "", item: "" });
  };

  const selectDetailItem = (section: DetailItemSection, name: string): void => {
    onStateChange?.({ definition: selectedName, element: "", section, item: name });
  };

  const resizeDefinitionNav = useCallback((clientX: number): void => {
    const explorer = explorerRef.current;
    if (explorer === null) return;

    const { left, width } = explorer.getBoundingClientRect();
    const nextWidth = ((clientX - left) / width) * 100;
    setDefinitionWidth(Math.min(Math.max(nextWidth, 0), 100));
  }, []);

  const explorerStyle: CSSProperties & Record<"--definition-nav-width", string> = {
    "--definition-nav-width": `${definitionWidth}%`,
  };

  return (
    <div ref={explorerRef} className={styles.Explorer} style={explorerStyle}>
      <header className={styles.ExplorerHeader}>
        <span className={styles.PaneTitle}>CSN model</span>
        <h2>Definitions</h2>
      </header>
      <nav className={styles.DefinitionNav} aria-label="CSN definitions">
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
      <ResizableSeparator
        className={styles.ResizeHandle}
        label="Resize definitions panel"
        value={definitionWidth}
        min={0}
        max={100}
        onPointerPositionChange={resizeDefinitionNav}
        onValueChange={(nextWidth) => setDefinitionWidth(Math.min(Math.max(nextWidth, 0), 100))}
      />
      <section className={styles.DefinitionDetail}>
        <div ref={detailContentRef} className={styles.DetailContent}>
          {selectedName && document.definitions?.[selectedName] !== undefined ? (
            <DefinitionDetails
              name={selectedName}
              definition={document.definitions[selectedName]}
              definitions={definitions}
              onDefinitionSelect={selectDefinition}
              selectedElement={selectedElement}
              onElementSelect={selectElement}
              selectedSection={selectedSection}
              selectedItem={selectedItem}
              onDetailItemSelect={selectDetailItem}
              selectedDetailRef={selectedDetailRef}
              annotationLinkCallbacks={annotationLinkCallbacks}
              linkedExampleId={linkedExampleId}
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
