export const getProblemsFacedBoxDelay = (index: number, baseDelay = 1) => {
  return baseDelay + index * 0.5;
};
