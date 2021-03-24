import React from "react";
import "./style.css";
// a simple wrapper function to contain everything within the app
function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

export default Wrapper;
