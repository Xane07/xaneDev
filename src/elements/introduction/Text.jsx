import React from "react";
import "./Text.css";
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faJs,
  faNode,
  faReact,
  faCss3Alt,
  faPython,
} from "@fortawesome/free-brands-svg-icons";

function Text() {
  console.log("text.jsx");
  return (
    <>
      <div className="textContainer" id="home">
        <h3 className="text">
          Hi, I'm Pratham aka <span className="text purple">Xane</span> and I am
          a
        </h3>
        <div>
          <span className="text2"></span>
          <span className="cursor">
            <Typewriter
              options={{
                strings: ["Coder.", "Developer.", "Youtuber.", "Learner."],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </div>
      </div>
      <div className="skills">
        <p>
          <span className="stackText">Tech Stack &nbsp;&nbsp;|</span>
          <span className="allTechicons">
            <span className="icons">
              <FontAwesomeIcon icon={faHtml5} />
            </span>
            <span className="icons">
              <FontAwesomeIcon icon={faCss3Alt} />
            </span>
            <span className="icons">
              <FontAwesomeIcon icon={faJs} />
            </span>
            <span className="icons">
              <FontAwesomeIcon icon={faNode} />
            </span>
            <span className="icons">
              <FontAwesomeIcon icon={faReact} />
            </span>
            <span className="icons">
              <FontAwesomeIcon icon={faPython} />
            </span>
          </span>
        </p>
      </div>
    </>
  );
}

export default Text;
