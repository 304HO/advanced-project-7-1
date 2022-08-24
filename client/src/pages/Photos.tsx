import { useEffect, useState } from "react";
import "../App.css";
import photosApi from "../apis/api/photos";
import Photo from "../components/Photo";
import { PhotosWrap } from "./Photos.style";
import { useParams } from "react-router-dom";

type Params = {
  albumId: String;
};

function Photos() {
  let { albumId } = useParams();

  const [photos, setPhotos] = useState([]);
  console.log(albumId);

  const getPhotosList = async () => {
    try {
      const res = await photosApi.getAllPhotos(3);
      setPhotos(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPhotosList();
  }, []);

  return (
    <div>
      <div>{params}</div>
      <PhotosWrap>
        {photos.map((data: any, idx) => {
          return <Photo key={idx} props={data} />;
        })}
      </PhotosWrap>
    </div>
  );
}

export default Photos;
