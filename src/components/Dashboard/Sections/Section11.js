import React from "react";
import "./section11.css";
import SkillsCard from "../Cards/SkillsCard.js";

const Section11 = () => {
  return (
    <>
      <div className="section11-container  mobile-global-padding section-seperator section-margin-top">
        <div className="heading-container margin-bottom ">
          <div className="heading-description text-size-small text-weight-light body-color">
            getting into it
          </div>
          <div className="heading text-size-large">
            Skills that you’ll learn
          </div>
        </div>
        <div className="skills-container">
          <div className="flex-row skills-row">
            <SkillsCard text="HTML" />
            <SkillsCard text="CSS" />
            <SkillsCard text="JS" />
            <SkillsCard text="JSX" />
            <SkillsCard text="Web Development" />
            <SkillsCard text="Data Structures" />
            <SkillsCard text="React Hooks" />
            <SkillsCard text="Animations & Effects" />
          </div>
          <div className="flex-row skills-row">
            <SkillsCard text="Optimising React Applications" />
            <SkillsCard text="State Management" />
            <SkillsCard text="CSS" />
            <SkillsCard text="JS" />
            <SkillsCard text="Animations & Effects" />
            <SkillsCard text="Web Development" />
            <SkillsCard text="Data Structures" />
            <SkillsCard text="React Hooks" />
          </div>
          <div className="flex-row skills-row">
            <SkillsCard text="Lists and Keys" />
            <SkillsCard text="State Management" />
            <SkillsCard text="CSS" />
            <SkillsCard text="JS" />
            <SkillsCard text="Optimising React Applications" />
            <SkillsCard text="Data Structures" />
            <SkillsCard text="React Router" />
            <SkillsCard text="Data Structures" />
            <SkillsCard text="Data Management" />
          </div>
        </div>
        <div className="text-size-regular text-weight-light body-color  font-family-Space margin-top end-p">and many more practical skills</div>
      </div>
    </>
  );
};

export default Section11;
