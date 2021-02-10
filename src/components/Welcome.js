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
        <h1>Welcome to the jungle!</h1>
      </StyledWelcome>
    </React.Fragment>
  );
};

// Styled components
const StyledWelcome = styled.div`
  width: 100vw;
  background: linear-gradient(to right, #00397f, #26aee5);
  display: flex;
  justify-content: center;
  align-items: center;
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

export default Welcome;
