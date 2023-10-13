import React from 'react'

const ListAll = ({list}) => {
  return (
    <div className="list">
    <p className="listTitle">Приложение по учету расходов</p>
    {list.map((el) => (
      <div className="listBlock" key={el.id}>
        <img className="addingCategoryIcons" src={el.icon} />
        <p className="listBlockText">{el.text}</p>
        <p className="listBlockText">{el.spending} ₽</p>
      </div>
    ))}
  </div>
  )
}

export default ListAll