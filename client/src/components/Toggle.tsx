import React from "react";
import "../App.css";
import styled, { keyframes, useTheme } from "styled-components";
import { ThemeType } from "../types/theme";

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  position: fixed;
  right: 2em;
  height: 2em;
  width: 4em;
  padding: 0;
  border: 0px black solid;
  border-radius: 1em;
  background: ${(props) => (props.theme.id === "light" ? "white" : "gray")};
  transition-duration: 0.8s;
  box-shadow: 0 2px 1px rgba(0, 0, 0, 0.09), 0 4px 2px rgba(0, 0, 0, 0.09), 0 8px 4px rgba(0, 0, 0, 0.09), 0 16px 8px rgba(0, 0, 0, 0.09),
    0 32px 16px rgba(0, 0, 0, 0.09);
`;

const StyledToggle = styled.div`
  transform: translate(${(props) => (props.theme.id === "light" ? "-0.1em" : "2em")});
  transition-duration: 0.8s;
  animation-timing-funciton: ease-in-out;
  display: flex;
  justify-content: start;
  height: 2em;
  width: 2em;
  background: ${(props) => (props.theme.id === "light" ? "black" : "white")};
  border-radius: 100%;
`;

function Toggle() {
  const { setTheme, ...theme }: ThemeType = useTheme();
  const onclickHandler = () => {
    setTheme && setTheme();
  };
  return (
    <StyledButton onClick={onclickHandler}>
      <StyledToggle theme={theme}></StyledToggle>
    </StyledButton>
  );
}

export default Toggle;
