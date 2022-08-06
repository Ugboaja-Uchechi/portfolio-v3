import React from "react";
import styled from "styled-components";
import { DarkTheme, mediaQueries } from "../components/Theme";

const Logo = styled.h1`
  display: inline-block;
  color: ${props => props.color === "dark" ? DarkTheme.text : DarkTheme.body};
  font-family: "Pacifico", cursive;

  position: fixed;
  top: 2rem;
  left: 2rem;
  z-index: 2;

  ${mediaQueries(40)`
  font-size:1.5em;
  left:1rem;
  top:2rem;
  `};
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