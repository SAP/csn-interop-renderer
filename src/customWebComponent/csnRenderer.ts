import { generateHtml } from "../index.js";

export interface CsnRendererProps {
  /** @param source A valid text (containing JSON CSNInteropRoot object).*/
  source: string;
}

type CsnRendererPropName = keyof CsnRendererProps;

export class CsnRenderer extends HTMLElement {
  private _htmlContent: string = "";

  public constructor() {
    super();
  }

  public static observedAttributes: CsnRendererPropName[] = ["source"];

  private async _renderHtml(newValue?: string): Promise<void> {
    if (newValue) {
      this._htmlContent = await generateHtml(JSON.parse(newValue));
      this.innerHTML = this._htmlContent;
    } else {
      const csnDataSource = this.getAttribute("source");
      if (csnDataSource) {
        this._htmlContent = await generateHtml(JSON.parse(csnDataSource));
        this.innerHTML = this._htmlContent;
      }
    }
  }

  public connectedCallback(): void {
    void this._renderHtml();
  }

  public disconnectedCallback(): void {}

  public adoptedCallback(): void {}

  public attributeChangedCallback(name: CsnRendererPropName, _oldValue: unknown, newValue: unknown): void {
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
  namespace JSX {
    interface IntrinsicElements {
      ["csn-renderer"]: { source: string };
    }
  }
}

customElements.define("csn-renderer", CsnRenderer);
