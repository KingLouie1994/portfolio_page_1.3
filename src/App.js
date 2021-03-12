// Imports from React
import React, { useEffect } from "react";

// Imports from third party libraries
import ReactGA from "react-ga";

// Import of meta tag library
import MetaTags from "react-meta-tags";

// Imports of components
import Navigation from "./components/Navigation";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

// Imports for styling
import GlobalStyle from "./styles/GlobalStyle";

ReactGA.initialize(process.env.REACT_APP_MEASUREMENT_ID);

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div>
      <MetaTags>
        <title>LS | Full Stack Developer</title>
        <meta
          id="meta-description"
          name="description"
          content="Front End & Back End Developer - Focus on Web and Mobile - For small and large projects of all kinds"
        />
        <meta
          id="og-title"
          property="og:title"
          content="LS | Full Stack Developer"
        />
      </MetaTags>
      <GlobalStyle />
      <Navigation />
      <Welcome />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
