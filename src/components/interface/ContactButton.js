import React from "react";
// ========== styles ==========
import "../../scss/components/_contact-button.scss";

const ContactButton = (props) => {
  return (
    <div className="contact-button">
      <img className="contact-button__image" src={props.image} />
      {props.children}
    </div>
  );
};

export default ContactButton;
