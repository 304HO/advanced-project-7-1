import React from "react";
import albumsApi from "../apis/api/albums";
import "../App.css";
import Loading from "../components/Loading";

type AlbumsType = {
  userId: number;
  id: number;
  title: string;
};

function TestErrorPage() {
  const [state, setState] = React.useState<Array<AlbumsType> | null>(null);
  React.useEffect(() => {
    const setAlbums = async () => {
      const albums = await albumsApi.getAllAlbums();
      setState(albums);
    };
    setAlbums();
  }, []);

  if (state === null) {
    return <Loading></Loading>;
  }

  return (
    <div>
      {state?.slice(0, 2).map(({ userId, id, title }: AlbumsType) => {
        return <div>{title}</div>;
      })}
    </div>
  );
}

export default TestErrorPage;
