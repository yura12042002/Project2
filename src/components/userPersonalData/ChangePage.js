import React from "react";

function ChangePage({ activeButton, handleClickChangePage }) {
  return (
    <div>
      <div>
        <button onClick={() => handleClickChangePage("-")}>PREV</button>
        <button
          disabled={activeButton}
          onClick={() => handleClickChangePage("+")}
        >
          NEXT
        </button>
      </div>
    </div>
  );
}

export default ChangePage;
