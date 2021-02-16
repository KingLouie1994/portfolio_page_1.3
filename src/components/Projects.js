// Imports from React
import React, { useState, useEffect } from "react";

// Imports of components
import ProjectContainer from "./ProjectContainer";

// Imports for styling
import styled from "styled-components";

const Projects = () => {
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
      <NavAnchorProjects
        style={{ height: dimensions.height }}
        id="projects"
      ></NavAnchorProjects>
      <StyledProjects style={{ height: dimensions.height }}>
        <StyledProjectsContainer style={{ height: dimensions.height * 0.8 }}>
          <p>{"<section>"}</p>
          <ProjectContainer />
          <p>{"</section>"}</p>
        </StyledProjectsContainer>
      </StyledProjects>
    </React.Fragment>
  );
};

// Styled components
const NavAnchorProjects = styled.div`
  position: absolute;
  top: 200vh;
`;

const StyledProjects = styled.div`
  width: 100vw;
  background: linear-gradient(to right, #00397f, #26aee5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 1000px) and (orientation: landscape) {
    display: none;
  }
`;

const StyledProjectsContainer = styled.div`
  width: 94vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  left: 3vw;
  padding: 1vw 0 1vw 4vw;
  p {
    color: #8ed3f4;
    font-family: "La Belle Aurore", cursive;
  }
  @media (max-width: 2100px) and (orientation: landscape) {
    width: 93;
    left: 3.5vw;
  }
  @media (max-width: 1900px) and (orientation: landscape) {
    width: 92;
    left: 4vw;
  }
  @media (max-width: 1700px) and (orientation: landscape) {
    width: 91;
    left: 4.5vw;
  }
  @media (max-width: 1600px) and (orientation: landscape) {
    width: 90;
    left: 5vw;
  }
  @media (max-width: 1400px) and (orientation: landscape) {
    width: 89;
    left: 5.5vw;
  }
  @media (max-width: 1200px) and (orientation: landscape) {
    width: 88;
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

export default Projects;
