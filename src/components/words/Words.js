import React, { useState } from "react";
import WordsHeader from "./WordsHeader";
import WordsList from "./WordList";
import "./words.css";

const Words = () => {
  const [list, setList] = useState([]);
  const [word, setWord] = useState({
    eng: "",
    rus: "",
  });

  const changeRussian = (value) => {
    setWord({
      ...word,
      rus: value,
    });
  };

  const chnageEnglish = (value) => {
    setWord({
      ...word,
      eng: value,
    });
  };

  const onClickButton = () => {
    if (word.rus.trim().length > 0 && word.eng.trim().length > 0) {
      const newWord = {
        id: (list[list.length - 1]?.id || 0) + 1,
        rus: word.rus,
        eng: word.eng,
        isShowTranslate: false,
      };
      setList([...list, newWord]);
    }
    setWord({
      rus: "",
      eng: "",
    });
  };

  const onClickChange = (id) => {
    setList(
      list.map((el) => {
        if (el.id === id) {
          return { ...el, isShowTranslate: !el.isShowTranslate };
        } else {
          return el;
        }
      })
    );
  };

  const onDelete = (id) => {
    const filterList = list.filter((item) => item.id !== id);
    setList(filterList);
  };

  return (
    <div className="container">
      <div className="containerInputs">
        <WordsHeader
          onChangeRussian={changeRussian}
          onChangeEnglish={chnageEnglish}
          word={word}
        />
        <button onClick={onClickButton} className="containerInputsAdd">
          ДОБАВИТЬ КАРТОЧКУ
        </button>
      </div>
      <hr />
      <WordsList
        list={list}
        onClickChange={onClickChange}
        onDelete={onDelete}
      />
    </div>
  );
};

export default Words;
