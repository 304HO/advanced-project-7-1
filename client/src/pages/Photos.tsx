import { useEffect, useState } from "react";
import "../App.css";
import photosApi from "../apis/api/photos";
import Photo from "../components/Photo";
import { PhotoContainer, PhotosWrap } from "./Photos.style";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import Modal from "../components/Modal";

type PhotoType = {
  albumId: string;
  id: number;
  title: string;
  thumbnailUrl: string;
  url: string;
};

function Photos() {
  let { id } = useParams();
  const [photos, setPhotos] = useState<Array<PhotoType> | null>(null);
  const [url, setUrl] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const modalhandler = (url: string) => {
    console.log("check");
    setUrl(url);
    setIsOpen((prev) => !prev);
  };

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
    <>
      <PhotoContainer>
        <PhotosWrap>
          {photos.map((data: PhotoType, idx) => {
            return <Photo key={idx} modalhandler={modalhandler} {...data} />;
          })}
        </PhotosWrap>
      </PhotoContainer>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        {<img src={url} alt={url} />}
      </Modal>
    </>
  );
}

export default Photos;
