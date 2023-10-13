import React from "react";

function Things({
  list,
  handleClickCheckBox,
  handleClickCleanThing,
  handleClickCleanAllThings,
  setFilter, 
  filter
}) {
  return (
    <div className="things">
      <div className="thingsShow">
        {list.map((el) => (
          <div className="thingShow" key={el.id}>
            <input type="checkbox" checked={el.check} onClick={() => handleClickCheckBox(el.id)} />
            <p className="thingShowAmount">{el.amount}</p>
            {el.check ? (
              <p>
              <s>{el.thing}</s>
            </p>
            ) : ( 
              <p>{el.thing}</p>
            )}
            <button
              className="cleanThing"
              onClick={() => handleClickCleanThing(el.id)}
            >
              ❌
            </button>
          </div>
        ))}
      </div>
      <div className="thingsButtons">
        <button className={filter === '' ? 'activeButton': 'button'} onClick={() => setFilter('')}>показать все</button>
        <button className={filter === 'completed' ? 'activeButton': 'button'} onClick={() => setFilter('completed')}>
          показать что собрал
        </button>
        <button className={filter === 'active'? 'activeButton': 'button'} onClick={() => setFilter('active')}>
          показать что не собрал
        </button>
        <button onClick={handleClickCleanAllThings}>очистить лист</button>
      </div>
    </div>
  );
}

export default Things;
