import React, { useState, useEffect } from 'react';
import styles from './quiz.module.css';
import { useLocation } from 'react-router-dom';

function Quiz(props) {
  const location = useLocation();
  const { selectedQuiz, quizType } = location.state;
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(1);

  useEffect(() => {
    fetch('http://localhost:8080/hello')    
      .then(response => response.json())
      .then(data => {
        console.log(data); 
        const formattedQuestions = data.map(item => ({
          question: `What is the capital of ${item.state}?`,
          options: generateRandomOptions(item.capital), 
          answer: item.capital,
        }));
        setQuestions(formattedQuestions);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const currentQuestionData = questions[currentQuestion - 1];
  
  if (!currentQuestionData) {
    return <div>Loading quiz data...</div>;
  }

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

function generateRandomOptions(correctAnswer) {
 
  return [correctAnswer, 'Option 2', 'Option 3', 'Option 4'];
}
