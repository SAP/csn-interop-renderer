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
