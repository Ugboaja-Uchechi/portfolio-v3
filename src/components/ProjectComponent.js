import React from "react";
import styled from "styled-components";
import { motion } from 'framer-motion';
// background-color: #ffcdb2;

const Box = styled(motion.div)`
width: calc(10rem + 15vw);
height: 20rem;
padding: 1rem;
padding-bottom: 3rem;
color: ${props => props.theme.text};
border: 2px solid ${props => props.theme.text};
backdrop-filter: blur(2px);
box-shadow: 0 0 1rem 0 rgba(0,0,0,0.2);
cursor: pointer;

display: flex;
flex-direction: column;
z-index: 5;

&:hover {
  color: #000;
  background-color: #f5cac3;
  border: 1px solid ${props => props.theme.text};
  transition: all 0.3s ease;
}
`

const Image = styled.div`
background-image: ${props => `url(${props.img})`};
width: 100%;
height: 60%;
background-size: cover;
border: 1px solid transparent;
background-position: center center;

${Box}:hover &{
  border: 1px solid ${props => props.theme.text};
}

`

const Title = styled.h3`
color: inherit;
padding 0.5rem 0;
padding-top 1rem;
font-family: "Karla", sans-serif;
font-weight: 700;
border-bottom: 1px solid ${props => props.theme.text};
width: 100%;
`

const Description = styled.h4`
color: inherit;
padding 0.5rem 0;
padding-top 1rem;
font-family: "Karla", sans-serif;
font-weight: 500;
`

const HashTags = styled.div`
padding: 0.7rem 0;
`

const Tag = styled.span`
padding-right: 0.5rem;
`

const Links = styled.div`
display: flex;
justify-content: center;

a {
  color: rgb(0 0 0);
  text-decoration: none;
  padding: 0.5rem calc(0.8rem + 1vw);
  border-radius: 0px 0px 0px 25px;
  font-size: calc(0.7em + 0.5vw);
  margin-top: 0.5rem
}

a:hover {
  font-size: calc(0.8em + 0.5vw);
  background-color: #ffb4a2;
}
`

const Container = styled(motion.div)``;

// Framer Motion Configuration
const Item = {
  hidden:{
      scale:0
  },
  show:{
      scale:1,
      transition: {
          type: 'spring',
          duration: 0.5
      }
  }
}

const ProjectComponent = (props) => {
  const {name, description, img, tags, link1, link2} = props.projects;
  return (
    <Container
      variants={Item}
    >
      <Box>
        <Image img={img} />
        <Title>{name}</Title>
        <Description>{description}</Description>
        <HashTags>
          {
            tags.map((t,id) => {
              return <Tag key={id}>#{t}</Tag>
            })
          }
        </HashTags>
        <Links>
          <a target="_blank" rel="noreferrer" href={link2}>Live Link</a>
          <a target="_blank" rel="noreferrer" href={link1}>Source Code</a>
        </Links>
      </Box>
    </Container>
  )
}

export default ProjectComponent;