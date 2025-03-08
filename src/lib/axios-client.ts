import axios from "axios";
import { jwtDecode } from "jwt-decode";
import queryClient from "./queryClient";

const options = {
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: true, // Sends cookies with the request
  timeout: 10000, // If the request takes longer than 10 seconds, it will be aborted
};

const API = axios.create(options);
export const APIRefresh = axios.create(options);
APIRefresh.interceptors.response.use((response) => response);

const isTokenExpired = (token: string | undefined | null): boolean => {
  if (!token) return true; // If no token exists, consider it expired
  try {
    const decoded: { exp: number } = jwtDecode(token);
    return decoded.exp * 1000 < Date.now(); // Convert exp to milliseconds
  } catch (error) {
    return true; // If decoding fails, consider the token expired
  }
};

API.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const { data, status } = error.response;
    console.log(data, "data");
    if (data.errorCode === "AUTH_TOKEN_NOT_FOUND" && status === 401) {
      try {
        await APIRefresh.get("/auth/refresh");

        return APIRefresh(error.config);
      } catch (error) {
        queryClient.clear();
      }
    }
    return Promise.reject({
      ...data,
    });
  }
);

export { isTokenExpired };
export default API;
