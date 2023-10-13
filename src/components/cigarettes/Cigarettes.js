import React, { useState } from "react";
import "./cigarettes.css";

const dateOptions = [
  {
    label: "в день",
    value: 1,
  },
  {
    label: "в месяц",
    value: 30,
  },
  {
    label: "в год",
    value: 365,
  },
];

function Cigarettes() {
  const [amount, setAmount] = useState("");
  const [price, setPrice] = useState("");
  const [time, setTime] = useState(1);

  const onChangeAmount = (event) => {
    setAmount(event.target.value);
  };

  const onChangePrice = (event) => {
    setPrice(event.target.value);
  };

  const onChangeTime = (event) => {
    setTime(event.target.value);
  };

  const calculatedSpending =
    Math.ceil((parseInt(amount) * time) / 20) * parseInt(price) || 0;

  const onClickClean = () => {
    setAmount("");
    setPrice("");
    setTime("");
  };

  return (
    <div className="container">
      <div className="block">
        <p>Сколько сигарет вы выкуриваете в день?</p>
        <input
          onChange={onChangeAmount}
          className="contentInput"
          value={amount}
        />
      </div>
      <div className="block">
        <p>Введите цену пачки сигарет, ₽</p>
        <input
          onChange={onChangePrice}
          className="contentInput"
          value={price}
        />
      </div>
      <select className="time" onChange={onChangeTime} value={time}>
        {dateOptions.map((el) => (
          <option value={el.value}>{el.label}</option>
        ))}
      </select>

      <p>
        Вы тратите {calculatedSpending} ₽{" "}
        {dateOptions.find((el) => el.value == time)?.label}
      </p>

      <button className="cleaner" onClick={onClickClean}>
        ОЧИСТИТЬ ВСЕ ПОЛЯ
      </button>
    </div>
  );
}

export default Cigarettes;
