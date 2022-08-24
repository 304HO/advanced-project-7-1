import React, { memo } from "react";
import { Title } from "./Photo.style";

type PhotoPropsType = {
  title: string;
  thumbnailUrl: string;
  url: string;
  modalhandler: (url: string) => void;
};

const Photo = ({ title, thumbnailUrl, url, modalhandler }: PhotoPropsType) => {
  return (
    <div onClick={() => modalhandler(url)}>
      <img src={thumbnailUrl} alt="err" />
      <Title>{title}</Title>
    </div>
  );
};

export default memo(Photo);
