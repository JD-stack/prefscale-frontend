import axios from "axios";

const api = axios.create({
  baseURL: "https://prefscale-backend.onrender.com", // YOUR backend URL
});

// ✅ Attach token automatically
api.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default api;
