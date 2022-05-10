import React, { Fragment, useState, useEffect } from "react";
// ========== components ==========
import LoadingSpinner from "./components/interface/LoadingSpinner";
import TopBar from "./components/layout/TopBar";
import About from "./components/layout/About";
import Portfolio from "./components/layout/Portfolio";
import Footer from "./components/layout/Footer";

function App() {
  // ========== hooks ==========
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  let renderPage = loading ? (
    <LoadingSpinner />
  ) : (
    <Fragment>
      <TopBar />
      <About />
      <Portfolio />
      <Footer />
    </Fragment>
  );

  return renderPage;
}

export default App;