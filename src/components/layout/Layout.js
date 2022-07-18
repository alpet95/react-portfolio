import React from "react";
import Header from "./Header";
import Footer from "./Footer";

import { useLocation } from "react-router-dom";
import "../../scss/components/_layout.scss";

const Layout = (props) => {
  const location = useLocation();
  const classBundle = `
    ${"layout"} 
    ${location.pathname === "/home" && "home-full-height"} 
    ${location.pathname === "/portfolio" && "portfolio-full-height"}
    ${
      location.pathname !== "/home" && location.pathname !== "/portfolio"
        ? "notfound-full-height"
        : false
    }
  `;

  return (
    <div className={classBundle}>
      <Header />
      <main className="main">{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;