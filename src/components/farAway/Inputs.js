import React from 'react'

function Inputs({handleChangeAmount, amount, handleChangeThing, thing, handleClickAdd}) {
  return (
    <div className="inputs">
    <p>What do you need for your 😍 trip?</p>
    <input
      className="inputsAmount"
      type="number"
      onChange={handleChangeAmount}
      value={amount}
    />
    <input
      className="inputsThing"
      placeholder="item..."
      onChange={handleChangeThing}
      value={thing}
    />
    <button className="inputsAdd" onClick={handleClickAdd}>
      ADD
    </button>
  </div>
  )
}

export default Inputs