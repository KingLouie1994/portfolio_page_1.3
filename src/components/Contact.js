// Imports from React
import React, { useState, useEffect } from "react";

// Imports for styling
import styled from "styled-components";

const Contact = () => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }
    window.addEventListener("resize", handleResize);
  });
  return (
    <React.Fragment>
      <NavAnchorContact
        style={{ height: dimensions.height }}
        id="contact"
      ></NavAnchorContact>
      <StyledContact style={{ height: dimensions.height }}>
        <StyledContactLeft style={{ height: dimensions.height }}>
          <h1>Contact</h1>
        </StyledContactLeft>
      </StyledContact>
    </React.Fragment>
  );
};

// Styled components
const NavAnchorContact = styled.div`
  position: absolute;
  top: 300vh;
`;

const StyledContact = styled.div`
  width: 100vw;
  background: linear-gradient(to right, #00397f, #26aee5);
  display: flex;
  @media (max-width: 1000px) and (orientation: landscape) {
    display: none;
  }
`;

const StyledContactLeft = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  left: 3vw;
  padding: 2vw 0 2vw 1vw;
  p {
    color: #8ed3f4;
    font-family: "La Belle Aurore", cursive;
  }
  @media (max-width: 2100px) and (orientation: landscape) {
    left: 3.5vw;
  }
  @media (max-width: 1900px) and (orientation: landscape) {
    left: 4vw;
  }
  @media (max-width: 1700px) and (orientation: landscape) {
    left: 4.5vw;
  }
  @media (max-width: 1600px) and (orientation: landscape) {
    left: 5vw;
  }
  @media (max-width: 1400px) and (orientation: landscape) {
    left: 5.5vw;
  }
  @media (max-width: 1200px) and (orientation: landscape) {
    left: 6vw;
  }
  @media (orientation: portrait) {
    right: 3vw;
    width: 94vw;
    padding: 5vh 1vh 2vh 1vh;
  }
  @media (max-width: 1800px) and (orientation: portrait) {
    padding: 7vh 1vh 2vh 1vh;
  }
  @media (max-width: 1400px) and (orientation: portrait) {
    padding: 8vh 1vh 2vh 1vh;
  }
  @media (max-width: 1200px) and (orientation: portrait) {
    padding: 9vh 1vh 2vh 1vh;
  }
  @media (max-width: 1000px) and (orientation: portrait) {
    padding: 10vh 1vh 2vh 1vh;
  }
  @media (max-width: 800px) and (orientation: portrait) {
    padding: 11vh 1vh 2vh 1vh;
  }
  @media (max-width: 600px) and (orientation: portrait) {
    padding: 12vh 1vh 2vh 1vh;
  }
`;

export default Contact;
