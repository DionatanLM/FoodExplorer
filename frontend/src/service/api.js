import axios from "axios";

export const api = axios.create({
  baseURL: "https://foodexplorer-api-rd91.onrender.com",
});
