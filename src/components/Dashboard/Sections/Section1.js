import React from "react";
import "./section1.css";
import Section2 from "./Section2";

const Section1 = () => {
  return (
    <>
      <div className="section-1-container background-img">
        <div className="logo-container">
          <img
            className="logo"
            src="https://www.100xengineers.com/images/LOD-logo.svg"
            alt="logo"
          />
        </div>
        <div className="slider-container">
          <div className="silder-button">Project Based Learning</div>
          <div className="silder-button">Project Based Learning</div>
          <div className="silder-button">Project Based Learning</div>
          <div className="silder-button">Project Based Learning</div>
          <div className="silder-button">Project Based Learning</div>
        </div>
        <Section2/>
      </div>
    </>
  );
};

export default Section1;
