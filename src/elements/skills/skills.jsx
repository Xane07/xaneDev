import React from "react";
import "./main.css";
import SkillCards from "./skillCards";

class Skills extends React.Component {

  render() {
 

    return (
      <>
        <div className="skillCards" id="skills">
          <h3 className="skillh3 text-5xl">My Skills</h3>
        </div>
        <div className="cards123">
          <SkillCards
            whichEnd="FrontEnd" skillName="MERN"
          />
          <SkillCards
            whichEnd="BackEnd" skillName="Node.js + python"
          />
          <SkillCards
            whichEnd="FullStack" skillName="MERN + Node"
          />
        </div>
      </>
    );
  }
}

export default Skills;
