import React from "react";
import { Button } from "@ui5/webcomponents-react";
import Error from "./Error";

interface Props {
  title?: string;
  description?: string;
  className?: string;
  children?: JSX.Element;
}

const onOpenValidator = (): void => {
  document.location.assign(document.location.pathname);
};

const NoData = (props: Props): JSX.Element => {
  const { children, title, description, className } = props;
  return (
    <>
      <Error name="noData" title={title ?? "No data to display!"} description={description} className={className}>
        <>
          {children}
          <Button onClick={onOpenValidator}>Open validator without an artifact</Button>
        </>
      </Error>
    </>
  );
};

export default NoData;
