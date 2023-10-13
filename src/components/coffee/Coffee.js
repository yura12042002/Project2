import React from "react";
import "./coffee.css";
import { useState } from "react";
import "./ItemCard";
import ItemCard from "./ItemCard";
import Basket from "./Basket";

const defaultItems = [
  {
    coffee: "Латте",
    price: 200,
  },
  {
    coffee: "Капучино",
    price: 250,
  },
  {
    coffee: "Айс латте",
    price: 260,
  },
];

function Coffee() {
  const [basket, setBasket] = useState([]);

  return (
    <div>
      <div className="menu">
        {defaultItems.map((el, index) => (
          <ItemCard
            name={el.coffee}
            price={el.price}
            setBasket={setBasket}
            basket={basket}
          />
        ))}
      </div>
      <hr />
      <Basket basket={basket} setBasket={setBasket}/>
    </div>
  );
}

export default Coffee;
