import React from "react";
import "./Text.css";
import Typewriter from "typewriter-effect";

function Text() {
  console.log("text.jsx");
  return (
    <div className="textContainer">
      <h3 className="text">
        Hi, I'm Pratham aka <span className="text purple">Xane</span> and I am a
      </h3>
      <div>
        <span className="text2"></span>
        <span className="cursor">
          <Typewriter
            options={{
              strings: ["Coder.", "Developer.","Youtuber.","Learner."],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </div>
    </div>
  );
}

export default Text;
