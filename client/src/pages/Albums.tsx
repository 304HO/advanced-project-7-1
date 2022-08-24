import { useEffect, useState } from "react";
import "../App.css";
import albumsApi from "../apis/api/albums";
import { MainContainer, ContentTitle, Items } from "./Albums.style";
import { FcFolder } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

function Albums() {
  const [albums, setAlbums] = useState([]);
  const navigator = useNavigate();

  const getAlbumsList = async () => {
    try {
      const res = await albumsApi.getAllAlbums();
      setAlbums(res);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAlbumsList();
  }, []);

  const detailHandler = (id: number) => {
    navigator(`/albums/${id}`);
  };

  return (
    <MainContainer>
      {albums.map((el) => {
        return (
          <Items key={el["id"]} onClick={() => detailHandler(el["id"])}>
            <FcFolder size="132px" />
            <ContentTitle>{el["title"]}</ContentTitle>
          </Items>
        );
      })}
    </MainContainer>
  );
}

export default Albums;
