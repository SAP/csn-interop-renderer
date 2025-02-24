import React from "react";
import "@ui5/webcomponents-icons/dist/refresh";
import { Button, Link } from "@ui5/webcomponents-react";
import Error from "./Error";

interface Props {
  title?: string;
  description?: string;
  className?: string;
  children?: JSX.Element;
}

const onTryAgain = (): void => {
  document.location.reload();
};

const onOpenValidator = (): void => {
  document.location.assign(document.location.pathname);
};

const FetchError = (props: Props): JSX.Element => {
  const { children, title, description, className } = props;
  return (
    <>
      <Error
        name="unableToLoad"
        title={title || "Unable to load data"}
        description={
          description || (
            <>
              Check your Internet connection. If that's not it, try reloading. If that still doesn't help, contact the{" "}
              <Link
                style={{ fontSize: "16px" }}
                href="mailto:DL_61656D3C233D900280572215@global.corp.sap?subject=Validator%20issue">
                validator team
              </Link>
              .
            </>
          )
        }
        className={className}>
        <>
          <Button icon="refresh" onClick={onTryAgain} design="Emphasized">
            Try again
          </Button>
          <br />
          <br />
          <Button onClick={onOpenValidator}>Open validator without an artifact</Button>
          {children}
        </>
      </Error>
    </>
  );
};

export default FetchError;
