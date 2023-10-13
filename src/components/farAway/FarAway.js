import React from "react";
import { useState } from "react";
import Footer from "./Footer.js";
import Things from "./Things.js";
import Inputs from "./Inputs";
import Head from "./Head";
import "./farAway.css";

function FarAway() {
  const [amount, setAmount] = useState("");
  const [thing, setThing] = useState("");
  const [list, setList] = useState([]);
  const [filter, setFilter] = useState('')

  const handleChangeAmount = (event) => {
    setAmount(event.target.value);
  };

  const handleChangeThing = (event) => {
    setThing(event.target.value);
  };

  const handleClickAdd = () => {
    if (thing.trim().length > 0 && amount > 0) {
      const newItme = {
        id: (list[list.length - 1]?.id || 0) + 1,
        amount,
        thing,
        check: false,
      };
      setList([...list, newItme]);
      setAmount("");
      setThing("");
    }
  };

  const handleClickCheckBox = (id) => {
    setList(
      list.map((el) => {
        if (el.id === id) {
          return { ...el, check: !el.check };
        } else {
          return el;
        }
      })
    );
  };

  const handleClickCleanThing = (id) => {
    setList(list.filter((el) => el.id !== id));
  };

  const handleClickCleanAllThings = () => {
    setList([]);
  };

  const filteredItems = () => {
    if (filter === 'active') {
      return list.filter(el => !el.check)
    }
    if (filter === 'completed') {
      return list.filter(el => el.check)
    }
    return list
  }

  return (
    <div>
      <Head />
      <Inputs
        handleChangeAmount={handleChangeAmount}
        amount={amount}
        handleChangeThing={handleChangeThing}
        thing={thing}
        handleClickAdd={handleClickAdd}
      />
      <Things
        list={filteredItems()}
        handleClickCheckBox={handleClickCheckBox}
        handleClickCleanThing={handleClickCleanThing}
        handleClickCleanAllThings={handleClickCleanAllThings}
        filter={filter}
        setFilter={setFilter}
      />
      <Footer list={list}/>
    </div>
  );
}

export default FarAway;
