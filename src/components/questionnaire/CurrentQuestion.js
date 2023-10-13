import React from "react";

const CurrentQuestion = ({
  allQuestions,
  questionNumber,
  handleClickAnswer,
  countCorrectAnswers,
}) => {
  return (
    <div>
      <p className="questionnaireCurrent">{allQuestions[questionNumber]?.title}</p>
      {allQuestions[questionNumber]?.list.map((el, index) => (
        <div key={index}>
          <button
            className="questionnaireAnswers"
            onClick={() => handleClickAnswer(el.term)}
          >
            <p className="questionnaireAnswersText">{el.answer}</p>
          </button>
        </div>
      ))}

      <p>Correct {countCorrectAnswers}</p>
    </div>
  );
};

export default CurrentQuestion;
