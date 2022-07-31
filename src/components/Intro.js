import React from "react";
import styled from "styled-components";
import Profile from "../assests/images/delete-profile.png"

const Box = styled.div`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);

width: 55vw;
display: flex;
// The gradient is to create two seperate color
background: linear-gradient(
  to right,
  ${props => props.theme.body} 50%,
  ${props => props.theme.text} 50%) bottom,
  linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) top;
background-repeat: no-repeat;
background-size: 100% 2px;
z-index: 1;
border-left: 2px solid ${props => props.theme.body};
border-right: 2px solid ${props => props.theme.text};
`

const SubBox = styled.div`
width: 50%;
position: relative;
display: flex;

.pic {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 100%;
  height: auto;
}
`

const Text = styled.div`
font-size: calc(1em + 1.5vw);
color: ${props => props.theme.body};
padding: 2rem;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: space-evenly;
`

const Intro = () => {
  return (
    <Box>
      <SubBox>
        <Text>
          <h1>Hi,</h1>
          <h2>I'm Stephanie</h2>
          <h3>I design and code simple yet beautiful websites</h3>
        </Text>
      </SubBox>
      <SubBox>
        <div>
          <img src={Profile} alt="Animated profile" className="pic" />
        </div>
      </SubBox>
    </Box>
  )
}

export default Intro;