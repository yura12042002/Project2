import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const syrop = ["без сиропа", "карамельный", "ореховый"];

function ItemCard({ name, price, basket, setBasket }) {
  const [currentSyrop, setCurrentSyrop] = useState("без сиропа");

  const withoutSyrop = currentSyrop === "без сиропа";

  const handleClickPlus = () => {
    const newItem = {
      id: uuidv4(),
      name,
      syrop: currentSyrop,
      count: 1,
      price,
      totalPrice: withoutSyrop ? price : price + 20,
    };
    if (
      basket.find(
        (elem) => elem.name === newItem.name && elem.syrop === newItem.syrop
      )
    ) {
      setBasket(
        basket.map((el) => {
          if (el.name === newItem.name && el.syrop === newItem.syrop) {
            return { ...el, count: el.count + 1 };
          } else {
            return el;
          }
        })
      );
    } else {
      setBasket([...basket, newItem]);
    }
  };
  const handleClickMinus = () => {
    const deleteItem = {
      name,
      syrop: currentSyrop,
    };
    setBasket(
      basket
        .map((el) => {
          if (
            el.name === deleteItem.name &&
            el.syrop === deleteItem.syrop &&
            el.count > 0
          ) {
            return { ...el, count: el.count - 1 };
          } else return el;
        })
        .filter((el) => {
          if (el.count === 0) {
            return !el;
          } else return el;
        })
    );
  };

  return (
    <div>
      <div className="block">
        <p>
          {name} {withoutSyrop ? price : price + 20} р
        </p>
        {syrop.map((el) => (
          <button
            className={currentSyrop === el ? "activeButton" : "blockSyrop"}
            onClick={() => setCurrentSyrop(el)}
          >
            {el}
          </button>
        ))}
        <div className="blockAmount">
          <button className="blockAmountPlus" onClick={() => handleClickPlus()}>
            +
          </button>
          {basket.map((el) =>
          el.name === name && el.syrop === currentSyrop ? (
            <p>{el.count}</p>
          ) : null
        )}
          <button
            className="blockAmountMinus"
            onClick={() => handleClickMinus()}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
