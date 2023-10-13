import React from "react";

function AddNewItem({ handleChangeNewItem, newItem, handleClickAdd }) {
  const newItemKeys = Object.keys(newItem).slice(2, 7);
  return (
    <form>
      <p>Add a Contact</p>
      {newItemKeys.map((el) => (
        <input
          onChange={(event) => handleChangeNewItem(event, el)}
          value={newItem[el]}
        />
      ))}
      <button onClick={(e) => handleClickAdd(e)}>Add</button>
    </form>
  );
}

export default AddNewItem;
