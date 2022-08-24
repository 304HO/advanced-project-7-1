import { useEffect, useState } from "react";
import "../App.css";
import albumsApi from "../apis/api/albums";
import { MainContainer, ContentTitle, Items } from "./Albums.style";
import { FcFolder } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

type AlbumsType = {
  id: number;
  title: string;
};

function Albums() {
  const [albums, setAlbums] = useState<Array<AlbumsType> | null>(null);
  const navigator = useNavigate();

  const getAlbumsList = async () => {
    try {
      const res = await albumsApi.getAllAlbums();
      setAlbums(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAlbumsList();
  }, []);

  const detailHandler = (id: number) => {
    navigator(`/photos/${id}`);
  };

  if (albums === null) {
    return <Loading></Loading>;
  }

  return (
    <MainContainer>
      {albums &&
        albums.map((el: AlbumsType) => {
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
