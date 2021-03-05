// Imports from React
import React, { useState, useEffect } from "react";

// Imports from third party libraries
import { animateScroll as scroll } from "react-scroll";

// Import of external data
import Resume from "../Data/Resume.pdf";
import Profile from "../Data/Photo.jpeg";
import Certificates from "../Data/LS_Certificates.pdf";

// Imports for styling
import styled from "styled-components";

const About = () => {
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

  const scrollToProjects = () => {
    scroll.scrollTo(dimensions.height * 2);
  };
  return (
    <React.Fragment>
      <NavAnchorAbout id="about"></NavAnchorAbout>
      <StyledAbout>
        <StyledAboutLeft>
          <StyledAboutLeftText>
            <StyledAboutLeftTextHeading>
              <p>{"<h1>"}</p>
              <h1>About me</h1>
              <p>{"</h1>"}</p>
            </StyledAboutLeftTextHeading>
            <StyledAboutLeftTextFlow>
              <p
                style={{
                  fontFamily: "La Belle Aurore, cursive",
                  color: "#8ed3f4",
                }}
              >
                {"<p>"}
              </p>
              <p className="paragraph">
                It took me 24 years of my life to get in touch with programming
                for the first time. In the final stages of my B. Sc. in Civil
                and Environmental Engineering I was faced with a task in the
                field of data analysis. Never before had I enjoyed something so
                much and never before had I developed a passion for something in
                such a short time.
              </p>
              <p className="paragraph">
                Immediately after graduation, I looked into different areas of
                Computer Science and decided to pursue web development. After
                half a year of auto didactic learning all the basics, I
                completed a 9-month course as a full stack web developer at{" "}
                <StyledAboutLink
                  href="https://lambdaschool.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#ed6f22" }}
                >
                  Lambda School
                </StyledAboutLink>
                .
              </p>
              <p className="paragraph">
                Since then I have been freelancing and offering my skills to
                companies of all sizes. Whether alone or in a team, for a short
                term task or a long term project - I am available for
                consulting, execution, team building and more.
              </p>
              <p className="lastParagraph">
                If you want to find out more about me, you can take a look at my{" "}
                <StyledAboutLink
                  target="_blank"
                  rel="noopener noreferrer"
                  href={Resume}
                  style={{ color: "#ed6f22" }}
                >
                  resume
                </StyledAboutLink>{" "}
                and{" "}
                <StyledAboutLink
                  target="_blank"
                  rel="noopener noreferrer"
                  href={Certificates}
                  style={{ color: "#ed6f22" }}
                >
                  certificates
                </StyledAboutLink>
                , checkout my{" "}
                <StyledAboutLink
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/luisschekerka/"
                  style={{ color: "#ed6f22" }}
                >
                  LinkedIn
                </StyledAboutLink>{" "}
                or get an overview of my{" "}
                <span onClick={scrollToProjects} style={{ color: "#ed6f22" }}>
                  portfolio projects
                </span>
                .
              </p>
              <p
                style={{
                  fontFamily: "La Belle Aurore, cursive",
                  color: "#8ed3f4",
                }}
              >
                {"</p>"}
              </p>
            </StyledAboutLeftTextFlow>
          </StyledAboutLeftText>
        </StyledAboutLeft>
        <StyledAboutRight>
          <StyledAboutRightPicture src={Profile} alt="Profile Picture" />
        </StyledAboutRight>
      </StyledAbout>
    </React.Fragment>
  );
};

// Styled components
const NavAnchorAbout = styled.div`
  height: 100vh;
  position: absolute;
  top: 100vh;
`;

const StyledAbout = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to right, #00397f, #26aee5);
  display: flex;
  @media (max-width: 1000px) and (orientation: landscape) {
    display: none;
  }
`;

const StyledAboutLeft = styled.div`
  width: 50vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  left: 3vw;
  padding: 1vw 1vw 1vw 1vw;
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
  @media (max-width: 400px) and (orientation: portrait) {
    p {
      font-size: 12px;
    }
  }
`;

const StyledAboutLeftText = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 3vw;
  h1 {
    padding-left: 1vw;
  }
`;

const StyledAboutLeftTextHeading = styled.div`
  font-family: "Open Sans", sans-serif;
  font-weight: lighter;
  p {
    color: #8ed3f4;
    font-family: "La Belle Aurore", cursive;
  }
`;

const StyledAboutLeftTextFlow = styled.div`
  font-family: "Open Sans", sans-serif;
  font-weight: lighter;
  .paragraph {
    font-size: 18px;
    padding: 0 0 1vw 1vw;
  }
  .lastParagraph {
    font-size: 18px;
    padding: 0 0 0 1vw;
  }
  @media (max-width: 1200px) {
    .paragraph {
      font-size: 16px;
      padding: 0 0 3vw 1vw;
    }
    .lastParagraph {
      font-size: 16px;
    }
  }
  @media (max-width: 400px) {
    .paragraph {
      font-size: 12px;
      padding: 0 0 5vw 1vw;
    }
    .lastParagraph {
      font-size: 12px;
    }
  }
`;

const StyledAboutLink = styled.a`
  text-decoration: none;
`;

const StyledAboutRight = styled.div`
  width: 47vw;
  height: 100vh;
  position: absolute;
  left: 53vw;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 2100px) and (orientation: landscape) {
    left: 53.5vw;
    width: 46.5vw;
  }
  @media (max-width: 1900px) and (orientation: landscape) {
    left: 54vw;
    width: 46;
  }
  @media (max-width: 1700px) and (orientation: landscape) {
    left: 54.5vw;
    width: 45.5vw;
  }
  @media (max-width: 1600px) and (orientation: landscape) {
    left: 55vw;
    width: 45vw;
  }
  @media (max-width: 1400px) and (orientation: landscape) {
    left: 55.5vw;
    width: 44.5vw;
  }
  @media (max-width: 1200px) and (orientation: landscape) {
    left: 56vw;
    width: 44vw;
  }
  @media (orientation: portrait) {
    display: none;
  }
`;

const StyledAboutRightPicture = styled.img`
  width: 70%;
  height: 80vh;
  object-fit: cover;
  @media (max-width: 2100px) and (orientation: landscape) {
    width: 75%;
  }
  @media (max-width: 1900px) and (orientation: landscape) {
    width: 76%;
  }
  @media (max-width: 1700px) and (orientation: landscape) {
    width: 77%;
  }
  @media (max-width: 1600px) and (orientation: landscape) {
    width: 78%;
  }
  @media (max-width: 1400px) and (orientation: landscape) {
    width: 79%;
  }
  @media (max-width: 1200px) and (orientation: landscape) {
    width: 80%;
  }
`;

export default About;
