import React from "react";
import "./main.css";
import SkillCards from "./skillCards";

class Skills extends React.Component {
  render() {
    return (
      <>
        <div className="skillCards" id="skills">
          <h3 className="skillh3">My Skills</h3>
        </div>
        <div className="cards123">
          <SkillCards /><SkillCards /><SkillCards />
        </div>
      </>
    );
  }
}

export default Skills;
