export const CODE_SNIPPETS: Record<
  "javascript" | "typescript" | "python" | "java" | "cpp" | "csharp",
  string
> = {
  javascript: `// Can AlgoMinds improve this?
function sum(a, b) {
\treturn a + b;
}

console.log(sum(3, 5));
`,

  typescript: `// Ask AlgoMinds for improvements
type User = { 
\tid: number; 
\tname: string; 
};

const user: User = { 
\tid: 1, 
\tname: "Alex" 
};

console.log(user);
`,

  python: `# Can AlgoMinds optimize this?
def square(n):
\treturn n * n

print(square(4))
`,

  java: `// What would AlgoMinds suggest?
class Main {
\tpublic static void main(String[] args) {
\t\tSystem.out.println(2 * 5);
\t}
}
`,

  cpp: `// Any improvements, AlgoMinds?
#include <iostream>

int main() {
\tstd::cout << 3 * 3;
\treturn 0;
}
`,

  csharp: `// Can AlgoMinds refactor this?
using System;

class Program {
\tstatic void Main() {
\t\tConsole.WriteLine(10 / 2);
\t}
}
`,
};

export const emojiOptions = ["😀", "😂", "🙏", "🔥", "💩"];
