import React from 'react';
import { StorefrontIcon } from '../icons';
import styles from '../styles/AlertCard.module.css';

interface AlertCardProps {
  daysLeft: number;
  fairName: string;
  fairLocation: string;
}

const AlertCard: React.FC<AlertCardProps> = ({ daysLeft, fairName, fairLocation }) => (
  <div className={styles['alert-card']}>
    <div className={styles['alert-header']}>
      <div className={styles['icon-wrapper']}>
        <StorefrontIcon fill="#6A28FC" />
      </div>
      <span className={styles['mobileDays']}>{daysLeft}</span>
      <h3 className={styles['alert-title']}>Dies que falten per la propera fira</h3>
    </div>

    <div className={styles['alert-content']}>
      <div className={styles['days-container']}>
        <span className={styles['days-number']}>{daysLeft}</span>
        <span className={styles['days-text']}>dies</span>
      </div>

      <div className={styles['fair-container']}>
        <span className={styles['fair-name']}>{fairName}</span>
        <span className={styles['fair-location']}>{fairLocation}</span>
      </div>
    </div>
  </div>
);

export default AlertCard;
