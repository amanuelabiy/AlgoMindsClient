export const getDifficultyColor = (item: string) => {
  switch (item) {
    case "Easy":
      return "text-green-500";
    case "Medium":
      return "text-yellow-500";
    case "Hard":
      return "text-red-500";
    default:
      return "";
  }
};
