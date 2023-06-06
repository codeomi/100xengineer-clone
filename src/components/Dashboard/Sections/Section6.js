import React from "react";
import "./section6.css";
import Section6Card from "../Cards/Section6Card";

const Section6 = () => {
  return (
    <>
      <div className="section6-container section-seperator">
        <div className="heading-container">
          <div className="heading-description text-size-small text-weight-light body-color">
            become a world class coder in just 3 months
          </div>
          <div className="heading text-size-large">
            Coders make some of the highest <br /> salaries globally
          </div>
        </div>
        <div className="grid-template-layout margin-top">
          <Section6Card
            heading="Placement Assistance"
            description="Having placed students in companies like Goldman Sachs, OYO, JP Morgan & Qualcomm, get expert assistance on your placements."
            img="https://www.100xengineers.com/images/placement-assist-1.svg"
          />
          <Section6Card
            heading="Live Classes"
            description="Get live personalized support and mentoring from the mentor during the bi-weekly live sessions."
            img="https://www.100xengineers.com/images/Frame_1.svg"
          />
          <Section6Card
            heading="Real-World Assignments"
            description="Assignments entirely based on real-world problems for the smoothest transition from course to job."
            img="https://www.100xengineers.com/images/Assignments-1.svg"
          />
          <Section6Card
            heading="Interview Preparation"
            description="A dedicated bunch of live sessions towards the end of the course for interview preps focused on getting you placed immediately."
            img="https://www.100xengineers.com/images/Group-59.svg"
          />
        </div>
        <div className="feature-grid global-padding">
          {" "}
          <div className="feature-card grid-area-1">
            <div className="text-size-regular font-color-white">
              Lifetime Elite Developer Community Access
            </div>
          </div>
          <div className="feature-card ">
            <div className="text-size-regular font-color-white">
              Weekend Classes only
            </div>
          </div>
          <div className="feature-card">
            <div className="text-size-regular font-color-white">
              One-year access to entire Course Content
            </div>
          </div>
          <div className="feature-card grid-area-2">
            <div className="text-size-regular font-color-white">
              Assignment Discussion Sessions
            </div>
          </div>
          <div className="feature-card">
            <div className="text-size-regular font-color-white">
              Project-based Learning
            </div>
          </div>
          <div className="feature-card">
            <div className="text-size-regular font-color-white">
              Virtual Campus for Events (DJ Nights, Quiz, etc)
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-card-inner-wrapper">
              <div className="bonus-button">Bonus</div>
              <div className="text-size-regular font-color-white">
                Session on Resume Building
              </div>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-card-inner-wrapper">
              <div className="bonus-button">Bonus</div>
              <div className="text-size-regular font-color-white">
                Session on how to LinkedIn
              </div>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-card-inner-wrapper">
              <div className="bonus-button">Bonus</div>
              <div className="text-size-regular font-color-white">
                Bonus Session on MAANG Applications
              </div>
            </div>
          </div>
          <div className=""></div>
          <div className="feature-card">
            <div className="feature-card-inner-wrapper">
              <div className="bonus-button">Bonus</div>
              <div className="text-size-regular font-color-white">
                Guest Lectures by India’s Top Coders
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section6;
