import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/interface/Container";

import "../scss/components/_notfound.scss";
import { GiMagnifyingGlass } from "react-icons/gi";

const NotFound = () => {
  return (
    <section id="#notfound">
      <Container>
        <div className="notfound-block">
          <GiMagnifyingGlass className="notfound-block-icon" />
          <p className="notfound-block-message">Page does not exist.</p>
          <div className="notfound-block-link">
            <Link to="/home">Home</Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default NotFound;