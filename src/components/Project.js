import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Books from "../assests/images/books.jpg"
import ProjectData from "../data/ProjectData";
import AnchorComponent from "../subComponents/Anchor";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import ProjectComponent from "./ProjectComponent";
import { motion } from 'framer-motion'
import BigTitle from "../subComponents/BigTitle"

const MainContainer = styled(motion.div)`
  background-image: url(${Books});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
`

const Container = styled.div`
background-color: ${props => `rgba(${props.theme.bodyRgba},0.8)`};
width: 100%;
height: auto;
position: relative;
padding-bottom: 5rem;
`
const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  gap: calc(1rem + 2vw);
`

// Framer Motion Config

const container = {

  hidden: {opacity:0},
  show: {
    opacity:1,

    transition:{
      staggerChildren: 0.5,
      duration: 0.5,
    }
  }

}

const Project = () => {

  const [numbers, setNumbers] = useState(0);

  useEffect(() => {
    let num = (window.innerHeight - 40)/29;
    setNumbers(parseInt(num));
  }, [])

  return (
    <MainContainer
      variants={container}
      initial='hidden'
      animate='show'
      exit={{
        opacity:0, transition:{duration: 0.5}
      }}
    >
      <Container>
        <LogoComponent />
        <PowerButton />
        <SocialIcons />
        <AnchorComponent number={numbers} />
        <Center>
          <Grid>
            {
              ProjectData.map(projects => {
                return <ProjectComponent key={projects.id} projects={projects} />
              })
            }
          </Grid>
        </Center>
        <BigTitle text="Projects" top="5rem" left="5rem" />
      </Container>
    </MainContainer>
  )
}

export default Project;