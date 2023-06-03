import React from 'react'
import "./Dashboard.css"
import Section1 from "./Sections/Section1.js"
import Section2 from "./Sections/Section2.js"
import Section3 from "./Sections/Section3.js"
import Section4 from "./Sections/Section4.js"

const Dashboard = () => {
  return (
   <>
    <div className="dashboard-container">
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
    </div>
   </>
  )
}

export default Dashboard