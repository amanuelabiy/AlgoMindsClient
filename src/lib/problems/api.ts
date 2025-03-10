import API from "../axios-client";

export const getProblemsQueryFn = async ({ pageParam = 0 }) =>
  API.get(`/problems?cursor=${pageParam}`);

export const getAllProblemsQueryFn = async () => API.get("/problems/getAll");
