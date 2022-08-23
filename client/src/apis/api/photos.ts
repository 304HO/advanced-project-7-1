import axiosApi from "../utils";

const photosApi = {
  getAllPhotos: () => axiosApi.get("/photos").then((res) => res.data)
};

export default photosApi;
