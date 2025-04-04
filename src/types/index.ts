interface AnnotationLinkCallback {
  /** Callback function to offer the the possibility to provide a custom link for a specific annotation key */
  [annotationKey: string]: (annotationValue: unknown) => string;
}

interface CsnInteropRendererConfig {
  annotationLinkCallbacks?: AnnotationLinkCallback[];
}

export { CsnInteropRendererConfig, AnnotationLinkCallback };
