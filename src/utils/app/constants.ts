export const LANGUAGE_VERSIONS = {
  javascript: "18.15.0 ",
  typescript: "5.0.3",
  python: "3.10.0",
  java: "15.0.2",
  cpp: "14",
  csharp: "6.12.0",
};

export type Language = keyof typeof LANGUAGE_VERSIONS;
