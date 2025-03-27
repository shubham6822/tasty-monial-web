import axios from "axios";
import { getCookie, setCookie } from "cookies-next";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Include cookies if using authentication
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    const token = getCookie("token");

    if (token) {
      if (config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 403) {
      console.error("Unauthorized! Redirecting to login...");
      // Redirect to login page
      localStorage.clear();
      setCookie("token", "", { expires: new Date(0) });
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default api;
