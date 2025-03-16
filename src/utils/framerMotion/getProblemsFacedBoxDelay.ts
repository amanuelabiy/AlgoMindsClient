export const getProblemsFacedBoxDelay = (index: number, baseDelay = 1.4) => {
  return baseDelay + index * 0.5;
};
