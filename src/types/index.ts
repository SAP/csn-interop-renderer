type LinkCallbackFunction = ((annotationValue: unknown) => Promise<string>) | ((annotationValue: unknown) => string);
interface AnnotationLinkCallbacks<T = LinkCallbackFunction> {
  /** Callback function to offer the possibility to provide a custom link transformer for a specific annotation key
      Usage e.g. :

      {
        annotationLinkCallbacks: {
          {
            "@EndUserText.label": (_annotationValue: unknown): string => {
              return "https://example.com/";
            },
          },
        },
      }

   */
  [annotationKey: string]: T;
}

interface CsnRendererConfig {
  annotationLinkCallbacks?: AnnotationLinkCallbacks;
}

export { CsnRendererConfig, AnnotationLinkCallbacks, LinkCallbackFunction };
