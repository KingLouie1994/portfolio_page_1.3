// Imports from React
import React, { useState } from "react";

// Imports of Icons
import { Linkedin, GitHub, Home, User, Eye, Mail, Link } from "react-feather";

// Imports for styling
import styled from "styled-components";

const Navigation = () => {
  const [hoverStatusHome, setHoverStatusHome] = useState(false);
  const [hoverStatusAbout, setHoverStatusAbout] = useState(false);
  const [hoverStatusWork, setHoverStatusWork] = useState(false);
  const [hoverStatusContact, setHoverStatusContact] = useState(false);

  const [hoverStatusLinkedIn, setHoverStatusLinkedIn] = useState(false);
  const [hoverStatusGitHub, setHoverStatusGitHub] = useState(false);

  return (
    <StyledNavigation>
      <StyledNavigationLogo>Logo</StyledNavigationLogo>
      <StyledNavigationAnchors>
        <ul>
          <li
            onMouseEnter={() => setHoverStatusHome(true)}
            onMouseLeave={() => setHoverStatusHome(false)}
          >
            {hoverStatusHome ? (
              <p>Home</p>
            ) : (
              <Home color="#ed6f22" size={30} stroke-width={1} />
            )}
          </li>
          <li
            onMouseEnter={() => setHoverStatusAbout(true)}
            onMouseLeave={() => setHoverStatusAbout(false)}
          >
            {hoverStatusAbout ? (
              <p>About</p>
            ) : (
              <User color="white" size={30} stroke-width={1} />
            )}
          </li>
          <li
            onMouseEnter={() => setHoverStatusWork(true)}
            onMouseLeave={() => setHoverStatusWork(false)}
          >
            {hoverStatusWork ? (
              <p>Work</p>
            ) : (
              <Eye color="white" size={30} stroke-width={1} />
            )}
          </li>
          <li
            onMouseEnter={() => setHoverStatusContact(true)}
            onMouseLeave={() => setHoverStatusContact(false)}
          >
            {hoverStatusContact ? (
              <p>Contact</p>
            ) : (
              <Mail color="white" size={30} stroke-width={1} />
            )}
          </li>
        </ul>
      </StyledNavigationAnchors>
      <StyledNavigationSocial>
        <a
          href="https://www.linkedin.com/in/luisschekerka/"
          target="_blank"
          onMouseEnter={() => setHoverStatusLinkedIn(true)}
          onMouseLeave={() => setHoverStatusLinkedIn(false)}
        >
          <Linkedin
            color={hoverStatusLinkedIn ? "#ed6f22" : "white"}
            size={20}
            stroke-width={1}
          />
        </a>
        <a
          href="https://github.com/KingLouie1994"
          target="_blank"
          onMouseEnter={() => setHoverStatusGitHub(true)}
          onMouseLeave={() => setHoverStatusGitHub(false)}
        >
          <GitHub
            color={hoverStatusGitHub ? "#ed6f22" : "white"}
            size={20}
            stroke-width={1}
          />
        </a>
      </StyledNavigationSocial>
    </StyledNavigation>
  );
};

// Styled components
const StyledNavigation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  background: black;
  // Just as long as there is no logo
  font-family: "Julius Sans One", sans-serif;
  padding: 10px;
  @media (orientation: portrait) {
    height: 100%;
    width: auto;
  }
`;

const StyledNavigationAnchors = styled.nav`
  width: 100%;
  height: 40%;
  margin: 30% 0 30% 0;
  ul {
    list-style: none;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    p {
      font-family: "Julius Sans One", sans-serif;
      color: #ed6f22;
    }
  }
  li {
    width: 80%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
  }
  @media (orientation: portrait) {
    height: 100%;
    margin: 0;
    ul {
      width: 80%;
      position: absolute;
      right: 0;
      flex-direction: row;
    }
  }
`;

const StyledNavigationSocial = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 30px;
  @media (max-width: 2000px) and (orientation: landscape) {
    height: 7%;
  }
  @media (max-width: 1200px) and (orientation: landscape) {
    height: 9%;
  }
  @media (orientation: portrait) {
    display: none;
  }
`;

export default Navigation;
