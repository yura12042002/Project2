import React from "react";
import { useEffect } from "react";

const AddSpend = ({
  list,
  currentSpending,
  handleClickChangeSpending,
  handleClickNumber,
  handleClickClear,
  handleClickAdd,
  selecting,
  setSelecting,
}) => {
  useEffect(() => {
    const existingSelecting = list.find((el) => el.text === selecting);
    if (!existingSelecting) {
      setSelecting(list[0]?.text || "");
    }
  }, [list]);

  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  return (
    <div className="addingSpending">
      <p className="addingSpendingTitle">Добавить трату:</p>
      <select onChange={handleClickChangeSpending}>
        {list.map((el) => (
          <option key={el.id}>{el.text}</option>
        ))}
      </select>
      <p>{currentSpending} рублей</p>
      <div className="addingSpendingNumbers">
        {numbers.map((el) => (
          <button
            className="addingSpendingButtons"
            onClick={() => handleClickNumber(el)}
          >
            {el}
          </button>
        ))}
      </div>
      <button className="addingSpendingClean" onClick={handleClickClear}>
        Очистить
      </button>
      <button onClick={handleClickAdd}>☑️ Добавить</button>
    </div>
  );
};

export default AddSpend;
