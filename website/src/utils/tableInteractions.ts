const headingSelector = ".theme-doc-markdown h2";
const elementSelector = ".theme-doc-markdown td.elementCell strong[id]";

function sectionNodes(heading: HTMLHeadingElement): Element[] {
  const nodes: Element[] = [];
  for (let node = heading.nextElementSibling; node && node.tagName !== "H2"; node = node.nextElementSibling) {
    nodes.push(node);
  }
  return nodes;
}

function setSectionCollapsed(heading: HTMLHeadingElement, collapsed: boolean): void {
  heading.dataset.collapsed = String(collapsed);
  heading
    .querySelector<HTMLButtonElement>(".section-collapse-toggle")
    ?.setAttribute("aria-expanded", String(!collapsed));
  sectionNodes(heading).forEach((node) => node.classList.toggle("section-content-hidden", collapsed));
}

function initializeCollapsibleSections(signal: AbortSignal): void {
  document.querySelectorAll<HTMLHeadingElement>(headingSelector).forEach((heading) => {
    if (heading.dataset.collapsibleSection) return;
    heading.dataset.collapsibleSection = "true";
    const label = heading.textContent?.trim() ?? "section";
    const button = document.createElement("button");
    button.className = "section-collapse-toggle";
    button.type = "button";
    button.setAttribute("aria-expanded", "true");
    button.setAttribute("aria-label", `Collapse ${label}`);
    button.textContent = "▾";
    button.addEventListener(
      "click",
      () => {
        const collapsed = heading.dataset.collapsed !== "true";
        setSectionCollapsed(heading, collapsed);
        button.setAttribute("aria-label", `${collapsed ? "Expand" : "Collapse"} ${label}`);
      },
      { signal },
    );
    heading.insertBefore(button, heading.firstChild);
  });
}

function targetId(): string {
  try {
    return decodeURIComponent(window.location.hash.slice(1));
  } catch {
    return "";
  }
}

function highlightTargetRow(activeTargetId: { current: string }): void {
  document.querySelectorAll(".table-row-target").forEach((row) => row.classList.remove("table-row-target"));
  const id = targetId();
  const row = document.getElementById(id)?.closest("tr");
  row?.classList.add("table-row-target");
  if (!row || id === activeTargetId.current) {
    activeTargetId.current = id;
    return;
  }
  activeTargetId.current = id;
  const scrollContainer = row.parentElement;
  if (!scrollContainer || scrollContainer.scrollHeight <= scrollContainer.clientHeight) return;
  scrollContainer.scrollTop += row.getBoundingClientRect().top - scrollContainer.getBoundingClientRect().top;
}

function initializeRowAnchors(signal: AbortSignal, activeTargetId: { current: string }): void {
  document.querySelectorAll<HTMLElement>(elementSelector).forEach((element) => {
    const cell = element.closest("td");
    if (!cell || cell.querySelector(".tableRowAnchor")) return;
    const anchor = document.createElement("a");
    anchor.className = "tableRowAnchor";
    anchor.href = `#${element.id}`;
    anchor.setAttribute("aria-label", `Link to ${element.textContent?.trim() ?? "element"}`);
    anchor.textContent = "#";
    anchor.addEventListener(
      "click",
      (event) => {
        if (window.location.hash !== anchor.hash) return;
        event.preventDefault();
        history.replaceState(null, "", window.location.pathname + window.location.search);
        highlightTargetRow(activeTargetId);
      },
      { signal },
    );
    cell.append(anchor);
  });
}

export function initializeTableInteractions(): () => void {
  const controller = new AbortController();
  const activeTargetId = { current: "" };
  const update = (): void => {
    initializeCollapsibleSections(controller.signal);
    initializeRowAnchors(controller.signal, activeTargetId);
    highlightTargetRow(activeTargetId);
  };
  const observer = new MutationObserver(update);
  observer.observe(document.body, { childList: true, subtree: true });
  window.addEventListener("hashchange", () => highlightTargetRow(activeTargetId), { signal: controller.signal });
  document.addEventListener(
    "click",
    (event) => {
      if (!(event.target instanceof Element) || event.target.closest(".tableRowAnchor")) return;
      if (!document.querySelector(".table-row-target")) return;
      history.replaceState(null, "", window.location.pathname + window.location.search);
      highlightTargetRow(activeTargetId);
    },
    { signal: controller.signal },
  );
  update();
  return (): void => {
    controller.abort();
    observer.disconnect();
  };
}
