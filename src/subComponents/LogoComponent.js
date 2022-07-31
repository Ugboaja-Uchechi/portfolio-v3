import React from "react";
import styled from "styled-components";
import { DarkTheme } from "../components/Theme";

const Logo = styled.h1`
  display: inline-block;
  color: ${props => props.color === "dark" ? DarkTheme.text : DarkTheme.body};
  font-family: "Pacifico", cursive;

  position: fixed;
  top: 2rem;
  left: 2rem;
  z-index: 2;
`

const LogoComponent = (props) => {
  return (
    <>
      <Logo color={props.theme}>
        {/* My initials */}
        TC
      </Logo>
    </>
  )
}

export default LogoComponent;