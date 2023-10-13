import React from "react";

const AddCategory = ({
  showIcons,
  icon,
  onChangeText,
  newCategory,
  handleCLickIcon,
  iconArr,
  handleClickSelectIcon,
  handleClickNewCategory,
}) => {
  return (
    <div className="addingCategory">
      <p className="addingCategoryTytle">Добавить категорию:</p>
      {showIcons && (
        <p className="addingCategorySelectIcon">
          Выбранная иконка: {<img className="addingCategoryIcons" src={icon} />}
        </p>
      )}
      <div className="addingCategoryInput">
        <p>Введите название:</p>
        <input onChange={onChangeText} value={newCategory} />
      </div>
      {showIcons ? (
        <div>
          {iconArr.map((el) => (
            <button
              className="addingCategoryButtons"
              onClick={() => handleClickSelectIcon(el.link)}
            >
              <img className="addingCategoryIcons" src={el.link} />
            </button>
          ))}
        </div>
      ) : (
        <button className="addingCategoryButton" onClick={handleCLickIcon}>
          🤔 Выбрать иконку
        </button>
      )}
      <button onClick={handleClickNewCategory} className="addingCategoryButton">
        ✅ Новая категория
      </button>
    </div>
  );
};

export default AddCategory;
