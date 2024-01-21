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
      <div className="container">
        <div className="textContainer" id="home">
          <h3 className="text">
            Hi, I'm Pratham aka <span className="text purple">Xane</span> and I
            am a
          </h3>
          <div>
            <span className="text2"></span>
            <span className="cursor">
              <Typewriter
                options={{
                  strings: [
                    '<span id="words">Coder.</span>',
                    '<span id="words">Developer.</span>',
                    '<span id="words"style="color: #FF0000;">Youtuber.</span>',
                    '<span id="words">Learner.</span>',
                  ],
                  autoStart: true,
                  loop: true,
                  // optional delay between each character
                  html: true, // enables HTML tags in the strings
                }}
              />
            </span>
          </div>
        </div>
        <span className="imageContainer">
          <img src="resources/main1 (1).png" alt="Image 1" className="image1" />
          <img src="resources/main2 (1).png" alt="Image 2" className="image2" />
        </span>
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
