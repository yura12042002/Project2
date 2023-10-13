import React from "react";
import { useState } from "react";

  const down = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Arrow-down-invert.svg/800px-Arrow-down-invert.svg.png";
  const up = "https://cdn-thumbs.imagevenue.com/27/d6/51/ME16HS1O_t.png";

const Asked2Item = ({ question, answer }) => {
  
  const [isShow, setIsShow] = useState(false);
    
  return (
    <div>
      <p className="blockSliderQuestions">{question}</p>
      <button
        onClick={() => setIsShow(!isShow)}
        className="blockSliderQuestionsButton"
      >
        <img
          className="blockSliderQuestionsButtonDown"
          src={isShow ? up : down}
        />
      </button>
      {isShow && <p className="blockSliderQuestionsAnswere">{answer}</p>}
    </div>
  );
};

export default Asked2Item;
