import example from "../../examples/CSNInterop.js";
import { jest } from "@jest/globals";
import type { CSNInteropEffectiveDocument } from "@sap/csn-interop-specification";
import { generateMarkdown, generateHtml } from "../index.js";

const createExample = (): typeof example => JSON.parse(JSON.stringify(example)) as typeof example;

describe("public API", () => {
  describe("generateMarkdown", () => {
    test("generates markdown containing all structural sections from example", async () => {
      const markdownResult = await generateMarkdown(example);
      expect(markdownResult).toContain("## Entity Definitions");
      expect(markdownResult).toContain("## Type Definitions");
      expect(markdownResult).toContain("## Services");
      expect(markdownResult).toContain("### AirlineService.Airline");
    });

    test("annotation link callback produces anchor link in markdown output", async () => {
      const cloneExample = createExample();
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

      const result = await generateMarkdown(cloneExample, {
        annotationLinkCallbacks: {
          "@EntityRelationship.entityType": (annotationValue: unknown): string => {
            return annotationValue + "Boom";
          },
          "@Consumption.valueHelpDefinition": (_annotationValue: unknown): string => {
            return "https://example.com/";
          },
          "@EndUserText.label": async (_annotationValue: unknown): Promise<string> => {
            await Promise.resolve();
            return "https://google.com/";
          },
          "@ObjectModel.compositionRoot": async (_annotationValue: unknown): Promise<string> => {
            await Promise.resolve();
            return "https://example.org/";
          },
        },
      });

      expect(result).toMatchSnapshot();
    });

    test("unknown annotation callback is not applied", async () => {
      const cloneExample = createExample();
      const callback = jest.fn(() => "shouldNeverHappen");
      const result = await generateMarkdown(cloneExample, {
        annotationLinkCallbacks: {
          "@AnnotationDoesNotExist": callback,
        },
      });
      expect(callback).not.toHaveBeenCalled();
      expect(result).not.toContain("shouldNeverHappen");
      expect(result).toMatchSnapshot();
    });
  });

  describe("generateHtml", () => {
    test("renders a custom annotation link for a minimal document", async () => {
      const document: CSNInteropEffectiveDocument = {
        csnInteropEffective: "1.0",
        $version: "2.0",
        definitions: {
          AnnotatedEntity: {
            "kind": "entity",
            "@MyAnnotation": "value",
            "elements": { ID: { type: "cds.String" } },
          },
        },
      };

      const result = await generateHtml(document, {
        annotationLinkCallbacks: {
          "@MyAnnotation": (): string => "https://docs.example.com/annotation",
        },
      });

      expect(result).toMatchSnapshot();
    });

    test("generates HTML containing heading tags from example", async () => {
      const result = await generateHtml(example);
      expect(result).toMatch(/<h[1-6]/);
      expect(result).toContain("AirlineService.Airline");
    });

    test("annotation link callback produces anchor link in HTML output", async () => {
      const cloneExample = createExample();
      cloneExample.definitions["AirlineService.Airline"]["@EntityRelationship.entityType"] = "my.namespace:Value";
      cloneExample.definitions["AirlineService.Airline"]["@Consumption.valueHelpDefinition"] = [
        { entity: { name: "myValue2" } },
      ];
      cloneExample.definitions["AirlineService.Airport"]["@EndUserText.label"] = "myValue4";

      const result = await generateHtml(cloneExample, {
        annotationLinkCallbacks: {
          "@EntityRelationship.entityType": (annotationValue: unknown): string => {
            return annotationValue + "Boom";
          },
          "@Consumption.valueHelpDefinition": (_annotationValue: unknown): string => {
            return "https://example.com/";
          },
          "@EndUserText.label": async (_annotationValue: unknown): Promise<string> => {
            await Promise.resolve();
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
      const cloneExample = createExample();
      const callback = jest.fn(() => "shouldNeverHappen");
      const result = await generateHtml(cloneExample, {
        annotationLinkCallbacks: {
          "@AnnotationDoesNotExist": callback,
        },
      });
      expect(callback).not.toHaveBeenCalled();
      expect(result).not.toContain("shouldNeverHappen");
      expect(result).toMatch(/<h[1-6]/);
    });
  });
});
