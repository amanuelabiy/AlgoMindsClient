export const getProblemsFacedBoxDelay = (index: number, baseDelay = 1.4) => {
  if (index === 0) {
    return baseDelay + 0.2;
  }
  return baseDelay + index * 0.5;
};
