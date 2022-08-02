import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Books from "../assests/images/books.jpg"
import ProjectData from "../data/ProjectData";
import AnchorComponent from "../subComponents/Anchor";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import ProjectComponent from "./ProjectComponent";

const MainContainer = styled.div`
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

const Project = () => {

  const [numbers, setNumbers] = useState(0);

  useEffect(() => {
    let num = (window.innerHeight - 40)/29;
    setNumbers(parseInt(num));
  }, [])

  return (
    <MainContainer>
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
      </Container>
    </MainContainer>
  )
}

export default Project;