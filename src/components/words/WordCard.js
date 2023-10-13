import React from "react";

const WordCard = ({ id, eng, rus, isShowTranslate, onClickChange, onDelete }) => {
  return (
    <div
      className="cards"
      key={id}
      style={{ background: isShowTranslate ? "#e29190" : "#91c9a4"}}
    >
      <button className="cardsButton" onClick={() => onClickChange(id)}>
        <p className="word">{isShowTranslate ? rus : eng}</p>
      </button>
      <button className="basket" onClick={() => onDelete(id)}>
        <img
          className="icon"
          src="https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-39-256.png"
        />
      </button>
    </div>
  );
};

export default WordCard;
