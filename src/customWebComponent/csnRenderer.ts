import { generateHtml } from "../index.js";
import type { CsnRendererProps } from "../types/index.js";

type CsnRendererPropName = keyof CsnRendererProps;

export class CsnRenderer extends HTMLElement {
  public static observedAttributes: CsnRendererPropName[] = ["source"];

  private async _renderHtml(value: string | null | undefined): Promise<void> {
    if (!value) return;

    this.innerHTML = await generateHtml(JSON.parse(value));
  }

  public attributeChangedCallback(name: CsnRendererPropName, _oldValue: string | null, newValue: string | null): void {
    if (name === "source" && !!newValue && typeof newValue === "string") {
      void this._renderHtml(newValue);
    }
  }
}

declare global {
  // registering the Angular typings of the custom element
  // eslint-disable-next-line @typescript-eslint/naming-convention
  interface HTMLElementTagNameMap {
    "csn-renderer": CsnRenderer;
  }

  // registering the React typings of the custom element
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace React.JSX {
    interface IntrinsicElements {
      ["csn-renderer"]: { source: string; config?: string };
    }
  }
}

customElements.define("csn-renderer", CsnRenderer);
