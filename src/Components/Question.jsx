// Question.jsx
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
    <div className="question-container">
      <h2>{questionData.question}</h2>
      <div className="options-container">
        {questionData.options.map((option, index) => (
          <div
            key={index}
            className={`option ${selectedAnswer === option ? 'selected' : ''}`}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </div>
        ))}
      </div>
      {selectedAnswer && (
        <button id="submit-button" onClick={handleSubmit}>
          Submit
        </button>
      )}
    </div>
  );
};

export default Question;
