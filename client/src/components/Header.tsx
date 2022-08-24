import React from "react";
import "../App.css";
import styled from "styled-components";
import lightLogo from "./../assets/images/codestates-white.png";
import Toggle from "./Toggle";
import { useNavigate } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";

const StyledHeader = styled.header<{ isScrollTop: boolean }>`
  position: sticky;
  height: 50px;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition-duration: 0.8s;
  box-shadow: ${(props) => (props.isScrollTop === true ? "none" : `0 3px 5px ${props.theme.primaryColor}`)};
  background: ${(props) => (props.theme.id === "light" ? props.theme.primaryColor : "black")}; ;
`;

const StyledImg = styled.img`
  height: 50%;
`;
const StyledBackButton = styled.button`
  position: fixed;
  border: none;
  border-radius: 100%;
  background-color: ${(props) => props.theme.primaryColor};
  color: white;
  height: 3em;
  width: 3em;
  left: 2em;
`;

function Header() {
  const [isScrollTop, setIsScrollTop] = React.useState<boolean>(true);
  const navigate = useNavigate();
  const onclickBackButtonHandler = () => {
    navigate(-1);
  };
  const onscrollHandler = () => {
    if (window.pageYOffset > 0) {
      setIsScrollTop(false);
    } else {
      setIsScrollTop(true);
    }
  };
  React.useEffect(() => {
    const scrollListener = () => window.addEventListener("scroll", onscrollHandler);
    scrollListener();
    return () => window.removeEventListener("scroll", onscrollHandler);
  });
  return (
    <StyledHeader isScrollTop={isScrollTop}>
      <StyledBackButton onClick={onclickBackButtonHandler}>
        <RiArrowGoBackFill size={"1.8em"}></RiArrowGoBackFill>
      </StyledBackButton>
      <StyledImg src={lightLogo}></StyledImg>
      <Toggle></Toggle>
    </StyledHeader>
  );
}

export default Header;
