export interface CsnDefinition {
  kind?: string;
  doc?: string;
  elements?: Record<string, unknown>;
  [key: string]: unknown;
}

export interface CsnDocument {
  definitions?: Record<string, CsnDefinition>;
}

export interface ExampleDocument {
  id: string;
  name: string;
  data: object;
}
