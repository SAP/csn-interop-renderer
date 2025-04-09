interface AnnotationLinkCallback {
  /** Callback function to offer the possibility to provide a custom link transformer for a specific annotation key
      Usage e.g. :

      {
        annotationLinkCallbacks: [
          {
            "@EndUserText.label": (_annotationValue: unknown): string => {
              return "https://example.com/";
            },
          },
        ],
      }

   */
  [annotationKey: string]: ((annotationValue: unknown) => Promise<string>) | ((annotationValue: unknown) => string);
}

interface CsnRendererConfig {
  annotationLinkCallbacks?: AnnotationLinkCallback[];
}

export { CsnRendererConfig, AnnotationLinkCallback };
