import React, { useState } from 'react';
import styles from './select_quiz.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function SelectQuiz() {
    const [selectedQuiz, setSelectedQuiz] = useState('');
    const [quizType, setQuizType] = useState('multipleChoice'); 
    const customStyle = {
        backgroundColor: 'blue',
        color: 'white',
      };


return (
    <div className={styles['select-quiz-container']}>
      <h2>Select Quiz</h2>
      <div className="quiz-dropdown">
        <label htmlFor="quiz-select">Choose a Quiz:</label>
        <select
          id="quiz-select"
          value={selectedQuiz}
          onChange={(e) => setSelectedQuiz(e.target.value)}
        >
          <option value="">Select a Quiz</option>
          <option value="quiz1">Quiz 1</option>
          <option value="quiz2">Quiz 2</option>
          {/* Add more quiz options here */}
        </select>
      </div>
      <div className="quiz-type">
        <label>Quiz Type:</label>
        <label>
          <input
            type="radio"
            name="quizType"
            value="multipleChoice"
            checked={quizType === 'multipleChoice'}
            onChange={() => setQuizType('multipleChoice')}
          />{' '}
          Multiple Choice
        </label>
        <label>
          <input
            type="radio"
            name="quizType"
            value="openResponse"
            checked={quizType === 'openResponse'}
            onChange={() => setQuizType('openResponse')}
          />{' '}
          Open Response
        </label>
      </div>
      <button
        className="btn btn-primary"
        style = {customStyle}
        disabled={!selectedQuiz}
        onClick={() => {
          // Handle quiz start here
        }}
      >
        Start Quiz
      </button>
    </div>
  );
}

export default SelectQuiz;