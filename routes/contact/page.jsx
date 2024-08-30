import React, { useState } from "react";
import "./contact.css";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleClick = () => {
    let emailBar = document.querySelector(".email");
    let isEmail = () => {
      navigate("/");
    };

    email ? isEmail() : emailBar.classList.toggle("redShake");
  };
  return (
    <>
      <div className="window">
        <div className="box">
          <input
            className="elements email"
            type="text"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            className="elements subject"
            type="text"
            placeholder="Subject"
          />
          <textarea className="elements" placeholder="Message" />
          <button className="subContact" onClick={handleClick} type="submit">
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Contact;
