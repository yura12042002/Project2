import React, { useState } from "react";
import "./style.css";
import data from "../../data/Data.json";

const initialItems = Object.fromEntries(data.data.map(el => [el.question, '']))

console.log(initialItems)

function FirstWorkLocalStorage() {
  const [items, setItems] = useState(initialItems);

  const inputOfAnswer = (question, event) => {
    setItems((prevItems) => ({
      ...prevItems,
      [question]: event.target.value,
    }));
  };

  const handleClickSend = () => {
    const allAnswersAreCompleted = Object.values(items).every(
      (el) => el.trim().length > 0
    );
    if (allAnswersAreCompleted) {
    localStorage.setItem("answers", JSON.stringify(items));
      setItems(initialItems);
    } else alert("Пожалуйста, заполните все поля.");
  }
  
  return (
    <div className="container">
      {data.data.map((el) => (
        <div className="containerItems" key={el.id}>
          <p>{el.question}</p>
          <input
            onChange={(event) => inputOfAnswer(el.question, event)}
            value={items[el.question]}
            placeholder="*Введите текст"
          />
        </div>
      ))}
      <button onClick={handleClickSend}>Отправить</button>
    </div>
  );
}

export default FirstWorkLocalStorage;
