import React from 'react';
import styles from './create_account.module.css';

const handleSubmit = async (event) => {
  event.preventDefault();

  const userData = {
    email: 'user@example.com',
    password: 'password123'
  };

  try {
    const response = await fetch('http://localhost:8080/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    });

    if (response.ok) {
      console.log('User created successfully');
    } else {
      console.log('User not created successfully');
    }
  } catch (error) {
    console.log('User not created successfully2');
  }
}


function CreateAccount() {
  return (
    <div className={styles.loginContainer}>
      <h2>Create Account</h2>
      <form className={styles.loginForm}>
        <input type="email" placeholder="Email" className={styles.inputField} />
        <input type="password" placeholder="Password" className={styles.inputField} />
        <button type="submit" className={styles.loginButton} onClick={handleSubmit}>Cretae Account</button>
        <p className={styles.signupText}>
          Already have an account? <a href="/login">Click here</a>
        </p>
      </form>
    </div>
  );
}

export default CreateAccount;