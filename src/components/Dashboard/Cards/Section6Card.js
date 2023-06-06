import React from "react";
import "./section6Card.css";

const Section6Card = ({ img, heading, description }) => {
  return (
    <>
      <div className="section6-card-container">
        <div className="feature-img-wrapper">
          <img src={img} alt="" />
        </div>
        <div className="feature-content-wrap">
          <div className="card-heading">{heading}</div>
          <div className="feature-description">{description}</div>
        </div>
      </div>
    </>
  );
};

export default Section6Card;
