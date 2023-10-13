import React from "react";
import "./smileFace.css";
import { useState } from "react";

function SmileFace() {
  const sadEmoji = "☹️";
  const happyEmoji = "🙂";

  const [emotion, setEmotion] = useState([
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
  ]);

  const handleMouseSmile = (ind) => {
    setEmotion(
      emotion.map((el, index) => {
        if (ind === index) {
          return !el;
        } else return el;
      })
    );
  };

  const colorFirst =
    0 + emotion.reduce((acc, el) => (el ? acc + 1 : acc), 0) * (255 / emotion.length);

  const colorSecond =
    255 - emotion.reduce((acc, el) => (el ? acc + 1 : acc), 0) * (255 / emotion.length);

  return (
    <div
      className="container"
      style={{ backgroundColor: `rgb(${colorFirst}, ${colorSecond}, 0)` }}
    >
      <div className="containerSmiles">
        {emotion.map((el, index) => (
          <div onMouseEnter={() => handleMouseSmile(index)} key={index}>
            {el ? sadEmoji : happyEmoji}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SmileFace;
