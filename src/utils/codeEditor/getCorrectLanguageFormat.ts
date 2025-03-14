export const getCorrectLanguageFormat = (language: string) => {
  switch (language) {
    case "cpp":
      return "C++";
    case "java":
      return "Java";
    case "typescript":
      return "TypeScript";
    case "javascript":
      return "JavaScript";
    case "python":
      return "Python";
    case "csharp":
      return "C#";
    default:
      return "";
  }
};
