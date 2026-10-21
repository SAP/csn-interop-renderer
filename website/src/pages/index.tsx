import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import type { ReactNode } from "react";
import styles from "./index.module.css";

function CsnMark(): ReactNode {
  return (
    <svg className={styles.Mark} viewBox="0 0 72 72" aria-hidden="true">
      <rect x="8" y="10" width="56" height="20" rx="7" />
      <path d="M19 20h13M40 20h13M19 42h34M19 53h24" />
      <circle cx="37" cy="20" r="3" />
    </svg>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout title="CSN Interop Renderer" description="Explore, document, and share CSN Interoperability documents.">
      <main className={styles.Landing}>
        <section className={styles.Hero}>
          <CsnMark />
          <h1>CSN Interop Renderer</h1>
          <p>
            Explore, validate, and render CSN Interoperability documents.
            <br />
            Inspect model definitions, annotations, and elements in one focused workspace.
          </p>
          <Link className={styles.PrimaryAction} to="/try?reset">
            Open playground
          </Link>
        </section>

        <section className={styles.Documentation}>
          <div>
            <h2>Need help getting started?</h2>
            <p>Read the documentation for installation, the CLI, and embedding the renderer in your application.</p>
          </div>
          <Link to="/docs">Read documentation</Link>
        </section>
      </main>
    </Layout>
  );
}
