import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"
// import { NavLink } from "react-router-dom";

const Box = styled.div`
width: calc(10rem + 15vw);
height: 20rem;
padding: 1rem;
padding-bottom: 5rem;
color: ${props => props.theme.text};
border: 2px solid ${props => props.theme.text};
backdrop-filter: blur(2px);
box-shadow: 0 0 1rem 0 rgba(0,0,0,0.2);
cursor: pointer;

display: flex;
flex-direction: column;
z-index: 5;

&:hover {
  color: ${props => props.theme.body};
  background-color: ${props => props.theme.text};
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
  border: 2px solid ${props => props.theme.text};
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
padding: 0.5rem 0;
`

const Tag = styled.span`
padding-right: 0.5rem;
`

const Links = styled.div`
display: flex;
justify-content: space-between;
`

const ProjectComponent = (props) => {
  const {name, description, img, tags, link1, link2} = props.projects;
  return (
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
        <Link target="_blank" to={{pathname: link1}}>Live Link</Link>
        <Link target="_blank" to={{pathname: link2}}>Source Code</Link>
      </Links>
    </Box>
  )
}

export default ProjectComponent;