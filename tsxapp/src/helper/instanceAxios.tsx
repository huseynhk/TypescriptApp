import axios, { AxiosError, AxiosInstance } from "axios";

export const instanceAxios: AxiosInstance = axios.create({
  // baseURL: "http://localhost:3000",
 baseURL: "https://blog-api-t6u0.onrender.com",
});

instanceAxios.interceptors.request.use(
  (config) => {
    return config;
  },
  (err: AxiosError) => {
    return Promise.reject(err);
  }
);
