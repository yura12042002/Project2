import React from "react";

function CheckboxCategories({currentChecks, handleClickCheckbox}) {
  return (
    <div>
      {Object.keys(currentChecks).map((el) => (
        <div className="mainCategory">
          <input
            type="checkbox"
            checked={currentChecks[el]}
            onClick={() => handleClickCheckbox(el)}
          />
          <p>{el}</p>
        </div>
      ))}
      <hr />
    </div>
  );
}

export default CheckboxCategories;
