import React from 'react';
import { StorefrontIcon } from './icons';
import '../styles/PolicyReminder.css';

const PolicyReminder: React.FC = () => {
  const handleUpload = () => {
    // Handle file upload logic
    console.log('Upload policy document');
  };

  return (
    <div className="policy-reminder">
      <div className="reminder-header">
        <StorefrontIcon fill="#6A28FC" />
        <h3>Recorda adjuntar pòlissa</h3>
      </div>
      <div className="reminder-content">
        <p>
          És necessari que adjuntis nova pòlissa ja que l’anterior va caducar fa un parell de
          setmanes
        </p>
        <button className="upload-button" onClick={handleUpload}>
          Adjuntar pòlissa
        </button>
      </div>
    </div>
  );
};

export default PolicyReminder;
