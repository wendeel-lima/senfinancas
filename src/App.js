import { GlobalStyle } from "./Components/UI/GlobalStyle.js";
import Home from "./Pages/Home.js";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Home />
      </header>
    </div>
  );
}

export default App;
