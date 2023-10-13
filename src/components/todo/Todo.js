import { useState } from "react";
import "./Todo.css";
import React from "react";

function Todo() {
  
  // вместо рефа собирать данные с инпута через useState (event.target.value)

  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const onclickButton = () => {
    if (text.trim().length > 0) {
        const newItem = {
            id: (todos[todos.length - 1]?.id || 0) + 1,
            text,
        }
      setTodos([...todos, newItem]);
      setText("");
      console.log(todos)
    }
  };

  const fnDelete = (id) => {
    const newTodos = todos.filter(item => item.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className="cont">
      <div className="contBlock">
        <p className="contBlockTodo">Todo List</p>
        <form className="contBlockEnter">
          <input
            className="contBlockEnterInp"
            onChange={handleChange}
            value={text}
            placeholder="your task..."
            maxlength="16"
          />
          <button
            type="button"
            className="contBlockEnterBut"
            onClick={onclickButton}
          >
            Add task
          </button>
        </form>
        {todos.map((el, index) => (
          <div className="contBlockDoing" key={el.id}>
            <p className="numberTask">{index + 1 + "."}</p>     
            <p className="textInput">{el.text}</p>
            <button className="basket" onClick={() => fnDelete(el.id)}>
              <img
                className="iconka"
                src="https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-39-256.png"
              ></img>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todo;
