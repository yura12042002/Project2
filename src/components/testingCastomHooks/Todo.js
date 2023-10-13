import { AiOutlineCheck } from "@react-icons/all-files/ai/AiOutlineCheck";
import { AiFillDelete } from "@react-icons/all-files/ai/AiFillDelete";
import { GiCancel } from "@react-icons/all-files/gi/GiCancel";
import { useTodoList } from "../castomHooks/useTodoList";
import "./todo.css";

function Todo() {
  const [
    handleChangeNewTask,
    newTask,
    handleClickAdd,
    list,
    handleClickComplited,
    handlClickDeletItem,
  ] = useTodoList();
  return (
    <div className="block">
      <p className="blockTitle">TODO</p>
      <div className="blockAdd">
        <input onChange={(e) => handleChangeNewTask(e)} value={newTask.task} />
        <button onClick={() => handleClickAdd()}>Add</button>
      </div>
      <div className="blockItems">
        {list.map((el) => (
          <div className="blockItem">
            <p className="blockItemTask">
              {el.complited ? <s>{el.task}</s> : el.task}
            </p>
            <div className="blockItemButton">
              <button
                onClick={() => handleClickComplited(el.id)}
                className="blockItemButton"
              >
                {el.complited ? <GiCancel /> : <AiOutlineCheck />}
              </button>
              <button
                className="blockItemButton"
                onClick={() => handlClickDeletItem(el.id)}
              >
                <AiFillDelete />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todo;
