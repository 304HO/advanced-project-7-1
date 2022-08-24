import styled from "styled-components";

export const PhotoContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  padding-top: 3vw;
`;

export const PhotosWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, 200px);
`;
