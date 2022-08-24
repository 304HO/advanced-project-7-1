import { useEffect, useState } from "react";
import "../App.css";
import photosApi from "../apis/api/photos";
import Photo from "../components/Photo";
import { PhotoContainer, PhotosWrap } from "./Photos.style";
import { useParams } from "react-router-dom";

function Photos() {
  let { id } = useParams();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const getPhotosList = async () => {
      try {
        const res = await photosApi.getAllPhotos(id);
        setPhotos(res);
      } catch (err) {
        console.log(err);
      }
    };
    getPhotosList();
  }, [id]);

  return (
    <PhotoContainer>
      <PhotosWrap>
        {photos.map((data: any, idx) => {
          return <Photo key={idx} props={data} />;
        })}
      </PhotosWrap>
    </PhotoContainer>
  );
}

export default Photos;
