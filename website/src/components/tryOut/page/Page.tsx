import React, { FC } from "react";
import styles from "./Page.module.css";
import classnames from "classnames";

interface Props {
  children?: JSX.Element | JSX.Element[];
  className?: string;
}

const Page: FC<Props> = ({ children, className = "" }) => {
  return <div className={classnames(styles.Page, ...className.split(" "))}>{children}</div>;
};

export default Page;
