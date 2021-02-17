// Imports from React
import React, { useEffect } from "react";

// Imports from third party libraries
import ReactGA from "react-ga";

// Imports of components
import Navigation from "./components/Navigation";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

// Imports for styling
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  useEffect(() => {
    ReactGA.initialize(process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div>
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
