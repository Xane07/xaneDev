import React from "react";
import "./header.css";

class ScrollToAreaButton extends React.Component {
  scrollToAbout = () => {
    const targetArea = document.getElementById("abtsec");
    if (targetArea) {
      // Scroll to the target area smoothly
      targetArea.scrollIntoView({ behavior: "smooth" });
    }
  };
  scrollToHome = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  scrollToSkills = () => {
    const targetArea = document.getElementById("skills");
    if (targetArea) {
      // Scroll to the target area smoothly
      targetArea.scrollIntoView({ behavior: "smooth" });
    }
  };

  render() {
    return (
      <div className="header">
        <div className="logoDiv">
          <a className="mainLogo" href="">
            Xane.dev
          </a>
        </div>
        <div className="sectionsDiv">
          <a className="sections" onClick={this.scrollToHome}>
            Home
          </a>
          <a className="sections" onClick={this.scrollToAbout}>
            About
          </a>
          <a className="sections" onClick={this.scrollToSkills}>
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
          <a className="cntct">work with me</a>
        </div>
      </div>
    );
  }
}
export default ScrollToAreaButton;
