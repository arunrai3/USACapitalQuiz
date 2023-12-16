import React from 'react';
import styles from './post_quiz_page.module.css';
import { useLocation } from 'react-router-dom';

function PostQuizPage() {

  const location = useLocation();
  const { selectedQuiz, quizType, userAnswers, questions } = location.state;

  const { score, totalQuestions, percentage } = calculateScore(userAnswers, questions);


  return (
    <div className={styles['post-quiz-container']}>
      <h1>Congrats! You finished the quiz</h1>
      <p>Your Score: {score} out of {totalQuestions}</p>
      <p>Percentage: {percentage.toFixed(2)}%</p>

      <div className="button-group">
        <button onClick={() => {}}>View Stats</button>
        <button onClick={() => {}}>Leaderboard Page</button>
        <button onClick={() => {}}>Study Page</button>
      </div>

      <div className={styles['question-review-section']}>
        {questions.map((question, index) => (
          <div key={index} className={styles['question-item']}>
            <p><strong>Q{index + 1}: {question.question}</strong></p>
            <p style={{ color: 'green' }}>Correct Answer: {question.answer}</p>
            <p style={{ color: userAnswers[index] === question.answer ? 'green' : 'red' }}>
              Your Answer: {userAnswers[index] || 'No Answer'}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default PostQuizPage;

function calculateScore(userAnswers, questions) {
    let score = 0;
    
    userAnswers.forEach((answer, index) => {
      if (answer.trim().toLowerCase() === questions[index].answer.trim().toLowerCase()) {
        score++;
      }
    });
  
    const totalQuestions = questions.length;
    const percentage = (score / totalQuestions) * 100;
  
    return {
      score,
      totalQuestions,
      percentage
    };
  }