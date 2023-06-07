import React from "react";
import "./Dashboard.css";
import Section1 from "./Sections/Section1.js";
import Section3 from "./Sections/Section3.js";
import Section4 from "./Sections/Section4.js";
import Section5 from "./Sections/Section5.js";
import Section6 from "./Sections/Section6.js";
import Section7 from "./Sections/Section7.js";
import Section8 from "./Sections/Section8.js";
import Section9 from "./Sections/Section9.js";
import Section10 from "./Sections/Section10.js";
import Section11 from "./Sections/Section11.js";
import Section12 from "./Sections/Section12.js";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard-container">
        <Section1 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        <Section9 />
        <Section10 />
        <Section11 />
        <Section12 />
      </div>
    </>
  );
};

export default Dashboard;
