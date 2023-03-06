import axios from "axios";
import { BASE_URL } from "../constants/constants";

export function axiosInterceptor() {
  axios.defaults.baseURL = BASE_URL
  axios.interceptors.request.use((request) => {
    return request;
  });
}
