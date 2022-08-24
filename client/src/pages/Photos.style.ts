import styled from "styled-components";

export const PhotosWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
`;
