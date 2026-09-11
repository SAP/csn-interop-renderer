export type LinkCallbackFunction = (annotationValue: unknown) => string | Promise<string>;

export interface AnnotationLinkCallbacks {
  /**
   * Maps an annotation key to a callback that supplies a custom link.
   *
   * ```ts
   * annotationLinkCallbacks: {
   *   "@EndUserText.label": (_annotationValue: unknown): string => "https://example.com/",
   * }
   * ```
   */
  [annotationKey: string]: LinkCallbackFunction;
}

export interface CsnRendererConfig {
  annotationLinkCallbacks?: AnnotationLinkCallbacks;
}

export interface CsnRendererProps {
  /** @param source A valid text (containing JSON CSNInteropEffectiveDocument object).*/
  source: string;
}
