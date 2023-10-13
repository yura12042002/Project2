import React from "react";
import "./words.css";

const WordsHeader = ({ onChangeRussian, onChangeEnglish, word}) => {
  const firstInputValue = (event) => {
    onChangeRussian(event.target.value);
  };

  const secondInputValue = (event) => {
    onChangeEnglish(event.target.value);
  };

  return (
    <div>
      <div className="containerInputsBlock">
        <p className="containerInputsBlockText">Введите слово:</p>
        <input
          className="containerInputsBlockEnter"
          onChange={firstInputValue}
          maxLength="15"
          value={word.rus}
        />
      </div>
      <div className="containerInputsBlock">
        <p className="containerInputsBlockText">Введите перевод:</p>
        <input
          className="containerInputsBlockEnter"
          onChange={secondInputValue}
          maxLength="15"
          value={word.eng}
        />
      </div>
    </div>
  );
};

export default WordsHeader;
