import type { AnnotationLinkCallbacks } from "@sap/csn-interop-renderer";

export const resolveAnnotationLinks = async (
  properties: Record<string, unknown>,
  callbacks: AnnotationLinkCallbacks | undefined,
): Promise<Record<string, string>> => {
  const entries = await Promise.all(
    Object.entries(properties)
      .filter(([key]) => key.startsWith("@"))
      .map(async ([key, value]) => {
        try {
          const href = await callbacks?.[key]?.(value);
          return href ? ([key, href] as const) : undefined;
        } catch {
          return undefined;
        }
      }),
  );
  return Object.fromEntries(entries.filter((entry) => entry !== undefined));
};
