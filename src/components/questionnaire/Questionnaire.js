import React, { useState } from "react";
import { questions } from "./QustionAndAnswer";
import "./CurrentQuestion";
import CurrentQuestion from "./CurrentQuestion";
import "./questionnaire.css";

function Questionnaire() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [backgroundPercentage, setBackgroundPercentage] = useState(0);
  const [countCorrectAnswers, setCountCorrectAnswers] = useState(0);
  const [allQuestions, setAllQuestions] = useState(questions);
  const [newQuestion, setNewQuestion] = useState({
    title: "",
    list: [
      { answer: "", term: false },
      { answer: "", term: false },
      { answer: "", term: false },
      { answer: "", term: false },
    ],
  });

  const handleClickAnswer = (term) => {
    setQuestionNumber(questionNumber + 1);
    setBackgroundPercentage(backgroundPercentage + 100 / allQuestions.length);
    if (questionNumber + 1 === allQuestions.length) {
      setBackgroundPercentage(100);
    }
    if (term) setCountCorrectAnswers(countCorrectAnswers + 1);
  };

  const onClickBack = () => {
    setQuestionNumber(1);
    setBackgroundPercentage(0);
    setCountCorrectAnswers(0);
  };

  const handleClickRadio = (ind) => {
    setNewQuestion((prevQuestion) => ({
      ...prevQuestion,
      list: prevQuestion.list.map((el, index) => {
        if (index === ind) {
          return { ...el, term: true };
        } else {
          return { ...el, term: false };
        }
      }),
    }));
  };

  const handleClickNewQuestionTitle = (event) => {
    setNewQuestion({ ...newQuestion, title: event.target.value });
  };

  const handleClickNewQuestionAnswers = (event, ind) => {
    setNewQuestion((prevQuestion) => ({
      ...prevQuestion,
      list: prevQuestion.list.map((el, index) => {
        if (index === ind) {
          return { ...el, answer: event.target.value };
        } else {
          return el;
        }
      }),
    }));
  };

  const handleClickAdd = (e) => {
    e.preventDefault();
    const isTitleValid = newQuestion.title.trim().length > 0;
    const areAnswersValid = newQuestion.list.every(
      (el) => el.answer.trim().length > 0
    );

    if (isTitleValid && areAnswersValid) {
      setAllQuestions([...allQuestions, newQuestion]);

      setNewQuestion({
        title: "",
        list: [
          { answer: "", term: false },
          { answer: "", term: false },
          { answer: "", term: false },
          { answer: "", term: false },
        ],
      });
    } else {
      alert("Заполните все поля перед добавлением вопроса.");
    }
  };

  return (
    <div className="container">
      <div className="header">
        <img
          className="headerIcon"
          src="https://cdn0.iconfinder.com/data/icons/logos-brands-in-colors/128/react_color-256.png"
          alt="React app"
        />
        <p className="headerText">THE REACT QUIZ</p>
      </div>
      <div className="state">
        <div
          className="stateStrip"
          style={{
            background: `linear-gradient(90deg, rgba(0,0,255,1) ${backgroundPercentage}%, rgba(255,255,255,1)  ${backgroundPercentage}%)`,
          }}
        ></div>
        <p className="stateText">
          Qustion {questionNumber}/{allQuestions.length}
        </p>
      </div>

      <div className="questionnaire">
        <CurrentQuestion
          allQuestions={allQuestions}
          questionNumber={questionNumber}
          handleClickAnswer={handleClickAnswer}
          countCorrectAnswers={countCorrectAnswers}
        />
        {questionNumber > allQuestions.length - 1 && (
          <button onClick={onClickBack} className="goBack">
            GO BACK
          </button>
        )}
      </div>
      {questionNumber === 1 ? (
        <form>
          <p style={{ color: "white", margin: "0" }}>название вопроса</p>
          <input
            onChange={(event) => handleClickNewQuestionTitle(event)}
            value={newQuestion.title}
          />
          {allQuestions[0].list.map((el, index) => (
            <div className="answer">
              <input
                type="radio"
                onChange={() => handleClickRadio(index)}
                checked={newQuestion.list[index].term}
              />
              <input
                className="answerInput"
                onChange={(event) =>
                  handleClickNewQuestionAnswers(event, index)
                }
                value={newQuestion.list[index].answer}
              />
            </div>
          ))}
          <button onClick={handleClickAdd}>Добавить</button>
        </form>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Questionnaire;
