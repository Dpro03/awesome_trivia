// Question.js
import React, { useState } from 'react';

const Question = ({ questionData, onAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const handleOptionClick = (option) => {
    setSelectedAnswer(option);
  };

  const handleSubmit = () => {
    onAnswer(selectedAnswer);
  };

  return (
    <div>
      <h2>{questionData.question}</h2>
      <ul>
        {questionData.options.map((option, index) => (
          <li key={index} onClick={() => handleOptionClick(option)}>
            {option}
          </li>
        ))}
      </ul>
      <button id ="submit-button" onClick={handleSubmit} disabled={!selectedAnswer}>
        Submit
      </button>
    </div>
  );
};

export default Question;
