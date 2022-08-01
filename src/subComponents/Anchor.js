import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Anchor, Link } from "../components/AllSvgs";

const Container = styled.div`
  position: relative;
`

const Slider = styled.div`
  position: fixed;
  top: 0;
  right: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateY(-90%);

  .chain {
    transform: rotate(135deg);
  }

`

const AnchorComponent = () => {

  const ref = useRef(null);
  const hiddenRef = useRef(null);

  useEffect(() => {

    const handleScroll = () => {
      let scrollPosition = window.scrollY;
      let windowSize = window.innerHeight;
      let bodyHeight = document.body.offsetHeight;

      let diff = Math.max(bodyHeight - (scrollPosition + windowSize) )
      // diff*100/scrollPosition
      let diffP = (diff * 100) / (bodyHeight - windowSize);

      ref.current.style.transform = `translateY(${-diffP}%)`;
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <Container>
      <Slider ref={ref}>
        {
          [...Array(25)].map((x, id) => {
            return <Link key={id} width={25} height={25} fill="currentColor" className="chain" />
          })
        }
        <Anchor width={70} height={70} fill="currentColor" />
      </Slider>
    </Container>
  )
}

export default AnchorComponent;