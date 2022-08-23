import axiosApi from "../utils";

const albumsApi = {
  getAllAlbums: () => axiosApi.get("/albums").then((res) => res.data)
};

export default albumsApi;
