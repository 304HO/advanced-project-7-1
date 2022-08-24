import { useEffect, useState } from "react";
import "../App.css";
import photosApi from "../apis/api/photos";
import Photo from "../components/Photo";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const PhotosWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
`;

function Photos() {
  let { params } = useParams();
  const [photos, setPhotos] = useState([]);

  console.log(params);

  const getPhotosList = async () => {
    const res = await photosApi.getAllPhotos();
    setPhotos(res);
  };

  useEffect(() => {
    getPhotosList();
  }, []);

  return (
    <div>
      <div>{params}</div>
      <PhotosWrap>
        {photos.map((data: any, idx) => {
          console.log(data);
          return <Photo key={idx} props={data} />;
        })}
      </PhotosWrap>
    </div>
  );
}

export default Photos;
