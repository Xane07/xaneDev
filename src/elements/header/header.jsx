import React from "react";
import "./header.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ScrollToAreaButton = () => {
  useEffect(() => {
    fetch("https://json-wlj8.onrender.com/tasks")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);
  const navigate = useNavigate();
  const api = "https://json-wlj8.onrender.com/tasks";

  const scrollToAbout = () => {
    const targetArea = document.getElementById("abtsec");
    if (targetArea) {
      targetArea.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToHome = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSkills = () => {
    const targetArea = document.getElementById("skills");
    if (targetArea) {
      targetArea.scrollIntoView({ behavior: "smooth" });
    }
  };

  const push = () => {
    navigate("/contact");
  };

  return (
    <div className="header">
      <div className="logoDiv">
        <a className="mainLogo" href="">
          Xane.dev
        </a>
      </div>
      <div className="sectionsDiv">
        <a className="sections" onClick={scrollToHome}>
          Home
        </a>
        <a className="sections" onClick={scrollToAbout}>
          About
        </a>
        <a className="sections" onClick={scrollToSkills}>
          Skills
        </a>
        <a
          className="sections"
          href="https://github.com/Xane07"
          target="_blank"
        >
          Projects
        </a>
      </div>
      <div className="contact">
        <a onClick={push} className="cntct">
          work with me
        </a>
      </div>
    </div>
  );
};

export default ScrollToAreaButton;
