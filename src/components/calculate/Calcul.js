import { useState } from "react";
import React from "react";
import "./Calcul.css";

function Calcul() {
  const [numberFirst, setNumberFirst] = useState("");
  const [numberSecond, setNumberSecond] = useState("");
  const [operation, setOperation] = useState();
  const [result, setResult] = useState();

  const currentNumberFirst = (event) => {
    setNumberFirst(+event.target.value);
  };

  const currentNumberSecond = (event) => {
    setNumberSecond(+event.target.value);
  };

  const onButtonClick = (el) => {
    if (el === "+") {
      setResult(numberFirst + numberSecond);
    }
    if (el === "-") {
      setResult(numberFirst - numberSecond);
    }
    if (el === "*") {
      setResult(numberFirst * numberSecond);
    }
    if (el === "/") {
      setResult(numberFirst / numberSecond);
    }
    setOperation(el);
  };

  const onClickClear = () => {
    setResult("");
    setNumberFirst("");
    setNumberSecond("");
  };

  return (
    <div className="mainBlock">
      <p className="mainBlockName">Simple calculator</p>
      <div className="mainBlockContent">
        <div className="mainBlockContentInputs">
          <input
            className="mainBlockContentInputFirst"
            onChange={currentNumberFirst}
            value={numberFirst}
          ></input>
          <input
            className="mainBlockContentInputSecond"
            onChange={currentNumberSecond}
            value={numberSecond}
          ></input>
        </div>
        <div className="mainBlockContentButton">
          <button
            className={`mainBlockContentButtonAdd ${
              operation === "+" ? "active" : ""
            }`}
            onClick={() => onButtonClick("+")}
          >
            + Add
          </button>
          <button
            className={`mainBlockContentButtonAdd ${
              operation === "-" ? "active" : ""
            }`}
            onClick={() => onButtonClick("-")}
          >
            - Subtract
          </button>
          <button
            className={`mainBlockContentButtonAdd ${
              operation === "*" ? "active" : ""
            }`}
            onClick={() => onButtonClick("*")}
          >
            x Multiply
          </button>
          <button
            className={`mainBlockContentButtonAdd ${
              operation === "/" ? "active" : ""
            }`}
            onClick={() => onButtonClick("/")}
          >
            / Divide
          </button>
        </div>
        <div className="mainBlockContentLast">
          <input
            className="mainBlockContentLastInput"
            placeholder={result}
            readonly="readonly"
          ></input>
          <button
            className="mainBlockContentButtonClear"
            onClick={onClickClear}
          >
            CLEAR
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calcul;
