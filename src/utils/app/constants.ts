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
  javascript: `\n// Need help optimizing this function?\nfunction fibonacci(n) {\n\tif (n <= 1) return n;\n\treturn fibonacci(n - 1) + fibonacci(n - 2);\n}\n\nconsole.log(fibonacci(10));\n// Ask AlgoAI how to make this more efficient!\n`,

  typescript: `\n// Can AlgoAI refactor this better?\ntype User = {\n\tid: number;\n\tname: string;\n\temail?: string;\n};\n\nconst getUser = (id: number): User => {\n\treturn { id, name: "John Doe", email: "john@example.com" };\n};\n\nconsole.log(getUser(1));\n// Try asking AlgoAI for improvements!\n`,

  python: `\n# Can AlgoAI suggest a faster way?\ndef is_prime(n):\n\tif n < 2:\n\t\treturn False\n\tfor i in range(2, int(n ** 0.5) + 1):\n\t\tif n % i == 0:\n\t\t\treturn False\n\treturn True\n\nprint(is_prime(29))\n# Ask AlgoAI for an optimized approach!\n`,

  java: `\n// Can AlgoAI help simplify this?\npublic class AlgoAIExample {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println(reverseString("AlgoAI"));\n\t}\n\n\tstatic String reverseString(String str) {\n\t\treturn new StringBuilder(str).reverse().toString();\n\t}\n}\n// Try asking AlgoAI how to improve this!\n`,

  cpp: `\n// Can AlgoAI suggest a more efficient sort?\n#include <iostream>\n#include <vector>\n#include <algorithm>\n\nvoid bubbleSort(std::vector<int>& arr) {\n\tfor (size_t i = 0; i < arr.size(); i++) {\n\t\tfor (size_t j = 0; j < arr.size() - i - 1; j++) {\n\t\t\tif (arr[j] > arr[j + 1]) {\n\t\t\t\tstd::swap(arr[j], arr[j + 1]);\n\t\t\t}\n\t\t}\n\t}\n}\n\nint main() {\n\tstd::vector<int> nums = {5, 3, 8, 1, 2};\n\tbubbleSort(nums);\n\tfor (int num : nums) std::cout << num << " ";\n\treturn 0;\n}\n// Ask AlgoAI for a faster sorting algorithm!\n`,

  csharp: `\n// What would AlgoAI recommend here?\nusing System;\n\nclass Program {\n\tstatic int Factorial(int n) {\n\t\treturn (n == 1) ? 1 : n * Factorial(n - 1);\n\t}\n\n\tstatic void Main() {\n\t\tConsole.WriteLine(Factorial(5));\n\t}\n}\n// Try asking AlgoAI for a more memory-efficient way!\n`,
};

export type Language = keyof typeof LANGUAGE_VERSIONS;
