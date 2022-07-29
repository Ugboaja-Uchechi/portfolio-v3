import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
background: ${props => props.theme.body}
`

const Main = () => {
  return (
    <>
      <MainContainer>
        <h1>Main Component/Page</h1>
      </MainContainer>
    </>
  )
}

export default Main;