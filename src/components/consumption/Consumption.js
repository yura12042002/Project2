import React, { useState } from "react";
import { iconArr } from "./IconData";
import AddCategory from "./AddCategory";
import ListAll from "./ListAll";
import "./consumption.css";
import AddSpend from "./AddSpend";

const Consumption = () => {
  const [showIcons, setShowIcons] = useState(false);
  const [newCategory, setNewCategory] = useState("");
  // newCategoryName
  const [list, setList] = useState([]);
  // Categories
  const [selecting, setSelecting] = useState(null);
  // SelectedCategory
  const [currentSpending, setCurrentSpending] = useState("0");
  const [icon, setIcon] = useState(
    "https://cdn0.iconfinder.com/data/icons/zondicons/20/location-food-256.png"
  );

  const handleCLickIcon = () => {
    setShowIcons(!showIcons);
  };

  const onChangeText = (event) => {
    setNewCategory(event.target.value);
  };

  const handleClickSelectIcon = (link) => {
    setIcon(link);
  };

  const handleClickNewCategory = () => {
    if (newCategory.trim().length > 0 && showIcons) {
      setList([
        ...list,
        {
          id: (list[list.length - 1]?.id || 0) + 1,
          icon: icon,
          text: newCategory,
          spending: 0,
        },
      ]);

      setNewCategory("");
      if (newCategory.trim().length > 0 && showIcons) {
        setShowIcons(!showIcons);
      }
      setIcon(
        "https://cdn0.iconfinder.com/data/icons/zondicons/20/location-food-256.png"
      );
    }
  };

  const handleClickNumber = (number) => {
    if (currentSpending === "0") {
      setCurrentSpending(number);
    } else {
      setCurrentSpending(currentSpending + number);
    }
  };

  const handleClickChangeSpending = (event) => {
    setSelecting(event.target.value);
  };

  const handleClickClear = () => {
    setCurrentSpending("0");
  };

  const handleClickAdd = () => {
    const updatedList = list.map((el) => {
      if (el.text === selecting) {
        return { ...el, spending: el.spending + Number(currentSpending) };
      }
      return el;
    });
    setList(updatedList);
    setCurrentSpending("0");
    console.log(list);
  };

  return (
    <div className="container">
      <AddCategory
        showIcons={showIcons}
        icon={icon}
        newCategory={newCategory}
        iconArr={iconArr}
        onChangeText={onChangeText}
        handleCLickIcon={handleCLickIcon}
        handleClickSelectIcon={handleClickSelectIcon}
        handleClickNewCategory={handleClickNewCategory}
      />
      <ListAll list={list} />
      <AddSpend
        list={list}
        currentSpending={currentSpending}
        selecting={selecting}
        handleClickChangeSpending={handleClickChangeSpending}
        handleClickNumber={handleClickNumber}
        handleClickClear={handleClickClear}
        handleClickAdd={handleClickAdd}
        setSelecting={setSelecting}
      />
    </div>
  );
};

export default Consumption;
