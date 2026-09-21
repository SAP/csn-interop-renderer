import Link from "@docusaurus/Link";
import { type ReactNode, useEffect, useState } from "react";
import styles from "./Tree.module.css";

interface TocHeading {
  children: TocHeading[];
  id: string;
  value: string;
}
interface Props {
  className?: string;
  isChild?: boolean;
  linkClassName?: string;
  toc: TocHeading[];
}
interface TocItemProps {
  className?: string;
  heading: TocHeading;
  linkClassName?: string;
}
function containsHeadingId(heading: TocHeading, id: string): boolean {
  return heading.id === id || heading.children.some((child) => containsHeadingId(child, id));
}
function TocItem({ className, heading, linkClassName }: TocItemProps): ReactNode {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeId, setActiveId] = useState("");
  const hasChildren = heading.children.length > 0;
  useEffect(() => {
    const update = (): void => setActiveId(window.location.hash.slice(1));
    update();
    window.addEventListener("hashchange", update);
    return (): void => window.removeEventListener("hashchange", update);
  }, []);
  useEffect(() => {
    if (activeId && containsHeadingId(heading, activeId)) setIsCollapsed(false);
  }, [activeId, heading]);
  return (
    <li>
      <div className={styles.Item}>
        <Link className={linkClassName} dangerouslySetInnerHTML={{ __html: heading.value }} to={`#${heading.id}`} />
        {hasChildren && (
          <button
            aria-expanded={!isCollapsed}
            aria-label={`${isCollapsed ? "Expand" : "Collapse"} ${heading.value}`}
            className={styles.Toggle}
            onClick={() => setIsCollapsed((collapsed) => !collapsed)}
            type="button">
            <span aria-hidden="true" className={isCollapsed ? styles.CollapsedIcon : styles.ExpandedIcon}>
              ▾
            </span>
          </button>
        )}
      </div>
      {!isCollapsed && (
        <TocItemTree className={className} isChild linkClassName={linkClassName} toc={heading.children} />
      )}
    </li>
  );
}
function TocItemTree({ toc, className, linkClassName, isChild }: Props): ReactNode {
  if (!toc.length) return null;
  return (
    <ul className={isChild ? undefined : className}>
      {toc.map((heading) => (
        <TocItem className={className} heading={heading} key={heading.id} linkClassName={linkClassName} />
      ))}
    </ul>
  );
}
export default TocItemTree;
