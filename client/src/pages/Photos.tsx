import { useEffect, useState } from "react";
import "../App.css";
import photosApi from "../apis/api/photos";
import Photo from "../components/Photo";
import { PhotoContainer, PhotosWrap } from "./Photos.style";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";

type PhotoType = {
  albumId: string;
  id: number;
  title: string;
  thumbnailUrl: string;
};

function Photos() {
  let { id } = useParams();
  const [photos, setPhotos] = useState<Array<PhotoType> | null>(null);

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

  if (photos === null) {
    return <Loading></Loading>;
  }

  return (
    <PhotoContainer>
      <PhotosWrap>
        {photos.map((data: PhotoType, idx) => {
          return <Photo key={idx} props={data} />;
        })}
      </PhotosWrap>
    </PhotoContainer>
  );
}

export default Photos;
