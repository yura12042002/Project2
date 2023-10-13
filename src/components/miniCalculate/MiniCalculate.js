import React from "react";
import { useState, useEffect } from "react";
import "./miniCalculate.css";

  const arrTime = [
    {
      label: "3 месяца",
      value: 3,
    },
    {
      label: "6 месяцев",
      value: 6,
    },
    {
      label: "9 месяцев",
      value: 9,
    },
  ];

  const arrType = [
    {
      label: "Российские акции",
      value: 0.1,
    },
    {
      label: "Американские акции",
      value: 0.15,
    },
    {
      label: "Валюта",
      value: 0.11,
    },
  ];

const MiniCalculate = () => {
  const [invest, setInvest] = useState(0);
  // const [result, setResult] = useState(0);
  const [time, setTime] = useState(0);
  const [type, setType] = useState(0);

  const onChangeInvest = (event) => {
    setInvest(event.target.value);
  };

  const handleTimeClick = (event) => {
    setTime(event.target.value);
  };

  const handleTypeClick = (event) => {
    setType(event.target.value);
  };

  const getResult = () => {
    if (time > 0 && type > 0) {
      let income = +invest;
      for (let i = 0; i < +time; i++) {
        income += income * (+type / 12);
      }
      return income.toFixed(2)
    }
  }

  const result = getResult()

  return (
    <div className="container">
      <p className="term">Введите сумму вклада</p>
      <input
        className="inputInvest"
        onChange={onChangeInvest}
        value={invest}
        type="number"
        min={0}
      />
      <p>Срок инвестирования</p>
      <div className="chooseTime">
        {arrTime.map((el) => (
          <button
            className={time == el.value ? "activeButton" : ""}
            value={el.value}
            onClick={handleTimeClick}
          >
            {el.label}
          </button>
        ))}
      </div>
      <p>Тип инвестрирования</p>
      <div className="chooseCurrency">
        {arrType.map((el) => (
          <button
            className={type == el.value ? "activeButton" : ""}
            value={el.value}
            onClick={handleTypeClick}
          >
            {el.label}
          </button>
        ))}
      </div>
      <p>Ваша сумма вклада по истечению срока будет равна {result} ₽</p>
    </div>
  );
};

export default MiniCalculate;
