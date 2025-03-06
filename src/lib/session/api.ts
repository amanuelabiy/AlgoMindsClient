import API from "../axios-client";

export const getUserSessionQueryFn = async () => API.get("/session/");
