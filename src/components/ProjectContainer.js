// Imports for styling
import styled from "styled-components";

const ProjectContainer = () => {
  return (
    <Glass>
      <Dashboard>
          <Intro>

          </Intro>
      </Dashboard>
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
`;

const Dashboard = styled.div`

`;

const Intro = styled.div`

`;

export default ProjectContainer;
