import OriginalDocItemLayout from "@theme-original/DocItem/Layout";
import type { Props } from "@theme/DocItem/Layout";
import { type ReactNode, useEffect } from "react";
import { initializeTableInteractions } from "../../../utils/tableInteractions";

export default function DocItemLayout(props: Props): ReactNode {
  useEffect(() => initializeTableInteractions(), []);

  return <OriginalDocItemLayout {...props} />;
}
