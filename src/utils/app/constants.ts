export const LANGUAGE_VERSIONS = {
  javascript: "18.15.0 ",
  typescript: "5.0.3",
  python: "3.10.0",
  java: "15.0.2",
  cpp: "14",
  csharp: "6.12.0",
};

export const CODE_SNIPPETS: Record<
  "javascript" | "typescript" | "python" | "java" | "cpp" | "csharp",
  string
> = {
  javascript: `// Can AlgoAI improve this?\nfunction sum(a, b) {\n\treturn a + b;\n}\n\nconsole.log(sum(3, 5));\n`,

  typescript: `// Ask AlgoAI for improvements\ntype User = { id: number; name: string; };\nconst user: User = { id: 1, name: "Alex" };\nconsole.log(user);\n`,

  python: `# Can AlgoAI optimize this?\ndef square(n):\n\treturn n * n\n\nprint(square(4))\n`,

  java: `// What would AlgoAI suggest?\nclass Main {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println(2 * 5);\n\t}\n}\n`,

  cpp: `// Any improvements, AlgoAI?\n#include <iostream>\nint main() {\n\tstd::cout << 3 * 3;\n\treturn 0;\n}\n`,

  csharp: `// Can AlgoAI refactor this?\nusing System;\nclass Program {\n\tstatic void Main() {\n\t\tConsole.WriteLine(10 / 2);\n\t}\n}\n`,
};

export type Language = keyof typeof LANGUAGE_VERSIONS;
