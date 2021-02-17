// Imports from React
import React, { useState, useEffect } from "react";

// Imports of components
import Languages from "./Languages";

// Imports of Icons
import { RotateCcw } from "react-feather";

// Imports for styling
import styled from "styled-components";

const Welcome = () => {
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
      <NavAnchorWelcome id="welcome"></NavAnchorWelcome>
      <RejectContainer>
        <Reject>
          <RotateCcw size={60} />
          <p style={{ paddingTop: 40 }}>
            Please rotate your phone or use a larger device to visit the site
          </p>
        </Reject>
      </RejectContainer>
      <StyledWelcome>
        <StyledWelcomeLeft>
          <p style={{ paddingLeft: "1vw" }}>{"<body>"}</p>
          <StyledWelcomeLeftText>
            <StyledWelcomeLeftTextGreeting>
              <p>{"<h1>"}</p>
              <h1>Hi,</h1>
              <h1>I'm Luis -</h1>
              <h1>Full Stack Developer</h1>
              <p>{"</h1>"}</p>
            </StyledWelcomeLeftTextGreeting>
            <StyledWelcomeLeftTextSkills>
              <p>{"<h2>"}</p>
              <h2>
                Front End & Back End - For small and large projects of all kinds
              </h2>
              <p>{"</h2>"}</p>
            </StyledWelcomeLeftTextSkills>
            <p>{"<button>"}</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:luis.schekerka@gmail.com"
            >
              <button>Contact me!</button>
            </a>
            <p>{"</button>"}</p>
          </StyledWelcomeLeftText>
          <div></div>
        </StyledWelcomeLeft>
        <StyledWelcomeRight>
          <Languages />
        </StyledWelcomeRight>
      </StyledWelcome>
    </React.Fragment>
  );
};

// Styled components
const NavAnchorWelcome = styled.div`
  height: 100vh;
  position: absolute;
  top: 0vh;
`;

const RejectContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(to right, #00397f, #26aee5);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  @media (orientation: portrait) {
    display: none;
  }
  @media (min-width: 1000px) {
    display: none;
  }
`;

const Reject = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  height: 80vh;
  width: 80vw;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.3)
  );
  border-radius: 2rem;
  text-align: center;
  font-family: "Julius Sans One", sans-serif;
  @media (orientation: portrait) {
    display: none;
  }
  @media (min-width: 1000px) {
    display: none;
  }
`;

const StyledWelcome = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to right, #00397f, #26aee5);
  display: flex;
  @media (max-width: 1000px) and (orientation: landscape) {
    display: none;
  }
`;

const StyledWelcomeLeft = styled.div`
  width: 50vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  left: 3vw;
  padding: 1vw 0 1vw 1vw;
  p {
    font-size: 16px;
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
  @media (max-width: 400px) and (orientation: portrait) {
    p {
      font-size: 12px;
    }
  }
`;

const StyledWelcomeLeftText = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 3vw;
  button {
    width: 25%;
    color: #ed6f22;
    background: none;
    border: 1px solid #ed6f22;
    padding: 10px 18px;
    margin-left: 1vw;
    font-size: 16px;
    font-family: "Open Sans", sans-serif;
  }
  @media (max-width: 1200px) {
    button {
      width: 30%;
    }
  }
  @media (max-width: 500px) {
    button {
      width: 47%;
    }
  }
`;

const StyledWelcomeLeftTextGreeting = styled.div`
  h1 {
    padding-left: 1vw;
  }
`;

const StyledWelcomeLeftTextSkills = styled.div`
  padding: 2vw 0vw 2vw 0vw;
  h2 {
    padding-left: 1vw;
    font-family: "Open Sans", sans-serif;
    font-weight: lighter;
  }
`;

const StyledWelcomeRight = styled.div`
  width: 47vw;
  position: absolute;
  left: 53vw;
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

export default Welcome;
