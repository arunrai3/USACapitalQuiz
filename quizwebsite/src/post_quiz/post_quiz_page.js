import React from 'react';
import styles from './post_quiz_page.module.css';

function PostQuizPage() {
  
  const score = 8; 
  const totalQuestions = 10;
  const percentage = (score / totalQuestions) * 100;

  return (
    <div className={styles['post-quiz-container']}>
      <h1>Congrats! You finished the quiz</h1>
      <p>Your Score: {score} out of {totalQuestions}</p>
      <p>Percentage: {percentage.toFixed(2)}%</p>

      <div className="button-group">
        <button onClick={() => {}}>View Stats</button>
        <button onClick={() => {}}>Review Quiz</button>
        <button onClick={() => {}}>Leaderboard Page</button>
      </div>
    </div>
  );
}

export default PostQuizPage;