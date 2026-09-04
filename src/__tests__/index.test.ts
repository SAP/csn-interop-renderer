import example from "../../examples/CSNInterop.js";
import { generateMarkdown, generateHtml } from "../index.js";

describe("Index Tests", () => {
  describe("generateMarkdown Tests", () => {
    test("generates markdown containing all structural sections from example", async () => {
      const markdownResult = await generateMarkdown(example);
      expect(markdownResult).toContain("## Entity Definitions");
      expect(markdownResult).toContain("## Type Definitions");
      expect(markdownResult).toContain("## Services");
      expect(markdownResult).toContain("### AirlineService.Airline");
    });

    test("annotation link callback produces anchor link in markdown output", async () => {
      const cloneExample = { ...example };
      cloneExample.definitions["AirlineService.Airline"]["@EntityRelationship.entityType"] = "my.namespace:Value";
      cloneExample.definitions["AirlineService.Airline"]["@Consumption.valueHelpDefinition"] = [
        { entity: { name: "myValue2" } },
      ];
      cloneExample.definitions["AirlineService.Airport"]["@Consumption.valueHelpDefinition"] = [
        { entity: { name: "myValue3" } },
      ];
      cloneExample.definitions["AirlineService.Airport"]["@EndUserText.label"] = "myValue4";
      cloneExample.definitions["AirlineService.Airport"]["@ObjectModel.compositionRoot"] = true;
      cloneExample.definitions["AirlineService.Countries"]["@EndUserText.quickInfo"] = "quick info here";

      const delay = async (ms: number): Promise<unknown> => new Promise((res) => setTimeout(res, ms));

      const result = await generateMarkdown(cloneExample, {
        annotationLinkCallbacks: {
          "@EntityRelationship.entityType": (annotationValue: unknown): string => {
            return annotationValue + "Boom";
          },
          "@Consumption.valueHelpDefinition": (_annotationValue: unknown): string => {
            return "https://example.com/";
          },
          "@EndUserText.label": async (_annotationValue: unknown): Promise<string> => {
            await delay(100);
            return "https://google.com/";
          },
          // eslint-disable-next-line @typescript-eslint/promise-function-async
          "@ObjectModel.compositionRoot": (_annotationValue: unknown): Promise<string> => {
            return new Promise<string>((resolve) => {
              setTimeout(() => resolve("https://example.org/"), 100);
            });
          },
        },
      });

      expect(result).toContain(
        `@EntityRelationship.entityType: <a href="my.namespace:ValueBoom" target="_blank"><code>"my.namespace:Value"</code></a>`,
      );
      expect(result).toContain(
        `@Consumption.valueHelpDefinition: <a href="https://example.com/" target="_blank"><code>[&lbrace;"entity":&lbrace;"name":"myValue2"&rbrace;&rbrace;]</code></a>`,
      );
      expect(result).toContain(
        `@Consumption.valueHelpDefinition: <a href="https://example.com/" target="_blank"><code>[&lbrace;"entity":&lbrace;"name":"myValue3"&rbrace;&rbrace;]</code></a>`,
      );
      expect(result).toContain(
        `@EndUserText.label: <a href="https://google.com/" target="_blank"><code>"myValue4"</code></a>`,
      );
      expect(result).toContain(
        `@ObjectModel.compositionRoot: <a href="https://example.org/" target="_blank"><code>true</code></a>`,
      );
      expect(result).toContain(`@EndUserText.quickInfo: <code>"quick info here"</code>`);
      // Output is still Markdown (no HTML heading tags)
      expect(result).not.toMatch(/<h[1-6]/);
      expect(result).toMatchSnapshot();
    });

    test("unknown annotation callback is not applied", async () => {
      const cloneExample = { ...example };
      const result = await generateMarkdown(cloneExample, {
        annotationLinkCallbacks: {
          "@AnnotationDoesNotExist": (_annotationValue: unknown): string => {
            return "shouldNeverHappen";
          },
        },
      });
      expect(result).not.toContain("shouldNeverHappen");
      expect(result).toMatchSnapshot();
    });
  });

  describe("generateHtml Tests", () => {
    test("generates HTML containing heading tags from example", async () => {
      const result = await generateHtml(example);
      expect(result).toMatch(/<h[1-6]/);
      expect(result).toContain("AirlineService.Airline");
    });

    test("annotation link callback produces anchor link in HTML output", async () => {
      const cloneExample = { ...example };
      cloneExample.definitions["AirlineService.Airline"]["@EntityRelationship.entityType"] = "my.namespace:Value";
      cloneExample.definitions["AirlineService.Airline"]["@Consumption.valueHelpDefinition"] = [
        { entity: { name: "myValue2" } },
      ];
      cloneExample.definitions["AirlineService.Airport"]["@EndUserText.label"] = "myValue4";

      const delay = async (ms: number): Promise<unknown> => new Promise((res) => setTimeout(res, ms));
      const result = await generateHtml(cloneExample, {
        annotationLinkCallbacks: {
          "@EntityRelationship.entityType": (annotationValue: unknown): string => {
            return annotationValue + "Boom";
          },
          "@Consumption.valueHelpDefinition": (_annotationValue: unknown): string => {
            return "https://example.com/";
          },
          "@EndUserText.label": async (_annotationValue: unknown): Promise<string> => {
            await delay(100);
            return "https://google.com/";
          },
        },
      });

      expect(result).toMatch(/<h[1-6]/);
      expect(result).toContain('<a href="my.namespace:ValueBoom"');
      expect(result).toContain('<a href="https://example.com/"');
      expect(result).toContain('<a href="https://google.com/"');
      // Output is HTML (no bare ## Markdown headings)
      expect(result).not.toMatch(/^## /m);
    });

    test("unknown annotation callback is not applied", async () => {
      const cloneExample = { ...example };
      const result = await generateHtml(cloneExample, {
        annotationLinkCallbacks: {
          "@AnnotationDoesNotExist": (_annotationValue: unknown): string => {
            return "shouldNeverHappen";
          },
        },
      });
      expect(result).not.toContain("shouldNeverHappen");
      expect(result).toMatch(/<h[1-6]/);
    });

    test("should generate successfully and skip custom links for unknown annotations", async () => {
      // prepare data
      const cloneExample = { ...example };
      const result = await generateMarkdown(cloneExample, {
        annotationLinkCallbacks: {
          // for non-existent csn-interop-spec annotation key "@AnnotationDoesNotExist" add link computing logic
          // this should be ignored and not be processed at all
          "@AnnotationDoesNotExist": (_annotationValue: unknown): string => {
            return "shouldNeverHappen";
          },
        },
      });
      expect(result).not.toContain(`shouldNeverHappen`);
      expect(result).toMatchSnapshot();
    });
  });
});
