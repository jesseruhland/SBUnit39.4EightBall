import React, { useState } from "react";
import "./EightBall.css";

const EightBall = ({ answers }) => {
  const [color, setColor] = useState("black");
  const [msgText, setMsgText] = useState("Think of a Question");
  const updateEightBall = () => {
    let idx = Math.floor(Math.random() * answers.length);
    setColor(answers[idx].color);
    setMsgText(answers[idx].msg);
  };
  return (
    <div
      className="EightBall"
      onClick={updateEightBall}
      style={{ backgroundColor: color }}
    >
      <p className="EightBall-text">{msgText}</p>
    </div>
  );
};

export default EightBall;
