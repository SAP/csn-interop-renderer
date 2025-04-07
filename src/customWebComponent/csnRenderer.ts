import { generateHtml } from "../index.js";

export interface CsnRendererProps {
  /** @param source A valid text (containing JSON CSNInteropRoot object).*/
  source: string;
  /** @param config A valid text (containing JSON object of type CsnRendererConfig). */
  config?: string;
}

type CsnRendererPropName = keyof CsnRendererProps;

export class CsnRenderer extends HTMLElement {
  private _htmlContent: string = "";
  private _source: string = "";
  private _config: string = "";

  public constructor() {
    super();
  }

  public static observedAttributes: CsnRendererPropName[] = ["source", "config"];

  private async _renderHtml(value: string | null | undefined, config: string | null | undefined): Promise<void> {
    if (value) {
      this._htmlContent = await generateHtml(
        JSON.parse(value),
        config
          ? JSON.parse(config, function (key: string, value: string): unknown {
              if (key.startsWith("@")) {
                return eval(value);
              }
              return value;
            })
          : undefined,
      );
      this.innerHTML = this._htmlContent;
    }
  }

  public connectedCallback(): void {}

  public disconnectedCallback(): void {}

  public adoptedCallback(): void {}

  public attributeChangedCallback(name: CsnRendererPropName, _oldValue: unknown, newValue: unknown): void {
    if (name === "source" && !!newValue && typeof newValue === "string") {
      this._source = newValue;
      void this._renderHtml(this._source, this._config);
    }
    if (name === "config" && !!newValue && typeof newValue === "string") {
      this._config = newValue;
      void this._renderHtml(this._source, this._config);
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
      ["csn-renderer"]: { source: string; config?: string };
    }
  }
}

customElements.define("csn-renderer", CsnRenderer);
