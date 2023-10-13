import FirstLineAndSort from "./FirstLineAndSort";
import { useContext } from "react";
import ThemeContext from "./Context";

function ShowAllContact({
  handleChangeInputData,
  handleClickEdit,
  handleClickDeleteItem,
  newItem,
}) {
  const [items, setItems] = useContext(ThemeContext);
  const handleClickCheckbox = (id) => {
    setItems(
      items.map((el) => {
        if (el.id === id) {
          return { ...el, check: !el.check };
        } else return el;
      })
    );
  };

  const itemsTd = Object.keys(newItem).splice(2, 5);

  return (
    <table>
      <FirstLineAndSort setItems={setItems} items={items} />
      {items.map((el) => (
        <tr>
          <td>
            <input
              type="checkbox"
              checked={el.check}
              onClick={() => handleClickCheckbox(el.id)}
            />
          </td>
          {itemsTd.map((elem) => (
            <td>
              {el.edit ? (
                <input
                  onChange={(event) =>
                    handleChangeInputData(event, el.id, elem)
                  }
                  value={el[elem]}
                />
              ) : (
                el[elem]
              )}
            </td>
          ))}
          <td>
            <button onClick={() => handleClickEdit(el.id, el.edit)}>
              {el.edit ? "Save" : "Edit"}
            </button>
            <button onClick={() => handleClickDeleteItem(el.id, el.edit)}>
              {el.edit ? "Cancel" : "Delete"}
            </button>
          </td>
        </tr>
      ))}
    </table>
  );
}

export default ShowAllContact;
