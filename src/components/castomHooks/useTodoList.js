import { useState } from "react";
export const useTodoList = () => {
  const arr = [
    {
      id: 1,
      task: "помыть посуду",
      complited: false,
    },
    {
      id: 2,
      task: "выкинуть мусор",
      complited: false,
    },
  ];
  const [list, setList] = useState(arr);
  const [newTask, setNewTask] = useState('');

  const handleChangeNewTask = (e) => {
    setNewTask({ ...newTask, task: e.target.value });
  };

  const handleClickAdd = () => {
    if (newTask.task.trim().length > 0) {
      setList([...list, newTask]);
      setNewTask({
        id: Date.now(),
        task: "",
        complited: false,
      });
    }
  };

  const handleClickComplited = (id) => {
    setList(
      list.map((el) => {
        if (el.id === id) {
          return { ...el, complited: !el.complited };
        } return el;
      })
    );
  };

  const handlClickDeletItem = (id) => {
    setList(list.filter((el) => (el.id !== id)));
  };
  return [
    handleChangeNewTask,
    newTask,
    handleClickAdd,
    list,
    handleClickComplited,
    handlClickDeletItem,
  ];
};
