import { getProblemsPagination } from "@/lib/problems/api";
import { useQuery } from "@tanstack/react-query";

const useFetchProblems = (page: number, perPage: number) => {
  const query = useQuery({
    queryKey: ["problems", page, perPage],
    queryFn: getProblemsPagination,
    staleTime: Infinity,
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    placeholderData: (previousData) => previousData,
  });

  return query;
};

export default useFetchProblems;
