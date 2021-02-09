// Imports from React
import React from "react";

// Imports for styling
import styled from "styled-components";

const Welcome = () => {
  return (
    <React.Fragment>
      <RejectContainer>
        <Reject></Reject>
      </RejectContainer>
      <StyledWelcome>
        <h1 style={{ zIndex: 2 }}>Welcome to the jungle!</h1>
        <CircleOne />
        <CircleTwo />
      </StyledWelcome>
    </React.Fragment>
  );
};

// Styled components
const StyledWelcome = styled.div`
  height: 100vh;
  background: linear-gradient(to right top, #024e6d, #8ed3f4);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  @media (max-width: 1000px) and (orientation: landscape) {
    display: none;
  }
`;

const CircleOne = styled.div`
  height: 40rem;
  width: 40rem;
  position: absolute;
  top: 0%;
  left: 0%;
  z-index: 1;
  background: linear-gradient(to right top, #024e6d, #26aee5);
  filter: blur(100px);
  transform: rotate(90deg);
  @media (max-width: 1000px) and (orientation: landscape) {
    display: none;
  }
  @media (max-width: 750px) and (orientation: portrait) {
    display: none;
  }
`;

const CircleTwo = styled.div`
  height: 40rem;
  width: 40rem;
  position: absolute;
  top: 0%;
  right: 0%;
  z-index: 1;
  background: linear-gradient(to right top, #024e6d, #26aee5);
  filter: blur(100px);
  transform: rotate(180deg);
  overflow: hidden;
  @media (max-width: 1000px) and (orientation: landscape) {
    display: none;
  }
  @media (max-width: 750px) and (orientation: portrait) {
    display: none;
  }
`;

const RejectContainer = styled.div`
  height: 100vh;
  background: linear-gradient(to right top, #024e6d, #8ed3f4);
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
  background: white;
  height: 80vh;
  width: 80vw;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.3)
  );
  border-radius: 2rem;
  @media (orientation: portrait) {
    display: none;
  }
  @media (min-width: 1000px) {
    display: none;
  }
`;

export default Welcome;
