/**
 * @jest-environment jsdom
 */

import example from "../../examples/CSNInterop.js";
import { CsnRenderer } from "../customWebComponent/csnRenderer.js";

const waitForRender = async (): Promise<void> => {
  await new Promise<void>((resolve) => setTimeout(resolve, 0));
};

describe("CsnRenderer", () => {
  test("should properly render the provided CSN source document", async () => {
    const component = new CsnRenderer();
    component.setAttribute("source", JSON.stringify(example));
    await waitForRender();
    expect(component.innerHTML).toMatchSnapshot();
  });
});

// ---------------------------------------------------------------------------
// CsnRenderer — rendering
// ---------------------------------------------------------------------------
describe("CsnRenderer — rendering", () => {
  test("valid minimal document renders entity name into innerHTML", async () => {
    const component = new CsnRenderer();
    component.setAttribute(
      "source",
      JSON.stringify({
        csnInteropEffective: "1.0",
        $version: "2.0",
        definitions: {
          MyEntity: { kind: "entity", elements: { ID: { type: "cds.String" } } },
        },
      }),
    );
    await waitForRender();
    expect(component.innerHTML).toMatchSnapshot();
  });
});

// ---------------------------------------------------------------------------
// CsnRenderer — _renderHtml guards
// ---------------------------------------------------------------------------
describe("CsnRenderer — render guards", () => {
  test("does not update innerHTML for an empty source", async () => {
    const component = new CsnRenderer() as unknown as {
      _renderHtml: (v: string) => Promise<void>;
      innerHTML: string;
    };
    await component._renderHtml("");
    expect(component.innerHTML).toBe("");
  });

  test("does not update innerHTML for a null source", async () => {
    const component = new CsnRenderer() as unknown as {
      _renderHtml: (v: string | null) => Promise<void>;
      innerHTML: string;
    };
    await component._renderHtml(null);
    expect(component.innerHTML).toBe("");
  });

  test("rejects invalid JSON with a SyntaxError", async () => {
    const component = new CsnRenderer() as unknown as {
      _renderHtml: (v: string) => Promise<void>;
    };
    await expect(component._renderHtml("not-valid-json{{{")).rejects.toThrow(SyntaxError);
  });
});

// ---------------------------------------------------------------------------
// CsnRenderer — attributeChangedCallback guards
// ---------------------------------------------------------------------------
describe("CsnRenderer — attribute changes", () => {
  test("does not render an empty source attribute", () => {
    const component = new CsnRenderer();
    component.setAttribute("source", "");
    expect(component.innerHTML).toBe("");
  });

  test("unrecognised attribute change is ignored and does not throw", () => {
    const component = new CsnRenderer() as unknown as {
      attributeChangedCallback: (name: string, old: unknown, next: unknown) => void;
      innerHTML: string;
    };
    expect(() => component.attributeChangedCallback("data-other", null, "value")).not.toThrow();
    expect(component.innerHTML).toBe("");
  });
});
