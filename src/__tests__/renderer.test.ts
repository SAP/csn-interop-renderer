import { renderer } from "../renderer.js";
import example from "../../examples/CSNInterop.js";

describe("Renderer Tests", () => {
  test("generates markdown output from example file", async () => {
    const result = await renderer(example);

    expect(result).toMatchSnapshot();
  });

  test("generates markdown output from example file with annotations links configuration", async () => {
    // prepare data, add annotations
    const cloneExample = { ...example };
    cloneExample.definitions["AirlineService.Airline"]["@EntityRelationship.entityType"] = "myValue1";
    cloneExample.definitions["AirlineService.Airport"]["@Consumption.valueHelpDefinition"] = "myValue2";
    cloneExample.definitions["AirlineService.Countries"]["@EndUserText.quickInfo"] = "quick info here";
    const result = await renderer(cloneExample, {
      annotationLinkCallbacks: [
        {
          // for annotation key "@EntityRelationship.entityType" add link computing logic
          "@EntityRelationship.entityType": (annotationValue: unknown): string => {
            return annotationValue + "Boom";
          },
        },
        {
          // for annotation key "@Consumption.valueHelpDefinition" add link computing logic
          "@Consumption.valueHelpDefinition": (_annotationValue: unknown): string => {
            return "https://example.com/";
          },
        },
        {
          // for non existent csn-interop-spec annotation key "@AnnotationDoesNotExist" add link computing logic
          // this should be ignored and not be processed at all
          "@AnnotationDoesNotExist": (_annotationValue: unknown): string => {
            return "shouldNeverHappen";
          },
        },
      ],
    });
    expect(result).toContain(`@EntityRelationship.entityType: <a href="myValue1Boom" target="_blank">myValue1</a>`);
    expect(result).toContain(
      `@Consumption.valueHelpDefinition: <a href="https://example.com/" target="_blank">myValue2</a>`,
    );
    expect(result).toContain(`@EndUserText.quickInfo: <code>"quick info here"</code>`);
    expect(result).not.toContain(`shouldNeverHappen`);
    expect(result).toMatchSnapshot();
  });
});
