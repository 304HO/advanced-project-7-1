import React from "react";
import albumsApi from "../../apis/api/albums";

function useApiHook() {
  const [data, setData] = React.useState<any | null>(null);
  React.useEffect(() => {
    const api = async () => {
      setData(await albumsApi.getAllAlbums());
    };
    api();
  }, []);
  return [data, setData];
}

export default useApiHook;
