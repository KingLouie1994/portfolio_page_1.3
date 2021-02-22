// Imports of components
import Icon from "../Data/LanguageIcons/Icon";

// Imports of Icons
import { GitHub, Globe, Download } from "react-feather";

// Imports for styling
import styled from "styled-components";

const ProjectContainer = ({
  id,
  name,
  icon,
  description,
  role,
  techStack,
  url,
  project,
  frontend,
  backend,
  github,
}) => {
  return (
    <Glass>
      <Dashboard>
        <Intro>
          <ProjectIcon src={icon} alt={name} />
          <h3>{name}</h3>
        </Intro>
        <TechStack>
          <h4>TECHSTACK:</h4>
          {techStack.map((language) => (
            <Language key={language}>
              <Icon language={language} />
            </Language>
          ))}
        </TechStack>
      </Dashboard>
      <Information>
        {description && (
          <Description>
            <h5>Description:</h5>
            <h6>{description}</h6>
          </Description>
        )}
        {role ? (
          <Role>
            <h5>Role:</h5>
            <h6>{role}</h6>
          </Role>
        ) : null}
        {backend && (
          <Code>
            <h5>Have a look at the backend:</h5>
            <a href={backend} target="_blank">
              <GitHub size={30} strokeWidth={1} color="#002552" />
            </a>
          </Code>
        )}
        {frontend && (
          <Code>
            <h5>Have a look at the frontend:</h5>
            <a href={frontend} target="_blank">
              <GitHub size={30} strokeWidth={1} color="#002552" />
            </a>
          </Code>
        )}
        {github && (
          <Code>
            <h5>Have a look at the code:</h5>
            <a href={github} target="_blank">
              <GitHub size={30} strokeWidth={1} color="#002552" />
            </a>
          </Code>
        )}
        {url && (
          <Website>
            <h5>Visit the project:</h5>
            <a href={url} target="_blank">
              <Globe size={30} strokeWidth={1} color="#002552" />
            </a>
          </Website>
        )}
        {project && (
          <Website>
            <h5>Download the project:</h5>
            <a href={project} download={project}>
              <Download size={30} strokeWidth={1} color="#002552" />
            </a>
          </Website>
        )}
      </Information>
    </Glass>
  );
};

// Styled components
const Glass = styled.div`
  background: white;
  height: 90%;
  margin: 0 1vw 0 1vw;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.3)
  );
  color: black;
  border-radius: 2rem;
  backdrop-filter: blur(2rem);
  z-index: 2;
  display: flex;
  @media (max-width: 600px) {
    height: 100%;
    border-radius: 0.5rem;
  }
`;

const Dashboard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.3)
  );
  border-radius: 2rem;
  @media (max-width: 600px) {
    border-radius: 0.5rem;
  }
`;

const Intro = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 0 50px 0;
  font-family: "Julius Sans One", sans-serif;
  h3 {
    text-align: center;
  }
  @media (max-width: 600px) {
    padding: 5px 0 10px 0;
  }
`;

const ProjectIcon = styled.img`
  width: 100px;
  height: auto;
  margin: 25px;
  @media (max-width: 2100px) {
    width: 80px;
  }
  @media (max-width: 1200px) {
    width: 50px;
  }
  @media (max-width: 600px) {
    margin: 5px;
  }
`;

const TechStack = styled.div`
  font-family: "Julius Sans One", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Language = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60px;
  height: 60px;
  margin: 10px;
  border-radius: 10%;
  @media (max-width: 2100px) {
    width: 50px;
    height: 50px;
  }
  @media (max-width: 1200px) {
    width: 40px;
    height: 40px;
    margin: 5px;
  }
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 3;
  margin: 3rem;
  @media (max-width: 1200px) {
    margin: 0.5rem;
  }
`;

const Description = styled.div`
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.3)
  );
  border-radius: 1rem;
  padding: 20px;
  margin: 20px;
  h5 {
    font-family: "Open Sans", sans-serif;
    font-weight: lighter;
    margin-bottom: 10px;
  }
  h6 {
    color: black;
    font-family: "Open Sans", sans-serif;
    font-weight: lighter;
  }
  @media (max-width: 1200px) {
    margin: 5px;
  }
  @media (max-width: 600px) {
    border-radius: 0.5rem;
  }
`;

const Role = styled.div`
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.3)
  );
  border-radius: 1rem;
  padding: 20px;
  margin: 20px;
  h5 {
    font-family: "Open Sans", sans-serif;
    font-weight: lighter;
    margin-bottom: 10px;
  }
  h6 {
    color: black;
    font-family: "Open Sans", sans-serif;
    font-weight: lighter;
  }
  @media (max-width: 1200px) {
    margin: 5px;
  }
  @media (max-width: 1000px) and (max-height: 900px) {
    display: none;
  }
`;

const Code = styled.div`
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.3)
  );
  border-radius: 1rem;
  padding: 20px;
  margin: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h5 {
    font-family: "Open Sans", sans-serif;
    font-weight: lighter;
  }
  a {
    display: flex;
    align-items: center;
  }
  @media (max-width: 1200px) {
    padding: 10px;
    margin: 5px;
  }
  @media (max-width: 600px) {
    border-radius: 0.5rem;
  }
`;

const Website = styled.div`
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.3)
  );
  border-radius: 1rem;
  padding: 20px;
  margin: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h5 {
    font-family: "Open Sans", sans-serif;
    font-weight: lighter;
  }
  a {
    display: flex;
    align-items: center;
  }
  @media (max-width: 1200px) {
    padding: 10px;
    margin: 5px;
  }
  @media (max-width: 600px) {
    border-radius: 0.5rem;
  }
`;

export default ProjectContainer;
