import { GlobalStyle } from "./Components/UI/GlobalStyle.js";
import Home from "./Pages/Home.js";
import Cabecalho from "./Components/Cabecalho/Cabecalho.js";

function App() {
  return (
    <>
      <Cabecalho />
      <GlobalStyle />
      {/* <Busca /> */}
      <Home />
    </>
  );
}

export default App;
