import axios from "axios";

const api = axios.create({
  baseURL: "https://prefscale-backend-2egb.onrender.com",
});

export default api;
