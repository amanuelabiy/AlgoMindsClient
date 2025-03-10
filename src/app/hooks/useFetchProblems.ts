import { getAllProblemsQueryFn } from "@/lib/problems/api";
import { useQuery } from "@tanstack/react-query";

const useFetchProblems = () => {
  const query = useQuery({
    queryKey: ["problems"],
    queryFn: getAllProblemsQueryFn,
    staleTime: Infinity,
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return query;
};

export default useFetchProblems;
