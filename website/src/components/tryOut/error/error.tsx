import type { ReactNode } from "react";
import classnames from "classnames";
import styles from "./error.module.css";
import noData from "./img/no-data.svg";
import unableToLoad from "./img/unable-to-load.svg";
import unsuccessfulAuth from "./img/unsuccessful-auth.svg";

const images = {
  unableToLoad,
  noData,
  unsuccessfulAuth,
};

interface Props {
  name: keyof typeof images;
  title?: string;
  description?: ReactNode;
  className?: string;
  children?: ReactNode;
}

export default function Error({ name, title, description, className = "", children }: Props): ReactNode {
  const Icon = images[name];
  return (
    <div className={classnames(styles.IllustratedMessage, ...className.split(","))}>
      <Icon />
      {title ? <div className={styles.Title}>{title}</div> : null}
      {description ? <div className={styles.Description}>{description}</div> : null}
      {children ? <div className={styles.Content}>{children}</div> : null}
    </div>
  );
}
