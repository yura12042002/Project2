import React, { useEffect, useState } from "react";
import "./style.css";
import { data } from "./data.js";
import CheckboxCategories from "./CheckboxCategories";
import ShowsChoosed from "./ShowsChoosed";
function InformationAboutUser() {

  const [items, setItems] = useState([
    {
      name: "id",
      status: false,
    },
    {
      name: "name",
      status: false,
    },
    {
      name: "hasCat",
      status: false,
    },
    {
      name: "company",
      status: false,
    },
    {
      name: "age",
      status: false,
    },
    {
      name: "city",
      status: false,
    },
  ]);

  const handleClickCheckbox = (category) => {
    setCurrentChecks({
      ...currentChecks,
      [category]: !currentChecks[category],
    });
  };

  return (
    <div className="main">
      <CheckboxCategories
        items={items}
        handleClickCheckbox={handleClickCheckbox}
      />
      <ShowsChoosed data={data} items={items} />
    </div>
  );
}

export default InformationAboutUser;
