import axios from "axios";

const axiosApi = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com123",
  withCredentials: true
});

axiosApi.interceptors.request.use(
  function (config) {
    console.log("before", config);
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

axiosApi.interceptors.response.use(
  function (response) {
    console.log("response", response);
    return response;
  },
  function (error) {
    window.location.href = "/404";
    console.log("navigate after");
    return Promise.reject(error);
  }
);

export default axiosApi;
