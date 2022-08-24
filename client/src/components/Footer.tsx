import React from "react";
import "../App.css";
import styled from "styled-components";
import blueLogo from "./../assets/images/codestates-blue.png";

const StyledFooter = styled.footer`
  position: sticky;
  margin-top: 1em;
  width: 100%;
  height: 50px;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition-duration: 0.8s;
  box-shadow: 0 3px 5px black;
  background: white;
`;

const StyledImg = styled.img`
  height: 50%;
`;

function Footer() {
  return (
    <StyledFooter>
      <StyledImg src={blueLogo}></StyledImg>
    </StyledFooter>
  );
}

export default Footer;
