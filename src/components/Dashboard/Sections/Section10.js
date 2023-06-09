import React from "react";
import "./section10.css";

const Section10 = () => {
  return (
    <>
      <div className="section10-container  mobile-global-padding  section-seperator section-margin-top">
        <div className="heading-container margin-bottom ">
          <div className="heading-description text-size-small text-weight-light body-color">
            Get intensive technical up-skilling
          </div>
          <div className="heading h-2 text-size-large">32 Weeks Curriculum</div>
        </div>
        <div className="flex-row">
          <div className="curicullum-card text-size-small ">Theory</div>
          <div className="curicullum-card text-size-small">
            Project Building
          </div>
          <div className="curicullum-card text-size-small">Interview Prep</div>
        </div>
        <div className="varibale-table"></div>
        <div className="btn-wrapper">
          <a href="/" className="button-container btn-container-3d">
            <div className="heading-button btn-custom-2 btn"></div>
            <div className="bottom-btn-3d"></div>
            <div className="btn-text-3d">Join Free Webinar</div>
          </a>
          <div className="dates text-size-xsmall">Dates to be announced</div>
        </div>
      </div>
    </>
  );
};

export default Section10;
