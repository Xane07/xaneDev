import React from "react";
import "./Text.css";
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Text() {
  console.log("text.jsx");
  return (
    <>
      <div className="textContainer">
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
        <p>Tech Stack |</p>
        <div className="icons">
        <FontAwesomeIcon icon="fa-brands fa-html5" />
        <FontAwesomeIcon icon="fa-brands fa-html5" />
        <FontAwesomeIcon icon="fa-brands fa-js" />
        <FontAwesomeIcon icon="fa-brands fa-node" />
        <FontAwesomeIcon icon="fa-brands fa-react" />
        </div>
      </div>
    </>
  );
}

export default Text;
