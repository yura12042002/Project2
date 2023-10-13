import { useState } from "react";
import { questions } from "../../../data/QuestionsData";
import Asked2Item from "./Asked2Item";
import "./Asked2.css";


function Asked2() {
  // const down =
  //   "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Arrow-down-invert.svg/800px-Arrow-down-invert.svg.png";
  // const hight = "https://cdn-thumbs.imagevenue.com/27/d6/51/ME16HS1O_t.png";

  // const [number, setNumber] = useState([]);

  // const onButtonClick = (index) => {
  //   setNumber(
  //     [...number, index].filter(
  //       (el) =>
  //         [...number, index].indexOf(el) === [...number, index].lastIndexOf(el)
  //     )
  //   );  
  // };

  // const onButtonClick = (index) => {
  //   if (number.includes(index)) {
  //     setNumber(number.filter(el => el !== index))
  //   } else {
  //     setNumber([...number, index])
  //   }
  // };

  return (
    <div className="container">
      <div className="block">
        <p className="blockHeader">Frequently Asked Questions</p>
        <div className="blockSlider">
          {questions.map(el => (
            <Asked2Item question={el.question} answer={el.answer}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Asked2;
