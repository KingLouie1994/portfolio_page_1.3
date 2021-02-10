// Imports for styling
import styled from "styled-components";

const Navigation = () => {
  return (
    <StyledNavigation>
      <StyledNavigationLogo>Logo</StyledNavigationLogo>
    </StyledNavigation>
  );
};

// Styled components
const StyledNavigation = styled.div`
  display: flex;
  flex-direction: column;
  width: 3vw;
  height: 100vh;
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  overflow-x: hidden;
  background-color: #002552;
  @media (max-width: 2100px) and (orientation: landscape) {
    width: 3.5vw;
  }
  @media (max-width: 1900px) and (orientation: landscape) {
    width: 4vw;
  }
  @media (max-width: 1700px) and (orientation: landscape) {
    width: 4.5vw;
  }
  @media (max-width: 1600px) and (orientation: landscape) {
    width: 5vw;
  }
  @media (max-width: 1400px) and (orientation: landscape) {
    width: 5.5vw;
  }
  @media (max-width: 1200px) and (orientation: landscape) {
    width: 6vw;
  }
  @media (max-width: 1000px) and (orientation: landscape) {
    display: none;
  }
  @media (orientation: portrait) {
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 3vh;
  }
  @media (max-height: 1800px) and (orientation: portrait) {
    width: 100vw;
    height: 5vh;
  }
  @media (max-height: 1400px) and (orientation: portrait) {
    width: 100vw;
    height: 6vh;
  }
  @media (max-height: 1200px) and (orientation: portrait) {
    width: 100vw;
    height: 7vh;
  }
  @media (max-height: 1000px) and (orientation: portrait) {
    width: 100vw;
    height: 8vh;
  }
  @media (max-height: 800px) and (orientation: portrait) {
    width: 100vw;
    height: 9vh;
  }
  @media (max-height: 600px) and (orientation: portrait) {
    width: 100vw;
    height: 10vh;
  }
`;

const StyledNavigationLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 7%;
  padding: 10px;
  background: black;
  // Just as long as there is no logo
  font-family: "Julius Sans One", sans-serif;
  @media (orientation: portrait) {
    height: 100%;
    width: auto;
  }
`;

export default Navigation;
