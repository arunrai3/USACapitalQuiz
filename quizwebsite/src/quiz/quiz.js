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

    let apiUrl;
    if (selectedQuiz === "quiz1" || selectedQuiz === "quiz3") {
      apiUrl = 'http://localhost:8080/statesandcapitals';
    } else if (selectedQuiz === "quiz2" || selectedQuiz === "quiz4") {
      apiUrl = 'http://localhost:8080/countriesandcapitals';
    } else {
      console.error('Invalid selectedQuiz value:', selectedQuiz);
      return;
    }

    fetch(apiUrl)    
      .then(response => response.json())
      .then(data => {
        
        let formattedQuestions;

        if (selectedQuiz === "quiz1" || selectedQuiz === "quiz2") {
          formattedQuestions = formatQuestions(data, selectedQuiz === "quiz1" ? 'state' : 'country', 'capital', selectedQuiz);
        } else if (selectedQuiz === "quiz3") {
          formattedQuestions = formatQuestions(data, 'capital', 'state', selectedQuiz);
        } else if (selectedQuiz === "quiz4") {
          formattedQuestions = formatQuestions(data, 'capital', 'country', selectedQuiz);
        } else {
          console.error('Invalid selectedQuiz value:', selectedQuiz);
          return;
        }
        setQuestions(formattedQuestions);
        setUserAnswers(new Array(data.length).fill(''));
      })
      .catch(error => console.error('Error fetching data:', error));

    }, [selectedQuiz]);

  const currentQuestionData = questions[currentQuestion - 1];
  
  const handleTextChange = (e) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestion - 1] = e.target.value;
    setUserAnswers(newAnswers);
  };
  
  const handleOptionChange = (e) => {
    setSelectedAnswer(e.target.value);
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestion - 1] = e.target.value;
    setUserAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
    setSelectedAnswer(userAnswers[currentQuestion]);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
    setSelectedAnswer(userAnswers[currentQuestion - 2]);
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
        <textarea rows="4" cols="50" placeholder="Your answer here" value={userAnswers[currentQuestion - 1] || ''} onChange={handleTextChange} ></textarea>
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

function formatQuestions(data, questionProperty, answerProperty, quizType) {
  const allAnswers = data.map(item => item[answerProperty]);
  const formattedQuestions = data.map(item => {
    const options = generateRandomOptions(item[answerProperty], allAnswers);
    let questionString = "";
    
    if (quizType === "quiz1" || quizType === "quiz2") {
      questionString = `What is the capital of ${item[questionProperty]}?`
    } else if (quizType === "quiz3") {
      questionString = `Which state is ${item[questionProperty]} the capital of?`
    } else if (quizType === "quiz4") {
      questionString = `Which country is ${item[questionProperty]} the capital of?`
    }

    return {
      question: questionString,
      options: shuffleArray(options),
      answer: item[answerProperty],
    };
  });
  return formattedQuestions;
}
