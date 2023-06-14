import React from "react";
import "./section1.css";
import Section2 from "./Section2";

const Section1 = () => {
  return (
    <>
      <div className="section-1-container mobile-global-padding background-img">
        <div className="logo-container">
          <img
            className="logo"
            src="https://www.100xengineers.com/images/LOD-logo.svg"
            alt="logo"
          />
        </div>
        <div className="slider-container">
          <div class="logo-hiding-div-left slider-hiding"></div>
          <div className="slides  slider">
            <div className="silder-button slider-animation">
              Project Based Learning
            </div>
            <div className="silder-button slider-animation">Live Classes</div>
            <div className="silder-button slider-animation">
              Real World Assistance
            </div>
            <div className="silder-button slider-animation">
              Placement Assistance
            </div>
            <div className="silder-button slider-animation">
              Placement Assistance
            </div>
            <div className="silder-button slider-animation">
              Elite Developer Community
            </div>
          </div>
          <div class="logo-hiding-div-right slider-hiding"></div>
        </div>
        
        <Section2 />
      </div>
    </>
  );
};

export default Section1;
