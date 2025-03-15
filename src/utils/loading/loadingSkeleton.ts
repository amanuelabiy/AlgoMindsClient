import LandingSkeleton from "@/components/loadingStates/Landing/LandingSkeleton";
import ProblemSkeleton from "@/components/loadingStates/Problems/ProblemSkeleton";

export const loadingSkeletons: Record<string, React.FC> = {
  "/problems": ProblemSkeleton,
  "/": LandingSkeleton,
};
