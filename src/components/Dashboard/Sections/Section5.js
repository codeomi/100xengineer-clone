import React from "react";
import "./section5.css";
import Section5Card from "./Section5Card.js";

const Section5 = () => {
  return (
    <>
      <div className="section5-container section-seperator">
        <div className="heading-container">
          <div className="heading-description text-size-small text-weight-light body-color">
            WHY LEARN REACT?
          </div>
          <div className="heading text-size-large">Future proof yourself</div>
        </div>
        <div className="lines-bg">
          <div className="black-box-bg">
            <div
              id="futire-card-container"
              className="card-layout flex-row margin-top"
            >
              <Section5Card
                heading="Amazing Salaries"
                img="https://www.100xengineers.com/images/Frame-2.svg"
                description="The average starting salary for a React-Engineer is 4 LPA. This can shoot upto 60 LPA at mid/senior levels with just 2-3 years of experience."
              />
              <Section5Card
                heading="High Demand"
                img="https://www.100xengineers.com/images/Frame-1.svg"
                description="The high scalability and easy-to-maintain factors make React a sought after skill in the tech world. React-based jobs are expected to grow by 22% in this decade."
              />
              <Section5Card
                heading="Language of the Future"
                img="https://www.100xengineers.com/images/Frame.svg"
                description="React is known to have a great ease-of-use with features like reusable components, backward compatibility, concurrent modes and it being very SEO friendly. Thus, everybody wants React Engineers!"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section5;
