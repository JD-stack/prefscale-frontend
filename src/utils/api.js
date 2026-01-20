import axios from "axios";

const api = axios.create({
  baseURL: "https://prefscale-backend.onrender.com",
});

export default api;
