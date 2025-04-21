import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import fira from '../../../../assets/images/logoDashboard.png';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img src={fira} alt="Firal Logo" className={styles.logo} />
        <nav>
          <Link to="/sign-up" className={styles.signUpButton}>
            Sign up
          </Link>
          <Link to="/login" className={styles.loginLink}>
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
};
