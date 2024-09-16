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
