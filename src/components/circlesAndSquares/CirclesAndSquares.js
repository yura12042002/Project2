import React, { useEffect } from "react";
import "./style.css";
import { data } from "./data";
import { useState } from "react";

function CirclesAndSquares() {
  const [selectedColors, setSelectedColors] = useState({
    // {
    //   isActive: false,
    //   value: 'red',
    //   label: 'красный'
    //  }
    Красные: [false, "red"],
    Зеленые: [false, "green"],
    Синие: [false, "blue"],
    Желтые: [false, "yellow"],
  });

  const [selectedShade, setSelectedShade] = useState({
    Все: [true, "all"],
    Темные: [false],
    Светлые: [false],
  });

  const [selectedFigure, setSelectedFigure] = useState({
    Квадраты: [false, "square"],
    Круги: [false, "circle"],
  });

  const color = Object.keys(selectedColors);
  const shade = Object.keys(selectedShade);
  const figure = Object.keys(selectedFigure);

  const [items, setItems] = useState(data);

  const handleClickColors = (element) => {
    setSelectedColors({
      ...selectedColors,
      [element]: [!selectedColors[element][0], selectedColors[element][1]],
    });
  };

  const handleClickShade = (elemet) => {
    setSelectedShade(
      Object.keys(selectedShade).reduce((acc, key) => {
        acc[key] = [key === elemet, selectedShade[key][1]];
        return acc;
      }, {})
    );
  };

  const handleClickFigure = (elemet) => {
    setSelectedFigure({
      ...selectedFigure,
      [elemet]: [!selectedFigure[elemet][0], selectedFigure[elemet][1]],
    });
  };

  useEffect(() => {
    const filteredItems = data.filter((element) => {
      if (color.some((el) => selectedColors[el][0])) {
        return color.some(
          (elem) =>
            selectedColors[elem][0] && element.color === selectedColors[elem][1]
        );
      }
      return true;
    });

    const selectedShadeKey = shade.find(
      (shadeKey) => selectedShade[shadeKey][0]
    );
    const filteredItemsByShade =
      selectedShadeKey === "Все"
        ? filteredItems
        : filteredItems.filter((element) =>
            selectedShadeKey === "Темные" ? element.dark : !element.dark
          );

    const filteredItemsByForm = filteredItemsByShade.filter((element) => {
      if (figure.some((el) => selectedFigure[el][0])) {
        return figure.some(
          (elem) =>
            selectedFigure[elem][0] && element.form === selectedFigure[elem][1]
        );
      }
      return true;
    });

    setItems(filteredItemsByForm);
  }, [selectedColors, selectedShade, selectedFigure, color, figure, shade]);

  return (
    <div className="mainBlock">
      <div className="mainBlockParameters">
        <div>
          {color.map((el) => (
            <div className="mainBlockParametersColor">
              <input
                type="checkbox"
                checked={selectedColors[el][0]}
                onClick={() => handleClickColors(el)}
              />
              <p>{el}</p>
            </div>
          ))}
        </div>
        <div className="mainBlockParametersShade">
          {shade.map((el) => (
            <div className="mainBlockParametersColor">
              <input
                type="radio"
                checked={selectedShade[el][0]}
                onClick={() => handleClickShade(el)}
              />
              <p>{el}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mainBlockFigure">
        <div className="mainBlockFigureSelect">
          {figure.map((el) => (
            <div className="mainBlockFigureSelectBlock">
              <input
                type="checkbox"
                checked={figure[el]}
                onClick={() => handleClickFigure(el)}
              />
              <p>{el}</p>
            </div>
          ))}
        </div>
        <div className="mainBlockFigureShow">
          {items.map((el) => (
            <div
              className={el.form === "circle" ? "circle" : "square"}
              style={{ background: el.color }}
            >
              {el.dark ? "dark" : "light"}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CirclesAndSquares;
