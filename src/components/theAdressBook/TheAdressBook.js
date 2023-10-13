import React, { useState } from "react";
import { arr } from "./Data";
import "./style.css";
import ShowAllContact from "./ShowAllContact";
import AddNewItem from "./AddNewItem";
import ThemeContext from "./Context";

function TheAdressBook() {
  const [items, setItems] = useState(arr);
  const [newItem, setNewItem] = useState({
    id: Date.now(),
    check: false,
    name: "",
    surname: "",
    age: "",
    addres: "",
    email: "",
    edit: false,
  });

  const handleClickEdit = (id) => {
    setItems(
      items.map((el) => {
        if (el.id === id) {
          return { ...el, edit: !el.edit };
        } else return el;
      })
    );
  };

  const handleClickDeleteItem = (id, edit) => {
    if (edit) {
      setItems(
        items.map((el) => {
          if (el.id === id) {
            return { ...el, edit: false };
          } else return el;
        })
      );
    } else
      setItems(
        items.filter((el) => {
          if (el.id === id) {
            return !el;
          } else return el;
        })
      );
  };

  const handleChangeInputData = (event, id, column) => {
    setItems(
      items.map((el) => {
        if (el.id === id) {
          return { ...el, [column]: event.target.value };
        } else return el;
      })
    );
  };

  const handleChangeNewItem = (event, column) => {
    setNewItem({ ...newItem, [column]: event.target.value });
  };

  const handleClickAdd = (event) => {
    event.preventDefault();
    const itemIsFilled = Object.values(newItem)
      .filter(
        (el, index) => index !== 0 && index !== 1 && index !== 7 && index !== 8
      )
      .every((el) => el.trim().length > 0);
    if (itemIsFilled) {
      setItems([...items, newItem]);
      setNewItem({
        id: Date.now(),
        check: false,
        name: "",
        surname: "",
        age: "",
        addres: "",
        email: "",
        edit: false,
      });
    }
  };

  const handleClickDeleteSelectedItem = () => {
    setItems(items.filter((el) => !el.check));
  };

  const selectedCount = items.reduce(
    (acc, el) => (el.check ? acc + 1 : acc),
    0
  );

  return (
    <div>
      <ThemeContext.Provider value={[items, setItems]}>
        <ShowAllContact
          handleChangeInputData={handleChangeInputData}
          handleClickEdit={handleClickEdit}
          handleClickDeleteItem={handleClickDeleteItem}
          newItem={newItem}
        />
        <button
          style={{ marginTop: 10 }}
          onClick={handleClickDeleteSelectedItem}
        >
          удалить {selectedCount} выбранных{" "}
        </button>
        <AddNewItem
          handleChangeNewItem={handleChangeNewItem}
          newItem={newItem}
          handleClickAdd={handleClickAdd}
        />
      </ThemeContext.Provider>
    </div>
  );
}

export default TheAdressBook;
