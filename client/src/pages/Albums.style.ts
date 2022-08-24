import styled from "styled-components";

export const Items = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

export const ContentTitle = styled.div`
  /* border: 1px solid green; */
  width: 132px;
  text-align: center;
  font-size: 1vw;
  display: flex;
  justify-content: center;
  word-break: break-all;
`;

export const MainContainer = styled.div`
  /* border: 1px solid red; */
  max-width: 2000px;
  margin: 0 auto;
  padding: 3vw;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2vw;
`;
