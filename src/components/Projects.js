// Imports from React
import React, { useState, useEffect } from "react";

// Imports of components
import ProjectContainer from "./ProjectContainer";

// Import of external data
import projectData from "../Data/Projects/Projects";

// Imports of Icons
import { ArrowRightCircle } from "react-feather";

// Imports for styling
import styled from "styled-components";

const Projects = () => {
  const [projectIndex, setProjectIndex] = useState(0);

  const [project, setProject] = useState(
    projectData.filter((project) => project.id === projectIndex)
  );

  const handleNextProject = () => {
    if (projectIndex < projectData.length - 1) {
      setProjectIndex(projectIndex + 1);
      console.log(projectIndex);
    } else {
      setProjectIndex(0);
      console.log(projectIndex);
    }
  };

  useEffect(() => {
    setProject(projectData.filter((project) => project.id === projectIndex));
  }, [projectIndex]);

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
      <NavAnchorProjects id="projects"></NavAnchorProjects>
      <StyledProjects>
        <StyledProjectsContainer>
          <p>{"<section>"}</p>
          {project.map((project) => (
            <ProjectContainer
              key={project.id}
              id={project.id}
              name={project.name}
              icon={project.icon}
              description={project.desciption}
              role={project.role}
              techStack={project.techStack}
              url={project.url}
              project={project.project}
              frontend={project.gitHubFrontend}
              backend={project.gitHubBackend}
              github={project.gitHub}
            />
          ))}
          <p>{"</section>"}</p>
        </StyledProjectsContainer>
        <StyledProjectsNext onClick={handleNextProject}>
          <ArrowRightCircle size={80} strokeWidth={1} color="#002552" />
        </StyledProjectsNext>
        <CircleOne></CircleOne>
        <CircleTwo></CircleTwo>
      </StyledProjects>
    </React.Fragment>
  );
};

// Styled components
const NavAnchorProjects = styled.div`
  height: 100vh;
  position: absolute;
  top: 200vh;
`;

const StyledProjects = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to right, #00397f, #26aee5);
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1000px) and (orientation: landscape) {
    display: none;
  }
`;

const StyledProjectsContainer = styled.div`
  width: 80vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  left: 3vw;
  padding: 1vw 1vw 1vw 4vw;
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

const StyledProjectsNext = styled.div`
  position: absolute;
  left: 88%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (orientation: portrait) {
    left: auto;
    bottom: 3%;
  }
`;

const CircleOne = styled.div`
  height: 20rem;
  width: 20rem;
  position: absolute;
  top: 5%;
  right: 15%;
  background: white;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.3)
  );
  border-radius: 50%;
  z-index: 1;
  @media (max-width: 2100px) {
    height: 15rem;
    width: 15rem;
  }
  @media (max-width: 1200px) {
    height: 10rem;
    width: 10rem;
  }
  @media (max-width: 600px) {
    display: none;
  }
  @media (orientation: portrait) {
    top: 15%;
  }
`;

const CircleTwo = styled.div`
  height: 20rem;
  width: 20rem;
  position: absolute;
  top: 73%;
  left: 23%;
  background: white;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.3)
  );
  border-radius: 50%;
  z-index: 1;
  @media (max-width: 2100px) {
    height: 15rem;
    width: 15rem;
  }
  @media (max-width: 1200px) {
    height: 10rem;
    width: 10rem;
  }
  @media (max-width: 600px) {
    display: none;
  }
  @media (orientation: portrait) {
    top: 78%;
  }
`;

export default Projects;
