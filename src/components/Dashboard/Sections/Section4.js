import React from "react";
import "./section4.css";

const Section4 = () => {
  return (
    <>
      <div className="section4-container padding-top-btm-container">
        <div className="heading-container">
          <div className="heading-description text-size-small text-weight-light body-color">
            learn from a react codebase constributors
          </div>
          <div className="heading text-size-large">Quick Glance</div>
        </div>
        <div className="bg-glow">
        <div className="flex-row">

          <div className="quick-glance-icons-container">
            <div className="icon">
              <img
                src="https://www.100xengineers.com/images/Group-34.svg"
                alt=""
              />
            </div>
            <div className="text-weight-medium text-color-grey">
              Fully Online - <br />
              at your Convenience
            </div>
          </div>

          <div className="quick-glance-icons-container">
            <div className="icon">
              <img
                src="https://www.100xengineers.com/images/Group-35.svg"
                alt=""
              />
            </div>
            <div className="text-weight-medium text-color-grey">
              90 Days
              <br />
              Cohort Based Course
            </div>
          </div>
          <div className="quick-glance-icons-container">
            <div className="icon">
              <img
                src="https://www.100xengineers.com/images/Group-33.svg"
                alt=""
              />
            </div>
            <div className="text-weight-medium text-color-grey">
              Cohort Start-Date to be
              <br /> Announced
            </div>
          </div>
          <div className="quick-glance-icons-container">
            <div className="icon">
              <img
                src="https://www.100xengineers.com/images/Group-32.svg"
                alt=""
              />
            </div>
            <div className="text-weight-medium text-color-grey">
              6-10 hr Effort per week{" "}
            </div>
          </div>
        </div>
        </div>
        <div className="link-to-form-container">
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

export default Section4;
