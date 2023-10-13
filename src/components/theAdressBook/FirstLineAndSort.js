import React from "react";
import { useState } from "react";
import { FaSortAmountDownAlt } from "@react-icons/all-files/fa/FaSortAmountDownAlt";
import { FaSortAmountDown } from "@react-icons/all-files/fa/FaSortAmountDown";
import { FaSort } from "@react-icons/all-files/fa/FaSort";
import { useContext } from "react";
import ThemeContext from './Context'

function FirstLineAndSort() {
  const [items, setItems] = useContext(ThemeContext)
  const [sort, setSort] = useState({
    selected: '',
    name: "withoutSort",
    surname: "withoutSort",
    age: "withoutSort",
    addres: "withoutSort",
    email: "withoutSort",
    actions: "",
  });

  const firstLine = Object.keys(sort);

  const handleClickSort = (el) => {
    let newSortOrder;
    if (sort[el] === "withoutSort") {
      newSortOrder = "ascending";
    } else if (sort[el] === "ascending") {
      setItems(
        [...items].sort((a, b) => {
          if (el === "age") {
            return parseInt(a[el]) - parseInt(b[el]);
          }
          return a[el].localeCompare(b[el]);
        })
      );
      newSortOrder = "descending";
    } else {
      setItems(
        [...items].sort((a, b) => {
          if (el === "age") {
            return parseInt(b[el]) - parseInt(a[el]);
          }
          return b[el].localeCompare(a[el]);
        })
      );
      newSortOrder = "withoutSort";
    }

     const newSort = firstLine.reduce((acc, item) => {
      if(item === el) {
        acc[item] = newSortOrder
      } else {
        acc[item] = 'withoutSort'
      } return acc
    }, {})
    
    setSort(newSort)
   
  };
  const itemsAllChecked = items.every(el => el.check)
  
  const handleClickAllCheckbox = () => {
    if (itemsAllChecked) {
    setItems(
      items.map(el => ({...el, check: false}))
    )
   } else {
    setItems(
      items.map(el => ({...el, check: true}))
    )
   }
  }

  return (
    <tr>
      {firstLine.map((el, index) => (
        <td className="firstLine">
          <div className="cellContent">
            {index !== 0 ? el : <input type="checkbox" checked={itemsAllChecked} onClick={() => handleClickAllCheckbox()}/>}
            {!(el === "selected" || el === "actions") && (
              <button
                onClick={() => handleClickSort(el)}
                className="sortButton"
              >
                {sort[el] === "withoutSort" ? (
                  <FaSort />
                ) : sort[el] === "ascending" ? (
                  <FaSortAmountDownAlt />
                ) : (
                  <FaSortAmountDown />
                )}
              </button>
            )}
          </div>
        </td>
      ))}
    </tr>
  );
}

export default FirstLineAndSort;
