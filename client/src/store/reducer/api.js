import axios from "axios";
export const api = axios.create({
  // baseURL: `http://localhost:7707/api`,
  baseURL: `/api`,
});
// export const host = "http://localhost:7707";
export const host = "/";

