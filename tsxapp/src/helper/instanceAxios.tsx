import axios, { AxiosError, AxiosInstance } from "axios";

export const instanceAxios: AxiosInstance = axios.create({
  // baseURL: "https://blog-api-t6u0.onrender.com",
  baseURL: "http://localhost:3000",
});

instanceAxios.interceptors.request.use(
  (config) => {
    return config;
  },
  (err: AxiosError) => {
    return Promise.reject(err);
  }
);
