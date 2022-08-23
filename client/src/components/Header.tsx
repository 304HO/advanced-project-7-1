import React from "react";
import "../App.css";
import styled from "styled-components";
import lightLogo from "./../assets/images/codestates-white.png";
import Toggle from "./Toggle";
const StyledHeader = styled.header`
  position: sticky;
  height: 50px;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition-duration: 0.8s;
  background: ${(props) => (props.theme.id === "light" ? props.theme.primaryColor : "black")}; ;
`;

const StyledImg = styled.img`
  height: 50%;
`;

function Header() {
  return (
    <StyledHeader>
      <StyledImg src={lightLogo}></StyledImg>
      <Toggle></Toggle>
    </StyledHeader>
  );
}

export default Header;
