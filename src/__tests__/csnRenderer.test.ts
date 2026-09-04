/**
 * @jest-environment jsdom
 */

import example from "../../examples/CSNInterop.js";
import { CsnRenderer } from "../customWebComponent/csnRenderer.js";

describe("Custom web-component Tests", () => {
  test("should properly render the provided CSN source document", async () => {
    const component = new CsnRenderer();
    component.setAttribute("source", JSON.stringify(example));
    // let some time pass until the async generateHtml function has finished
    await new Promise((result) => setTimeout(result, 10));
    expect(component).toBeDefined();
    expect(component.innerHTML).toMatchSnapshot();
  });
});

// ---------------------------------------------------------------------------
// CsnRenderer — rendering
// ---------------------------------------------------------------------------
describe("CsnRenderer — rendering", () => {
  test("renders HTML into innerHTML when source attribute is set", async () => {
    const component = new CsnRenderer();
    component.setAttribute("source", JSON.stringify(example));
    await new Promise((r) => setTimeout(r, 100));
    expect(component.innerHTML).toContain("AirlineService.Airline");
    expect(component.innerHTML).toContain("<h");
    expect(component.innerHTML).toContain("<table");
  });

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
    await new Promise((r) => setTimeout(r, 100));
    expect(component.innerHTML).toContain("MyEntity");
  });
});

// ---------------------------------------------------------------------------
// CsnRenderer — _renderHtml guards
// ---------------------------------------------------------------------------
describe("CsnRenderer — _renderHtml guards", () => {
  test("_renderHtml with empty string does not update innerHTML", async () => {
    const component = new CsnRenderer() as unknown as {
      _renderHtml: (v: string) => Promise<void>;
      innerHTML: string;
    };
    await component._renderHtml("");
    expect(component.innerHTML).toBe("");
  });

  test("_renderHtml with null does not update innerHTML", async () => {
    const component = new CsnRenderer() as unknown as {
      _renderHtml: (v: string | null) => Promise<void>;
      innerHTML: string;
    };
    await component._renderHtml(null);
    expect(component.innerHTML).toBe("");
  });

  test("_renderHtml with invalid JSON rejects with SyntaxError", async () => {
    const component = new CsnRenderer() as unknown as {
      _renderHtml: (v: string) => Promise<void>;
    };
    await expect(component._renderHtml("not-valid-json{{{")).rejects.toThrow(SyntaxError);
  });
});

// ---------------------------------------------------------------------------
// CsnRenderer — attributeChangedCallback guards
// ---------------------------------------------------------------------------
describe("CsnRenderer — attributeChangedCallback", () => {
  test("setting source to empty string does not trigger render", async () => {
    const component = new CsnRenderer();
    component.setAttribute("source", "");
    await new Promise((r) => setTimeout(r, 20));
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

// ---------------------------------------------------------------------------
// CsnRenderer — lifecycle callbacks
// ---------------------------------------------------------------------------
describe("CsnRenderer — lifecycle callbacks", () => {
  test("connectedCallback does not throw", () => {
    expect(() => new CsnRenderer().connectedCallback()).not.toThrow();
  });

  test("disconnectedCallback does not throw", () => {
    expect(() => new CsnRenderer().disconnectedCallback()).not.toThrow();
  });

  test("adoptedCallback does not throw", () => {
    expect(() => new CsnRenderer().adoptedCallback()).not.toThrow();
  });
});
