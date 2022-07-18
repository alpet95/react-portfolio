import React from "react";
import Container from "../interface/Container";

import "../../scss/components/_error.scss";
import { BiErrorCircle } from "react-icons/bi";

const Error = () => {
  return (
    <section id="#error">
      <Container>
        <div className="error-block">
          <BiErrorCircle className="error-block-icon" />
          <p className="error-block-message">
            Failed to load news from the server.
            <br />
            Please try again later.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Error;