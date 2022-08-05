import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Profile from "../assests/images/profile.png"
import { mediaQueries } from "./Theme";

const Box = styled(motion.div)`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);

width: 55vw;
// height: 55vh;
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

${mediaQueries(1200)`
  width: 65vw;
`};

${mediaQueries(60)`
  width: 70vw;
`};

${mediaQueries(50)`
  width: 50vw;
  background-size: 100% 2px;

  flex-direction:column;
  justify-content:space-between;

`};

${mediaQueries(40)`
  width: 60vw;
`};

${mediaQueries(30)`
  width: 70vw;
`};

${mediaQueries(20)`
  width: 60vw;
`};

@media only screen and (max-width: 50em) {
  background: none;
  border: none;
  border-top: 2px solid ${(props) => props.theme.body};
  border-bottom: 2px solid ${(props) => props.theme.text};
  background-image: linear-gradient(
      ${(props) => props.theme.body} 50%,
      ${(props) => props.theme.text} 50%
    ),
    linear-gradient(
      ${(props) => props.theme.body} 50%,
      ${(props) => props.theme.text} 50%
    );
  background-size: 2px 100%;
  background-position: 0 0, 100% 0;
  background-repeat: no-repeat;
}
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

${mediaQueries(50)`
  width: 100%;
  height: 50%;

  .pic {
    width: 70%;
  }
`};

${mediaQueries(40)`
  .pic {
  width: 80%;
  }
`};

${mediaQueries(30)`
  .pic {
  width: 90%;
  }
`};

${mediaQueries(20)`
  .pic {
  width: 80%;
  }
`};
`

const Text = styled.div`
font-size: calc(1em + 1.5vw);
color: ${props => props.theme.body};
padding: 2rem;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: space-evenly;

&>*:last-child {
  color: ${props => `rgba(${props.theme.bodyRgba},0.6)`};
  font-size: calc(0.5rem + 1.5vw);
  font-weight: 300;

  ${mediaQueries(40)`
    font-size: calc(0.5rem + 1vw);
`};
}

  ${mediaQueries(40)`
    font-size: calc(1rem + 1.5vw);
  `};

  ${mediaQueries(20)`
    padding: 1rem;
  `};
`

const Intro = () => {

  const [height, setHeight] = useState("55vh");
  
  useEffect(() => {
    if (window.matchMedia("(max-width: 50em)").matches) {
      setHeight("70vh");
    }
    if (window.matchMedia("(max-width: 20em)").matches) {
      setHeight("60vh");
    }
  }, []);
  return (
    <Box
      initial={{height: 0}}
      animate={{height: height }}
      transition={{ type: "spring", duration: 2, delay: 1 }}
    >
      <SubBox>
        <Text>
          <h1>Hi,</h1>
          <h3>I'm Stephanie.</h3>
          <h6>I design and code simple yet beautiful websites.</h6>
        </Text>
      </SubBox>
      <SubBox>
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{ duration: 1, delay: 2 }}
        >
          <img src={Profile} alt="Animated profile" className="pic" />
        </motion.div>
      </SubBox>
    </Box>
  )
}

export default Intro;