// Imports of components
import Navigation from "./components/Navigation";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

// Imports for styling
import GlobalStyle from "./styles/GlobalStyle";

function App() {
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
