// Imports of components
import Navigation from "./components/Navigation";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Projects from "./components/Projects";

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
    </div>
  );
}

export default App;
