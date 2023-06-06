import React from "react";
import "./section5Card.css";

const Section5Card = ({ heading, img, description }) => {
  return (
    <>
      <div className="card-container">
        <div className="image-container">
          <img className="small-image" src={img} alt="" />
        </div>
        <div className="card-heading">{heading}</div>
        <div className="card-description text-size-small">{description}</div>
      </div>
    </>
  );
};

export default Section5Card;
