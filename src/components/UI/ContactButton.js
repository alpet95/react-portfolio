import React from "react";
// ========== styles ==========
import "./contact-button.scss";

const ContactButton = (props) => {
  return (
    <div className="contact_button">
      <img className="contact_button__image" src={props.image} />
      {props.children}
    </div>
  );
};

export default ContactButton;