// App.js
import React, { useState } from 'react';
import Question from './Components/Question';
import Header from './Components/Header';
import './App.css';
import './index.css';
const initialQuestionIndex = 0;

const questionsData = [
  {
    question:
      "77 percent of the world's maple syrup is made in this Canadian Province.",
    options: ['Alberta', 'Ontario', 'Manitoba', 'Quebec'],
    correctAnswer: 'Quebec',
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
    question: 'What is the name of the large river that flows through London?',
    options: ['The Danube', 'The Rhine', 'The Thames', 'The Elbe'],
    correctAnswer: 'The Thames',
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
  {
    question: "Where are 75% of the world's pineapples grown?",
    options: ['India', 'Hawaii', 'Guam', 'Indonesia'],
    correctAnswer: 'Hawaii',
  },
  {
    question: 'Which country has the most natural lakes?',
    options: ['USA', 'Canada', 'China', 'Australia'],
    correctAnswer: 'Canada',
  },
  {
    question: 'This country has the largest number of pyramids.',
    options: ['Nigeria', 'Ivory Coast', 'Sudan', 'Eygpt'],
    correctAnswer: 'Sudan',
  },
  {
    question: 'In what state in the Grand Canyon located?',
    options: ['Arizona', 'California', 'Nevada', 'Utah'],
    correctAnswer: 'Arizona',
  },
  {
    question: 'What is the administrative capital of South Africa?',
    options: ['Cape Town', 'Johannesburg', 'Durban', 'Pretoria'],
    correctAnswer: 'Pretoria',
  },
  {
    question: 'What is the capital of Canada?',
    options: ['Ottawa', 'Toronto', 'Vancouver', 'Calgary'],
    correctAnswer: 'Ottawa',
  },
  {
    question: 'What is the capital of Australia?',
    options: ['Sydney', 'Melbourne', 'Perth', 'Canberra'],
    correctAnswer: 'Canberra',
  },
  {
    question: 'What is the capital of India?',
    options: ['Mumbai', 'New Delhi', 'Chennai', 'Kolkata'],
    correctAnswer: 'New Delhi',
  },
  {
    question: 'Where is Zion National Park located?',
    options: ['Canada', 'Mexico', 'USA', 'Australia'],
    correctAnswer: 'USA',
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

  const handleRestart = () => {
    setCurrentQuestionIndex(initialQuestionIndex);
    setScore(0);
  };

  const percentage = calculatePercentage();
  const grade = calculateGrade(percentage);

  return (
    <div>
      <Header />
      <div>
        <p id="score">Score: {score}</p>
      </div>

      {currentQuestionIndex < questionsData.length ? (
        <Question
          questionData={questionsData[currentQuestionIndex]}
          onAnswer={handleAnswer}
        />
      ) : (
        <div>
          <h1>Game Over!</h1>
          <p id="f-score">Your final score: {percentage.toFixed(1)}%</p>
          <p id="f-score">Your Grade: {grade}</p>
          <button onClick={handleRestart}>Restart</button>
        </div>
      )}

      <div>
        {currentQuestionIndex > 0 && (
          <button id="previous-button" onClick={handlePrevious}>
            ← Previous
          </button>
        )}
        {currentQuestionIndex < questionsData.length - 1 && (
          <button id="next-button" onClick={handleNext}>
            Next →
          </button>
        )}
      </div>
    </div>
  );
};

export default App;
