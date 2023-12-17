import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import styles from './navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link to="/" className={styles.homeButton}>Home</Link>

        <div className={styles.spacer}></div>

        <button className={styles.loginButton}>Login/Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;