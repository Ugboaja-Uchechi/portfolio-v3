import React from "react";
import { motion } from 'framer-motion'
import styled from "styled-components";
import { Github, LinkedIn } from "../components/AllSvgs";
import { DarkTheme, mediaQueries } from '../components/Theme'

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 2rem;

  z-index: 2;

  &>*:not(:last-child) {
    margin: 0.5rem 0;

    ${mediaQueries(20)`
      margin: 0.3rem 0;
    `};
  }

  ${mediaQueries(40)`
    left: 1rem;
    svg{
      width:20px;
      height:20px
    }
  `};
`

const Line = styled(motion.span)`
width: 2px;
height: 8rem;
background-color: ${props => props.color === "dark" ? DarkTheme.text : DarkTheme.body};
`

const SocialIcons = (props) => {
  const mq = window.matchMedia("(max-width: 40em)").matches;
  return (
      <Icons>
        <motion.div
          initial={{transform:"scale(0)"}}
          animate={{scale:[0,1,1.5,1]}}
          transition={{type:'spring', duration:1, delay:1}}
        >
          <a style={{color: "inherit"}} target="_blank" href="https://github.com/Ugboaja-Uchechi" rel="noreferrer">
            <Github width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body} />
          </a>
        </motion.div>
        <motion.div
          initial={{transform:"scale(0)"}}
          animate={{scale:[0,1,1.5,1]}}
          transition={{type:'spring', duration:1, delay:1.2}}
        >
          <a style={{color: "inherit"}} target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/stephanie-ugboaja/">
            <LinkedIn width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body} />
          </a>
        </motion.div>
        <Line 
          color={props.theme}
          initial={{ height:0 }}
          animate={{ height: mq ? "5rem" : "8rem" }}
          transition={{
            type:'spring', duration:1, delay:0.8
          }}
        />
      </Icons>
  )
}

export default SocialIcons;