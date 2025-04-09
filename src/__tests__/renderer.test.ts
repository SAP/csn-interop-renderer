import { renderer } from "../renderer.js";
import example from "../../examples/CSNInterop.js";

describe("Renderer Tests", () => {
  test("generates markdown output from example file", async () => {
    const result = await renderer(example);

    expect(result).toMatchSnapshot();
  });
});
