import React from "react";

function Basket({ basket, setBasket }) {

  const handleClickPlusBasket = (coffee, syrop) => {
    setBasket(
      basket.map((el) => {
        if (coffee === el.name && el.syrop === syrop) {
          return { ...el, count: el.count + 1 };
        } else {
          return el;
        }
      })
    );
  }

  const handleClickMinusBasket =(coffee, syrop) => {
    setBasket(
      basket
        .map((el) => {
          if (
            el.name === coffee &&
            el.syrop === syrop &&
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
  }

  const result = basket.reduce((acc, el) => acc + el.count * el.totalPrice, 0);
  return (
    <div className="basket">
      <h1>корзина</h1>
      <div className="basketBlock">
        <div className="basketBlockIncludce">
          {basket.map((el, index) => (
            <div className="basketBlockIncludceItem" key={el.id}>
              <p className="basketBlockIncludceItemText">{el.name}</p>
              <p className="basketBlockIncludceItemText">{el.price}</p>
              <p className="basketBlockIncludceItemText">{el.syrop}</p>
              <button
                className="blockAmountPlus"
                onClick={() => handleClickPlusBasket(el.name, el.syrop)}
              >
                +
              </button>
              <p className="basketBlockIncludceItemText">{el.count}</p>
              <button
                className="blockAmountMinus"
                  onClick={() => handleClickMinusBasket(el.name, el.syrop)}
              >
                -
              </button>
              <p className="basketBlockIncludceItemCount">{el.count} шт.</p>
              <p className="basketBlockIncludceItemPrice">
                {el.count * el.totalPrice} руб
              </p>
            </div>
          ))}
        </div>
        <hr />
        <p className="basketBlockSum">{result} руб</p>
      </div>
    </div>
  );
}

export default Basket;
