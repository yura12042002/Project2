import React from "react";
import { useState } from "react";
import "./squareCount.css";

function SquareCount() {
  const [walls, setWalls] = useState([
    {
      id: 1,
      length: "",
      width: "",
    },
  ]);

  const onChangeLength = (id, event) => {
    setWalls(
      walls.map((el) => {
        if (id === el.id) {
          return { ...el, length: event.target.value };
        } else {
          return el;
        }
      })
    );
  };
  const onChangeWidth = (id, event) => {
    setWalls(
      walls.map((el) => {
        if (id === el.id) {
          return { ...el, width: event.target.value };
        } else {
          return el;
        }
      })
    );
  };

  const handleClickAdd = () => {
    const newWalls = {
      id: walls.length + 1,
      length: "",
      width: "",
    };
    setWalls([...walls, newWalls]);
  };

  const handleClickClean = (id) => {
    setWalls(
      walls.map((el) => {
        if (el.id === id) {
          return { ...el, width: "", length: ""};
        } return el
      })
    );
  };

  const result = walls.reduce((acc, el) => acc + +el.length * +el.width, 0);
  
  return (
    <div className="container">
      {walls.map((el, index) => (
        <div className="block">
          <p>Wall {index + 1}</p>
          <div className="blockInputs">
            Длина
            <input
              onChange={(event) => onChangeLength(el.id, event)}
              type="number"
              value={el.length}
            />
            Ширина
            <input
              onChange={(event) => onChangeWidth(el.id, event)}
              type="number"
              value={el.width}
            />
            <button onClick={() => handleClickClean(el.id)}>очистить</button>
          </div>
        </div>
      ))}

      <button onClick={handleClickAdd}>ADD WALL</button>
      <p>RESULT: {result}</p>
    </div>
  );
}

export default SquareCount;
