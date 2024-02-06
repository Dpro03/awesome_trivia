// App.js
import React, { useState } from 'react';
import Question from './Components/Question';
import Header from './Components/Header';
import './App.css';
import './index.css';

const questionsData = [
  {
    question: 'What is the capital of France?',
    options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
    correctAnswer: 'Paris',
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
    correctAnswer: 'Mars',
  },
  {
    question: 'What is the largest country in the world?',
    options: ['Russia', 'Canada', 'China', 'USA'],
    correctAnswer: 'Russia',
  },
  {
    question: 'What is the smallest country in the world?',
    options: ['Vatican City', 'Monaco', 'San Marino', 'Liechtenstein'],
    correctAnswer: 'Vatican City',
  },
  {
    question: 'What is the largest ocean in the world?',
    options: [
      'Pacific Ocean',
      'Atlantic Ocean',
      'Indian Ocean',
      'Arctic Ocean',
    ],
    correctAnswer: 'Pacific Ocean',
  },
  {
    question: 'What is the smallest continent in the world?',
    options: ['Antarctica', 'Africa', 'Australia', 'South America'],
    correctAnswer: 'Antarctica',
  },
  {
    question: 'What is the largest desert in the world?',
    options: ['Sahara', 'Gobi', 'Kalahari', 'Patagonian'],
    correctAnswer: 'Sahara',
  },
  {
    question: "Who is buried in Grant's Tomb?",
    options: [
      'George Washington',
      'Abraham Lincoln',
      'Thomas Jefferson',
      'Ulysses Grant',
    ],
    correctAnswer: 'Ulysses Grant',
  },
  {
    question: 'What is the longest river in the world?',
    options: [
      'Amazon River',
      'Nile River',
      'Yangtze River',
      'Mississippi River',
    ],
    correctAnswer: 'Nile River',
  },
  {
    question: 'What is the coldest continent in the world?',
    options: ['Africa', 'Antarctica', 'Australia', 'North America'],
    correctAnswer: 'Antarctica',
  },
  {
    question: 'What is the capital of Washington State?',
    options: ['Seattle', 'Olympia', 'Tacoma', 'Pullman'],
    correctAnswer: 'Olympia',
  },
  {
    question: 'What is the largest country in Asia?',
    options: ['China', 'India', 'Japan', 'Indonesia'],
    correctAnswer: 'China',
  },
];

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (selectedAnswer) => {
    const currentQuestion = questionsData[currentQuestionIndex];

    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const calculatePercentage = () => {
    return (score / questionsData.length) * 100;
  };

  const calculateGrade = (percentage) => {
    if (percentage >= 90) {
      return 'A';
    } else if (percentage >= 80) {
      return 'B';
    } else if (percentage >= 70) {
      return 'C';
    } else if (percentage >= 60) {
      return 'D';
    } else {
      return 'F';
    }
  };

  const handleNext = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handlePrevious = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  const percentage = calculatePercentage();
  const grade = calculateGrade(percentage);

  return (
    <div>
      <Header />
      <div>
        <p>Score: {score}</p>
      </div>

      {currentQuestionIndex < questionsData.length ? (
        <Question
          questionData={questionsData[currentQuestionIndex]}
          onAnswer={handleAnswer}
        />
      ) : (
        <div>
          <h2>Game Over!</h2>
          <p>Your final score is: {percentage.toFixed(1)}%</p>
          <p>Grade: {grade}</p>
        </div>
      )}

      <div>
        {currentQuestionIndex > 0 && (
          <button id="previous-button" onClick={handlePrevious}>
            Previous
          </button>
        )}
        {currentQuestionIndex < questionsData.length - 1 && (
          <button id="next-button" onClick={handleNext}>
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default App;
