import React from 'react';
import styles from './Footer.module.css';
import firaPng from '../../../../assets/images/fira.png';

// Based on Figma Group 2832 (430:5645) and Line 76 (430:5658)

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <img src={firaPng} alt="Firal Logo" className={styles.logo} />
          <div className={styles.social}>
            <button
              className={styles.socialLink}
              onClick={() => window.open('https://www.instagram.com/firal.app', '_blank')}
            >
              Instagram
            </button>
            <span className={styles.separation}>|</span>
            <p className={styles.copyright}>Firal 2025 ©</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
