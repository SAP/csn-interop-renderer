import Layout from "@theme/Layout";
import React from "react";
import styles from "./index.module.css";
import Renderer from "../components/tryOut/renderer/Renderer";

export default function TryPage(): JSX.Element {
  return (
    <Layout noFooter wrapperClassName={styles.tryout}>
      <Renderer />
    </Layout>
  );
}
