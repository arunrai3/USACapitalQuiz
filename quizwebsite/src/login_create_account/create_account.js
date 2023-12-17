import React from 'react';
import styles from './create_account.module.css';

function CreateAccount() {
  return (
    <div className={styles.loginContainer}>
      <h2>Create Account</h2>
      <form className={styles.loginForm}>
        <input type="email" placeholder="Email" className={styles.inputField} />
        <input type="password" placeholder="Password" className={styles.inputField} />
        <button type="submit" className={styles.loginButton}>Cretae Account</button>
        <p className={styles.signupText}>
          Already have an account? <a href="/login">Click here</a>
        </p>
      </form>
    </div>
  );
}

export default CreateAccount;