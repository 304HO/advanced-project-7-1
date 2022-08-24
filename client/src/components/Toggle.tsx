import React from "react";
import "../App.css";
import styled, { useTheme } from "styled-components";
import { ThemeType } from "../types/theme";

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  position: fixed;
  right: 2em;
  top: 1em;
  @media (max-width: 250px) {
    right: 0em;
  }
  height: 1.6em;
  width: 4em;
  padding: 0;
  border-radius: 1em;
  background: ${(props) => (props.theme.id === "light" ? "white" : "gray")};
  transition-duration: 0.8s;
  border: ${(props) => `1px solid ${props.theme.primaryColor}`};
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
