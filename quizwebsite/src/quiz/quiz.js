import React, { useState } from 'react';
import styles from './quiz.module.css';
import { useLocation } from 'react-router-dom';

function Quiz(props) {
  const location = useLocation();
  const { selectedQuiz, quizType } = location.state;
  const [currentQuestion, setCurrentQuestion] = useState(1);

  const questions = [
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Madrid'],
      answer: 'Paris',
    },
    {
      question: 'What is the capital of England?',
      options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
      answer: 'London',
    },
  ];

  const currentQuestionData = questions[currentQuestion - 1];

  return (
    <div className={styles['quiz-container']}>
      <h2>Question {currentQuestion}</h2>
      <p>{currentQuestionData.question}</p>
      {quizType === 'multipleChoice' ? (
        <div>
          {currentQuestionData.options.map((option, index) => (
            <label key={index}>
              <input type="radio" name="answer" value={option} />
              {option}
            </label>
          ))}
        </div>
      ) : (
        <textarea rows="4" cols="50" placeholder="Your answer here"></textarea>
      )}
      <div className="button-container">
        {currentQuestion > 1 && (
          <button onClick={() => setCurrentQuestion(currentQuestion - 1)}>Previous</button>
        )}
        {currentQuestion < questions.length && (
          <button onClick={() => setCurrentQuestion(currentQuestion + 1)}>Next</button>
        )}
      </div>
    </div>
  );
}

export default Quiz;