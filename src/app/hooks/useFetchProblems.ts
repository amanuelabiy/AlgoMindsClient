import { getProblemsQueryFn } from "@/lib/problems/api";
import { useInfiniteQuery } from "@tanstack/react-query";

const useFetchProblems = () => {
  const query = useInfiniteQuery({
    queryKey: ["problems"],
    queryFn: getProblemsQueryFn,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.data.nextCursor || null, // Set next cursor
  });

  return query;
};

export default useFetchProblems;
