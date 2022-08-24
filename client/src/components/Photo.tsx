import styled from "styled-components";

const Title = styled.div`
  width: 150px;
  padding: 0 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

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
