import React from "react";
import "./section12.css";

const Section12 = () => {
  return (
    <>
      <div className="section12-container section-seperator section-margin-top">
        <div className="heading-container margin-bottom ">
          <div className="heading-description text-size-small text-weight-light body-color">
            FUTURE PROOF YOURSELF
          </div>
          <div className="heading text-size-large">
            Get a taste of the Real Course
          </div>
        </div>
        <div className="btn-wrapper">
          <a href="/" className="button-container  btn-container-3d">
            <div className="heading-button white-button  btn"></div>
            <div className="white-bottom-btn-3d"></div>
            <div className="btn-text-3d">Join Free Webinar</div>
          </a>
          <div className="dates text-size-xsmall">
            Webinar dates to be announced
          </div>
        </div>
        <div className="bg-img-wrapper"></div>
      </div>
    </>
  );
};

export default Section12;
