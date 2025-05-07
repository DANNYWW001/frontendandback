import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://backend-isgone.onrender.com/goals",
});
