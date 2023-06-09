import React from "react";
import "./section7.css";

const Section7 = () => {
  return (
    <>
      <div className="big-card-container  mobile-global-padding flex-center">
        <div className="big-card section-seperator">
          <div className="big-card-details">
            <div className="card-heading">Who is this course for?</div>
            <div className=" big-card-description">
              Anyone who is looking to upskill themselves via learning React -
              no prior experience in React is required. <br />
              <br />
              Be it you're a college student, fresher at a company or have a few
              years of experience, this is for anyone who wants to become a
              world-class React Developer.
            </div>
            <div className="text-link link-button">
              Join Free Webinar{" "}
              <img
                src="https://www.100xengineers.com/images/Caret-right.svg"
                alt=""
              />
            </div>
          </div>
          <img
            className="question-img"
            src="https://www.100xengineers.com/images/Frame-98.svg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Section7;
