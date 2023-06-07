import React from "react";
import "./section8.css";

const Section8 = () => {
  return (
    <>
      <div className="section8-container section-seperator ">
        <div className="heading-container ">
          <div className="heading-description text-size-small text-weight-light body-color">
            OUR MENTORS HAVE GIVEN TECH TALKS AT
          </div>
          <div className="heading text-size-large">
            Inspired and mentored thousands
          </div>
        </div>
        <div className="flex-row margin-top">
          <div className="small-card">IBM</div>
          <div className="small-card">Hiver</div>
          <div className="small-card">React</div>
          <div className="small-card">ZS</div>
        </div>
      </div>
    </>
  );
};

export default Section8;
