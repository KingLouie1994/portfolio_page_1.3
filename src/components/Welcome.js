// Imports from React
import React, { useState, useEffect } from "react";

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
      <RejectContainer style={{ height: dimensions.height }}>
        <Reject style={{ height: dimensions.height * 0.8 }}>
          <RotateCcw size={60} />
          <p style={{ paddingTop: 40 }}>
            Please rotate your phone or use a larger device to visit the site
          </p>
        </Reject>
      </RejectContainer>
      <StyledWelcome style={{ height: dimensions.height }}>
        <StyledWelcomeBodyTags style={{ height: dimensions.height }}>
          <p>{"<body>"}</p>
          <StyledWelcomeText>
            <StyledWelcomeGreeting>
              <p>{"<h1>"}</p>
              <h1>Hi,</h1>
              <h1>I'm Luis -</h1>
              <h1>Full Stack Developer</h1>
              <p>{"</h1>"}</p>
            </StyledWelcomeGreeting>
            <StyledWelcomeSkills>
              <p>{"<h2>"}</p>
              <h2>
                JavaScript | TypeScript | React.js | React Native | Redux |
                Ionic | Node.js | Express.js | MongoDB | MySQL | Python
              </h2>
              <p>{"</h2>"}</p>
            </StyledWelcomeSkills>
            <p>{"<button>"}</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:luis.schekerka@gmail.com"
            >
              <button>Contact me!</button>
            </a>
            <p>{"</button>"}</p>
          </StyledWelcomeText>
          <p>{"</body>"}</p>
        </StyledWelcomeBodyTags>
      </StyledWelcome>
    </React.Fragment>
  );
};

// Styled components
const StyledWelcome = styled.div`
  width: 100vw;
  background: linear-gradient(to right, #00397f, #26aee5);
  display: flex;
  overflow: hidden;
  @media (max-width: 1000px) and (orientation: landscape) {
    display: none;
  }
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

const StyledWelcomeBodyTags = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  left: 3vw;
  padding: 2vw 0 2vw 1vw;
  p {
    color: #8ed3f4;
    font-family: "La Belle Aurore", cursive;
  }
  @media (orientation: portrait) {
    padding: 5vh 0 2vh 1vh;
  }
  @media (max-width: 1800px) and (orientation: portrait) {
    padding: 7vh 0 2vh 1vh;
  }
  @media (max-width: 1400px) and (orientation: portrait) {
    padding: 8vh 0 2vh 1vh;
  }
  @media (max-width: 1200px) and (orientation: portrait) {
    padding: 9vh 0 2vh 1vh;
  }
  @media (max-width: 1000px) and (orientation: portrait) {
    padding: 10vh 0 2vh 1vh;
  }
  @media (max-width: 800px) and (orientation: portrait) {
    padding: 11vh 0 2vh 1vh;
  }
  @media (max-width: 600px) and (orientation: portrait) {
    padding: 12vh 0 2vh 1vh;
  }
`;

const StyledWelcomeText = styled.div`
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
`;

const StyledWelcomeGreeting = styled.div`
  h1 {
    font-size: 60px;
    padding-left: 1vw;
    font-family: "Allerta Stencil", sans-serif;
  }
`;

const StyledWelcomeSkills = styled.div`
  padding: 2vw 0vw 2vw 0vw;
  h2 {
    font-size: 18px;
    padding-left: 1vw;
    font-family: "Open Sans", sans-serif;
    font-weight: lighter;
  }
`;

export default Welcome;
