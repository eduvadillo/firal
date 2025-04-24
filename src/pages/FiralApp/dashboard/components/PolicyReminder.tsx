import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/PolicyReminder.module.css';

const PolicyReminder: React.FC = () => {
  const handleUpload = () => {
    // Handle file upload logic
    console.log('Upload policy document');
  };

  return (
    <div className={styles.policyReminder}>
      <div className={styles.reminderHeader}>
        <div className={styles.unreadIndicator} />
        <h3>Recorda adjuntar pòlissa</h3>
      </div>
      <div className={styles.reminderContent}>
        <p>
          És necessari que adjuntis nova pòlissa ja que l’anterior va caducar fa un parell de
          setmanes
        </p>
        <Link to={`/dashboard/lamevaparada`}>
          <button className={styles.uploadButton} onClick={handleUpload}>
            Ves a la meva parada
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PolicyReminder;
