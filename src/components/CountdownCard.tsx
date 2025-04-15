import React from 'react';
import { CalendarIcon } from './icons';
import '../styles/CountdownCard.css';

interface CountdownCardProps {
  daysLeft: number;
  nextFairName: string;
}

const CountdownCard: React.FC<CountdownCardProps> = ({ daysLeft, nextFairName }) => {
  return (
    <div className="countdown-card">
      <div className="countdown-header">
        <CalendarIcon fill="#6A28FC" />
        <h3>Dies que falten per la propera fira</h3>
      </div>
      <div className="countdown-content">
        <div className="days-counter">
          <span className="days-number">{daysLeft}</span>
          <span className="days-text">dies</span>
        </div>
        <div className="next-fair-date">
          <span>Fira de la Candelera</span>
          <span className="name">{nextFairName}</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownCard;
