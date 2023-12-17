import React from 'react';
import styles from './quit_quiz.module.css';

function QuitQuizPopup({ message, onConfirm, onCancel }) {
  return (
    <div className={styles.popup}>
      <div className={styles.popupInner}>
        <p>{message}</p>
        <button onClick={onConfirm}>Yes</button>
        <button onClick={onCancel}>No</button>
      </div>
    </div>
  );
}

export default QuitQuizPopup;