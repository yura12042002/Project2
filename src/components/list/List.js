import React, { useState } from 'react';

const ListItem = ({ item, index, editIndex, editValue, startEdit, updateItem, cancelEdit, deleteItem }) => {
  if (index === editIndex) {
    return (
      <li>
        <input
          type="text"
          value={editValue}
          onChange={(e) => startEdit(index, e.target.value)}
        />
        <button onClick={() => updateItem(index)}>Save</button>
        <button onClick={cancelEdit}>Cancel</button>
      </li>
    );
  } 
  return (
    <li>
      <span>{item}</span>
      <button onClick={() => startEdit(index, item)}>Edit</button>
      <button onClick={() => deleteItem(index)}>Delete</button>
    </li>
  );
};

const List = () => {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);
  const [newItem, setNewItem] = useState('');
  const [editIndex, setEditIndex] = useState(-1);
  const [editValue, setEditValue] = useState('');

  const addItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  const deleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
    if (editIndex === index) {
      setEditIndex(-1);
      setEditValue('');
    }
  };

  const startEdit = (index, value) => {
    setEditIndex(index);
    setEditValue(value);
  };

  const updateItem = (index) => {
    if (editValue.trim() !== '') {
      const updatedItems = items.map((el, idx) => index === idx ? editValue : el)
      setItems(updatedItems);
      setEditIndex(-1);     
      setEditValue('');
    }
  };

  const cancelEdit = () => {
    setEditIndex(-1);
    setEditValue('');
  };

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <ListItem
            key={index}
            item={item}
            index={index}
            editIndex={editIndex}
            editValue={editValue}
            startEdit={startEdit}
            updateItem={updateItem}
            cancelEdit={cancelEdit}
            deleteItem={deleteItem}
          />
        ))}
      </ul>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={addItem}>Add Item</button>
    </div>
  );
};

export default List;