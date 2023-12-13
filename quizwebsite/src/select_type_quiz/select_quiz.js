import React, { useState } from 'react';
import styles from './select_quiz.module.css';
import { useNavigate } from 'react-router-dom';




function SelectQuiz() {
    const [selectedQuiz, setSelectedQuiz] = useState('');
    const [quizType, setQuizType] = useState('multipleChoice'); 
    const navigate = useNavigate();
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
          <option value="quiz1">Capitals for all the States in USA</option>
          <option value="quiz2">Capitals for all the Countries in the World</option>
          <option value="quiz3">States for all Capitals in USA</option>
          <option value="quiz4">Countries for all Capitals in the World</option>
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
        className="start-quiz-button"
        style = {customStyle}
        disabled={!selectedQuiz}
        onClick={() => {
          navigate('/quiz', { state: { selectedQuiz, quizType } });
        }}
      >
        Start Quiz
      </button>
    </div>
  );
}

export default SelectQuiz;