import { generateHtml } from "../index.js";

export interface CsnRendererProps {
  /** @param source A valid text (containing JSON CSNInteropRoot object).*/
  source: string;
}

type CsnRendererPropName = keyof CsnRendererProps;

export class CsnRenderer extends HTMLElement {
  private _htmlContent: string = "";
  private _source: string = "";

  public constructor() {
    super();
  }

  public static observedAttributes: CsnRendererPropName[] = ["source"];

  private async _renderHtml(value: string | null | undefined): Promise<void> {
    if (value) {
      this._htmlContent = await generateHtml(JSON.parse(value));
      this.innerHTML = this._htmlContent;
    }
  }

  public connectedCallback(): void {}

  public disconnectedCallback(): void {}

  public adoptedCallback(): void {}

  public attributeChangedCallback(name: CsnRendererPropName, _oldValue: unknown, newValue: unknown): void {
    if (name === "source" && !!newValue && typeof newValue === "string") {
      this._source = newValue;
      void this._renderHtml(this._source);
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
