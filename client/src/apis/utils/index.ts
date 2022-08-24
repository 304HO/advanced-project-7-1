import axios from "axios";

const axiosApi = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com123",
  withCredentials: true
});

axiosApi.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

axiosApi.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    window.location.href = "/404";
    return Promise.reject(error);
  }
);

export default axiosApi;
