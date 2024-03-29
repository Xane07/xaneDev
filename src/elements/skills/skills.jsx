import React from "react";
import "./main.css";
import SkillCards from "./skillCards";

class Skills extends React.Component {
  render() {
    let skills = {
      "front-end": ["html", "css", "js", "React.js"],
      "back-end": ["node.js", "python"],
      "full-stack": ["Next.js"]
    };

    return (
      <>
        <div className="skillCards" id="skills">
          <h3 className="skillh3 text-5xl">My Skills</h3>
        </div>
        <div className="cards123">
          <SkillCards
            whichEnd="front-end"
            skillName={skills["front-end"].join(", ")}
          />
          <SkillCards
            whichEnd="back-end"
            skillName={skills["back-end"].join(", ")}
          />
          <SkillCards
            whichEnd="full-stack"
            skillName={skills["full-stack"].join(", ")}
          />
        </div>
      </>
    );
  }
}

export default Skills;
