import axios from "axios";

const options = {
  baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCreditionals: true, // Sends cookies with the request
  timeout: 10000, // If the request takes longer than 10 seconds, it will be aborted
};

const API = axios.create(options);

API.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { data, status } = error.response;
    if (data === "Unauthorized" && status === 401) {
      // Call refresh token
    }
    return Promise.reject({ ...data });
  }
);

export default API;
