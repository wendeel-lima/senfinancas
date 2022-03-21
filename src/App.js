import { GlobalStyle } from "./Components/UI/GlobalStyle.js";
// import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home.js";
import Cabecalho from "./Components/Cabecalho/Cabecalho.js";
// import Delete from "./Components/Delete/Delete.js";
// import Update from "./Components/Patch/Update.js";

function App() {
  return (
    <>
      <Cabecalho />
      <GlobalStyle />
      <Home />
    </>
  );
  // <Switch>

  // <Route path="/" exact={true} component={Home} />
  // <Route path="/update/:id" component={Update} />
  // <Route path="/delete/:id" component={Delete} />
  // </Switch>
}

export default App;
