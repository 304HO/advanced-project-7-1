import React, { useEffect } from "react";
import "../App.css";
import styled, { keyframes } from "styled-components";
import lightLogo from "./../assets/images/codestates-white.png";
import Toggle from "./Toggle";

const lodingAnimation = keyframes`
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

const StyledDivCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledLoader = styled.div`
  background: ${(props) => props.theme.background};
  width: 100px;
  height: 100px;
  font-size: 0.2em;
  border-top: 1.1em solid rgba(255, 255, 255, 0.2);
  border-right: 1.1em solid rgba(255, 255, 255, 0.2);
  border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
  border-left: 1.1em solid black;
  transform: translateZ(0);
  -webkit-animation: ${lodingAnimation} 1s infinite linear;
  animation: ${lodingAnimation} 1s infinite linear;
  &,
  & :after {
    border-radius: 50%;
    width: 10em;
    height: 10em;
  }
`;

const StyledLoadingFont = styled.span``;

function Loading() {
  const [loadingPoing, setLoadingPoint] = React.useState<string>(".");
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingPoint((prev) => {
        console.log(prev.length);
        return ".".repeat((prev.length + 1) % 4);
      });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <StyledDivCenter>
      <StyledLoader></StyledLoader>
      <StyledLoadingFont>Loading{loadingPoing}</StyledLoadingFont>
    </StyledDivCenter>
  );
}

export default Loading;
