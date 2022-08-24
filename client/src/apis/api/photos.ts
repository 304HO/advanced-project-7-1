import axiosApi from "../utils";
import { useParams } from "react-router-dom";

let { params } = useParams();

const photosApi = {
  getAllPhotos: () => axiosApi.get(`/photos/:albumId=${params}`).then((res) => res.data)
};

export default photosApi;
