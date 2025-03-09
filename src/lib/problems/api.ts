import API from "../axios-client";

export const getProblemsQueryFn = async () => API.get("/problems/");
