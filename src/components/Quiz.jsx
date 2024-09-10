import React, { useState } from "react";
import QUESTION from "../questions";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;

  function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prevUserAnswer) => {
      return [...userAnswers, selectedAnswer];
    });
  }

  return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTION[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {QUESTION[activeQuestionIndex].answers.map((answers) => (
            <li key={answers} className="answer">
              <button onClick={() => handleSelectAnswer}>{answers}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
