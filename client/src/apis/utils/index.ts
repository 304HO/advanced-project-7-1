import axios from "axios";

const axiosApi = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  withCredentials: true
});

export default axiosApi;
