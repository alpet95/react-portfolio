import React, { Fragment } from "react";
// ========== components ==========
import About from "./components/About";
import Portfolio from "./components/Portfolio";
// ========== styles ==========
import "./app.scss";

function App() {
  return (
    <Fragment>
      <About />
      <Portfolio />
    </Fragment>
  );
}

export default App;