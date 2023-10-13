import React from "react";
import WordCard from "./WordCard";

const WordsList = ({ list, onClickChange, onDelete }) => {
  return (
    <div className="containerWords">
      {list.map((el) => (
        <WordCard
          key={el.id}
          id={el.id}
          eng={el.eng}
          rus={el.rus}
          isShowTranslate={el.isShowTranslate}
          onClickChange={onClickChange}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default WordsList;
