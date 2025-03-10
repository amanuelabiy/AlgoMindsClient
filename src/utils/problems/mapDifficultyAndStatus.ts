enum Status {
  NOT_ATTEMPTED = "Not Attempted",
  ATTEMPTED = "Attempted",
  SOLVED = "Solved",
}

export const statusMap: Record<
  "ATTEMPTED" | "NOT_ATTEMPTED" | "SOLVED",
  Status
> = {
  NOT_ATTEMPTED: Status.NOT_ATTEMPTED,
  ATTEMPTED: Status.ATTEMPTED,
  SOLVED: Status.SOLVED,
};

enum ProblemDifficulty {
  EASY = "Easy",
  MEDIUM = "Medium",
  HARD = "Hard",
}

export const difficultyMap: Record<
  "EASY" | "MEDIUM" | "HARD",
  ProblemDifficulty
> = {
  EASY: ProblemDifficulty.EASY,
  MEDIUM: ProblemDifficulty.MEDIUM,
  HARD: ProblemDifficulty.HARD,
};
