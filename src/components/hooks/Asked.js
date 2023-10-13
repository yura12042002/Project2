import { useState } from "react";
import { questions } from "../../data/QuestionsData";
import "./Asked.css";

function Asked() {
  const down =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Arrow-down-invert.svg/800px-Arrow-down-invert.svg.png";
  const hight = "https://cdn-thumbs.imagevenue.com/27/d6/51/ME16HS1O_t.png";

  const [number, setNumber] = useState(null);

  const onClickButton = (index) => {
    if (index === number) {
      setNumber(null)
    } else {
      setNumber(index);
    }
  };

  return (
    <div className="container">
      <div className="block">
        <p className="blockHeader">Frequently Asked Questions</p>
        <div className="blockSlider">
          {questions.map((el, index) => (
            <div>
              <p className="blockSliderQuestions">
                {el.question}
                <button
                  onClick={() => onClickButton(index)}
                  className="blockSliderQuestionsButton"
                >
                  <img
                    className="blockSliderQuestionsButtonDown"
                    src={number === index ? hight : down}
                  />
                </button>
              </p>
              {index === number && (
                <p className="blockSliderQuestionsAnswere">{el.answer}</p>
              )}
              {index < 2 && <hr />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Asked;
