import axios from "axios";

export const axiosClient = axios.create({
  baseURL: import.meta.env.REACT_APP_URL_API,
  headers: {
    "Content-Type": "application/json",
  },
});
