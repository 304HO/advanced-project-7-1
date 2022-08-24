import { Title } from "./Photo.style";

const Photo = (props: any) => {
  const { title, thumbnailUrl } = props.props;

  //? 전체 props.props
  // const { albumId, id, title, url, thumbnailUrl } = props.props;

  return (
    <div>
      <img src={thumbnailUrl} alt="err" />
      <Title>{title}</Title>
    </div>
  );
};

export default Photo;
