import React, { useEffect, useState, lazy, Suspense } from "react";
import styled from "styled-components";
import Books from "../assests/images/books.jpg"
import ProjectData from "../data/ProjectData";
import ProjectComponent from "./ProjectComponent";
import { motion } from 'framer-motion'
import Loading from "../subComponents/Loading";
import { mediaQueries } from "./Theme";

const AnchorComponent = lazy(() => import("../subComponents/Anchor"));
const SocialIcons = lazy(() => import("../subComponents/SocialIcons"));
const PowerButton = lazy(() => import("../subComponents/PowerButton"));
const LogoComponent = lazy(() => import("../subComponents/LogoComponent"));
const BigTitle = lazy(() => import("../subComponents/BigTitle"));

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

  ${mediaQueries(30)`
    padding-top: 7rem;
  `};
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  gap: calc(1rem + 2vw);

  ${mediaQueries(50)`
    grid-template-columns: 100%;
  `};
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
    <Suspense fallback={<Loading />}>
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
          <Grid variants={container} initial="hidden" animate="show">
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
    </Suspense>

  )
}

export default Project;