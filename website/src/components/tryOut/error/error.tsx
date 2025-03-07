import React from "react";
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
  description?: string | JSX.Element;
  className?: string;
  children?: JSX.Element;
}

const Error = ({ name, title, description, className = "", children }: Props): JSX.Element => {
  const Icon = images[name];
  return (
    <div className={classnames(styles.IllustratedMessage, ...className.split(","))}>
      <Icon />
      {title ? <div className={styles.Title}>{title}</div> : null}
      {description ? <div className={styles.Description}>{description}</div> : null}
      {children ? <div className={styles.Content}>{children}</div> : null}
    </div>
  );
};

export default Error;
