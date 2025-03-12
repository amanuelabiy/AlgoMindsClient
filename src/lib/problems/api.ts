import API from "../axios-client";

interface ProblemsPagination {
  queryKey: [string, number, number];
}

export const getProblemsPagination = async ({
  queryKey,
}: ProblemsPagination) => {
  const [_, page, perPage] = queryKey;
  return API.get(`/problems/pagination?perPage=${perPage}&page=${page}`);
};

export const getProblemsQueryFn = async ({ pageParam = 0 }) =>
  API.get(`/problems?cursor=${pageParam}`);

export const getAllProblemsQueryFn = async () => API.get("/problems/getAll");
