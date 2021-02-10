// Imports of components
import Navigation from "./components/Navigation";
import Welcome from "./components/Welcome";

// Imports for styling
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Navigation />
      <Welcome />
    </div>
  );
}

export default App;
