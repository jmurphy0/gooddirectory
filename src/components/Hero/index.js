import "./style.css";
//import Background from "../assets/images/DigitalImage.jpg";
import React from "react";
// basic function return the hero image with text overlay
function Hero() {
  return (
    <div className="hero text-center">
      {/* <Background /> */}
      <h1 id="title">Employee Directory</h1>
      <p className="text">
        Search the directory or click the column you'd like to sort
      </p>
    </div>
  );
}

export default Hero;
