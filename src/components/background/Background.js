import React from "react";
import { useState } from "react";
import "./background.css";

const Background = () => {
  const [colorFirst, setColorFirst] = useState("");
  const [colorSecond, setColorSecond] = useState("");
  const [result, setResult] = useState("");

  const valueColorFirst = (event) => {
    setColorFirst(event.target.value);
  };

  const valueColorSecond = (event) => {
    setColorSecond(event.target.value);
  };

  const onButtonClick = () => {
    setResult(
      `linear-gradient(to bottom right, #${colorFirst}, #${colorSecond})`
    );
  };

  return (
    <div className="container" style={{ background: result }}>
      <input
        maxlength="6"
        className="containerInput"
        onChange={valueColorFirst}
      />
      <input
        maxlength="6"
        className="containerInput"
        onChange={valueColorSecond}
      />
      <button className="containerButton" onClick={onButtonClick}>
        ПРИМЕНИТЬ
      </button>
    </div>
  );
};

export default Background;
