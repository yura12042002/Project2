import React from "react";

function NewInformation({ steps, currentPage, info, handleChangeInput }) {
  return (
    <div>
      {steps[currentPage].map((el) => (
        <div>
          {el}
          <input onChange={(e) => handleChangeInput(e, el)} value={info[el]} />
        </div>
      ))}
    </div>
  );
}

export default NewInformation;
