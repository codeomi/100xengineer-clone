import React from "react";
import "./section3.css";

function Section3() {
  return (
    <>
      <div className="section3-container mobile-global-padding">
        <div className="heading-container">
          <div className="heading-description text-size-small text-weight-light body-color">
            PLACEMENT ASSITANCE PROVIDED
          </div>
          <div className="heading h-2 text-size-large">
            Our students work at places like
          </div>
        </div>
        <div className="company-names flex-row">
          <div className="company-card-name small-card">
            <img
              src="https://www.100xengineers.com/images/ZS_BIG.png"
              loading="lazy"
              sizes="126px"
              alt=""
              width="126"
            />
          </div>
          <div className="company-card-name">
            <img
              src="https://www.100xengineers.com/images/qualcomm-logo-black-and-white.png"
              loading="lazy"
              sizes="126px"
              alt=""
              width="126"
            />
          </div>
          <div className="company-card-name">
            <img
              src="https://www.100xengineers.com/images/jpmorgan-chase-logo-black-and-white.png"
              loading="lazy"
              sizes="126px"
              alt=""
              width="126"
            />
          </div>
          <div className="company-card-name">
            <img
              src="https://www.100xengineers.com/images/oyo.svg"
              loading="lazy"
              // sizes="126px"
              alt=""
              width="75"
            />
          </div>
        </div>
        <div className="text-size-regular text-weight-light body-color  font-family-Space margin-top">and many more top companies</div>
      </div>
    </>
  );
}

export default Section3;
