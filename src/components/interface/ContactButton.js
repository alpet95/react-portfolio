import React from "react";
// ========== styles ==========
import "../../scss/components/_contact-button.scss";

const ContactButton = (props) => {
  return (
    <div className="contact-button">
      <a href={props.link} target="_blank" rel="noreferrer">
        <img
          className="contact-button__image"
          src={props.image}
          alt={props.id}
        />
      </a>
      {props.children}
    </div>
  );
};

export default ContactButton;