import React, { Fragment, useState } from "react";
import { NavLink, Link } from "react-router-dom";

import Container from "../interface/Container";

import "../../scss/components/_header.scss";
import { FaCode } from "react-icons/fa";

const TopBar = () => {
  const [shownMenu, setShownMenu] = useState(false);

  const toggleMenuHandler = () => {
    setShownMenu((prevState) => (prevState = !prevState));
  };

  const closeMenuHandler = () => {
    setShownMenu(false);
  };

  return (
    <Fragment>
      <header className="topbar">
        <Container className="topbar-container">
          {/* ========== logo ========== */}
          <Link to="/home" className="logo">
            <FaCode className="logo-icon" />
            <span className="logo-text">Alpet</span>
          </Link>
          {/* ========== burger menu ========== */}
          <div className="burger" onClick={toggleMenuHandler}>
            <div
              className={`${"burger-line"} ${shownMenu ? "first-line" : ""}`}
            ></div>
            <div
              className={`${"burger-line"} ${shownMenu ? "second-line" : ""}`}
            ></div>
            <div
              className={`${"burger-line"} ${shownMenu ? "third-line" : ""}`}
            ></div>
          </div>
          {/* ========== navbar menu ========== */}
          <div className="navbar-menu">
            <ul>
              <li className="navbar-link">
                <NavLink to="/home" activeClassName="active-link">
                  Home
                </NavLink>
              </li>
              <li className="navbar-link">
                <NavLink to="/portfolio" activeClassName="active-link">
                  Portfolio
                </NavLink>
              </li>
            </ul>
          </div>
        </Container>
      </header>
      {/* ========== side menu ========== */}
      <div
        className={`${"backdrop"} ${shownMenu ? "backdrop-show" : ""}`}
        onClick={closeMenuHandler}
      >
        <div className={`${"side-menu"} ${shownMenu ? "side-menu-show" : ""}`}>
          <nav className="side-menu-nav">
            <ul>
              <li className="side-menu-link" onClick={closeMenuHandler}>
                <NavLink to="/home" activeClassName="active-link">
                  Home
                </NavLink>
              </li>
              <li className="side-menu-link" onClick={closeMenuHandler}>
                <NavLink to="/portfolio" activeClassName="active-link">
                  Portfolio
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </Fragment>
  );
};

export default TopBar;