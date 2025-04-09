/**
 * @jest-environment jsdom
 */

import example from "../../examples/CSNInterop.js";
import { generateMarkdown } from "../index.js";

describe("Index Tests", () => {
  describe("generateMarkdown Tests", () => {
    describe("config Tests", () => {
      test("should generate successfully with custom links for defined annotations", async () => {
        // prepare data, add annotations
        const cloneExample = { ...example };
        cloneExample.definitions["AirlineService.Airline"]["@EntityRelationship.entityType"] = "myValue1";
        cloneExample.definitions["AirlineService.Airline"]["@Consumption.valueHelpDefinition"] = [
          { entity: { name: "myValue2" } },
        ];
        cloneExample.definitions["AirlineService.Airport"]["@Consumption.valueHelpDefinition"] = [
          { entity: { name: "myValue3" } },
        ];
        cloneExample.definitions["AirlineService.Airport"]["@EndUserText.label"] = "myValue4";
        cloneExample.definitions["AirlineService.Countries"]["@EndUserText.quickInfo"] = "quick info here";

        const delay = (ms: number): Promise<unknown> => new Promise((res) => setTimeout(res, ms));

        const result = await generateMarkdown(cloneExample, {
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
              // for annotation key "@EndUserText.label" add async link computing logic
              "@EndUserText.label": async (_annotationValue: unknown): Promise<string> => {
                await delay(100);
                return "https://google.com/";
              },
            },
          ],
        });

        expect(result).toContain(
          `@EntityRelationship.entityType: <a href="myValue1Boom" target="_blank"><code>"myValue1"</code></a>`,
        );
        expect(result).toContain(
          `@Consumption.valueHelpDefinition: <a href="https://example.com/" target="_blank"><code>[&lbrace;"entity":&lbrace;"name":"myValue2"&rbrace;&rbrace;]</code></a>`,
        );
        expect(result).toContain(
          `@Consumption.valueHelpDefinition: <a href="https://example.com/" target="_blank"><code>[&lbrace;"entity":&lbrace;"name":"myValue3"&rbrace;&rbrace;]</code></a>`,
        );
        expect(result).toContain(
          `@EndUserText.label: <a href="[object Promise]" target="_blank"><code>"myValue4"</code></a>`,
        );
        expect(result).toContain(`@EndUserText.quickInfo: <code>"quick info here"</code>`);
        expect(result).toMatchSnapshot();
      });

      test("should generate successfully and skip custom links for unknown annotations", async () => {
        // prepare data
        const cloneExample = { ...example };
        const result = await generateMarkdown(cloneExample, {
          annotationLinkCallbacks: [
            {
              // for non existent csn-interop-spec annotation key "@AnnotationDoesNotExist" add link computing logic
              // this should be ignored and not be processed at all
              "@AnnotationDoesNotExist": (_annotationValue: unknown): string => {
                return "shouldNeverHappen";
              },
            },
          ],
        });
        expect(result).not.toContain(`shouldNeverHappen`);
        expect(result).toMatchSnapshot();
      });
    });
  });

  describe("generateHtml Tests", () => {
    describe("config Tests", () => {
      test("should generate successfully with custom links for defined annotations", async () => {
        // prepare data, add annotations
        const cloneExample = { ...example };
        cloneExample.definitions["AirlineService.Airline"]["@EntityRelationship.entityType"] = "myValue1";
        cloneExample.definitions["AirlineService.Airline"]["@Consumption.valueHelpDefinition"] = [
          { entity: { name: "myValue2" } },
        ];
        cloneExample.definitions["AirlineService.Airport"]["@Consumption.valueHelpDefinition"] = [
          { entity: { name: "myValue3" } },
        ];
        cloneExample.definitions["AirlineService.Airport"]["@EndUserText.label"] = "myValue4";
        cloneExample.definitions["AirlineService.Countries"]["@EndUserText.quickInfo"] = "quick info here";

        const delay = (ms: number): Promise<unknown> => new Promise((res) => setTimeout(res, ms));

        const result = await generateMarkdown(cloneExample, {
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
              // for annotation key "@EndUserText.label" add async link computing logic
              "@EndUserText.label": async (_annotationValue: unknown): Promise<string> => {
                await delay(100);
                return "https://google.com/";
              },
            },
          ],
        });

        expect(result).toContain(
          `@EntityRelationship.entityType: <a href="myValue1Boom" target="_blank"><code>"myValue1"</code></a>`,
        );
        expect(result).toContain(
          `@Consumption.valueHelpDefinition: <a href="https://example.com/" target="_blank"><code>[&lbrace;"entity":&lbrace;"name":"myValue2"&rbrace;&rbrace;]</code></a>`,
        );
        expect(result).toContain(
          `@Consumption.valueHelpDefinition: <a href="https://example.com/" target="_blank"><code>[&lbrace;"entity":&lbrace;"name":"myValue3"&rbrace;&rbrace;]</code></a>`,
        );
        expect(result).toContain(
          `@EndUserText.label: <a href="[object Promise]" target="_blank"><code>"myValue4"</code></a>`,
        );
        expect(result).toContain(`@EndUserText.quickInfo: <code>"quick info here"</code>`);
        expect(result).toMatchSnapshot();
      });

      test("should generate successfully and skip custom links for unknown annotations", async () => {
        // prepare data
        const cloneExample = { ...example };
        const result = await generateMarkdown(cloneExample, {
          annotationLinkCallbacks: [
            {
              // for non existent csn-interop-spec annotation key "@AnnotationDoesNotExist" add link computing logic
              // this should be ignored and not be processed at all
              "@AnnotationDoesNotExist": (_annotationValue: unknown): string => {
                return "shouldNeverHappen";
              },
            },
          ],
        });
        expect(result).not.toContain(`shouldNeverHappen`);
        expect(result).toMatchSnapshot();
      });
    });
  });
});
