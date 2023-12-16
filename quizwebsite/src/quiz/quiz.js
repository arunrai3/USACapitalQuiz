import React, { useState, useEffect } from 'react';
import styles from './quiz.module.css';
import { useLocation } from 'react-router-dom';

function Quiz(props) {
  const location = useLocation();
  const { selectedQuiz, quizType } = location.state;
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [userAnswers, setUserAnswers] = useState([]);

  useEffect(() => {
    let allCapitals = []; 
  
    fetch('http://localhost:8080/hello')    
      .then(response => response.json())
      .then(data => {
        allCapitals = data.map(item => item.capital); 
        console.log(data); 
        const formattedQuestions = data.map(item => {
          const options = generateRandomOptions(item.capital, allCapitals);
          return {
            question: `What is the capital of ${item.state}?`,
            options: shuffleArray(options),
            answer: item.capital,
          };
        });
        setQuestions(formattedQuestions);
        setSelectedAnswer('');
        setUserAnswers(new Array(data.length).fill(''));
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const currentQuestionData = questions[currentQuestion - 1];

  
  const handleOptionChange = (e) => {
    setSelectedAnswer(e.target.value);
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestion - 1] = e.target.value;
    setUserAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
    setSelectedAnswer('');
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  
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
              <input type="radio" name="answer" value={option} 
              checked={selectedAnswer === option}
              onChange={handleOptionChange}
              />
              {option}
            </label>
          ))}
        </div>
      ) : (
        <textarea rows="4" cols="50" placeholder="Your answer here"></textarea>
      )}
      <div className="button-container">
        {currentQuestion > 1 && (
          <button onClick={handlePreviousQuestion}>Previous</button>
        )}
        {currentQuestion < questions.length && (
          <button onClick={handleNextQuestion}>Next</button>
        )}
      </div>
    </div>
  );
}

export default Quiz;

function generateRandomOptions(correctAnswer, allCapitals) {
  let options = new Set();
  options.add(correctAnswer);

  while (options.size < 4) {
    const randomCapital = allCapitals[Math.floor(Math.random() * allCapitals.length)];
    options.add(randomCapital);
  }

  return Array.from(options);
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
