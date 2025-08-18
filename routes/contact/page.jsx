import React, { useState } from "react";
import "./contact.css";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleClick = () => {
    let emailBar = document.querySelector(".email");
    let isEmail = async () => {
      const res = await fetch("https://json-wlj8.onrender.com/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, subject, message }),
      });
      navigate("/");
    };

    email ? isEmail() : emailBar.classList.toggle("redShake");
  };
  return (
    <><div className="cntHeader">
        <a className="ContactLogo" href="/">XaneDev</a>
        <a className="back" href="/">&larr;</a>
    </div>
        <div className="line"><h2>Please fill out the form below to get in touch with me!</h2></div>
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
            onChange={(e) => {
              setSubject(e.target.value);
            }}
          />
          <textarea
            className="elements"
            placeholder="Message"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <button className="subContact" onClick={handleClick} type="submit">
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Contact;
