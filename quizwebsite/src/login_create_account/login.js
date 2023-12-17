import React from 'react';
import styles from './login.module.css';

function Login() {
  return (
    <div className={styles.loginContainer}>
      <h2>Login</h2>
      <form className={styles.loginForm}>
        <input type="email" placeholder="Email" className={styles.inputField} />
        <input type="password" placeholder="Password" className={styles.inputField} />
        <button type="submit" className={styles.loginButton}>Login</button>
        <p className={styles.signupText}>
          Don't have an account? <a href="/createaccount">Click here</a>
        </p>
      </form>
    </div>
  );
}

export default Login;