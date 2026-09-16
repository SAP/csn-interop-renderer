import DOMPurify from "dompurify";
import type { ReactNode } from "react";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import styles from "./renderer.module.css";
import type { OutputFormat } from "./types";

interface Props {
  format: OutputFormat;
  content: string;
}

export default function RenderedOutput({ format, content }: Props): ReactNode {
  const sanitizedContent = DOMPurify.sanitize(content);

  switch (format) {
    case "markdown":
      return (
        <div className={styles.RenderWrapper}>
          <Markdown rehypePlugins={[rehypeRaw, rehypeSlug]}>{sanitizedContent}</Markdown>
        </div>
      );
    case "html":
      return (
        <div className={styles.RenderWrapper}>
          <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
        </div>
      );
    case "web-component":
      return (
        <div className={styles.RenderWrapper}>
          <csn-renderer source={content} />
        </div>
      );
    default:
      return null;
  }
}
