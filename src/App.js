import React, { Fragment } from "react";
// ========== components ==========
import TopBar from "./components/layout/TopBar";
import About from "./components/layout/About";
import Portfolio from "./components/layout/Portfolio";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Fragment>
      <TopBar />
      <About />
      <Portfolio />
      <Footer />
    </Fragment>
  );
}

export default App;