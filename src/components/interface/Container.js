import React from "react";
import "../../scss/components/_container.scss";

const Container = (props) => {
  const classBundle = `${"container"} ${
    props.className ? props.className : ""
  }`;
  return <div className={classBundle}>{props.children}</div>;
};

export default Container;