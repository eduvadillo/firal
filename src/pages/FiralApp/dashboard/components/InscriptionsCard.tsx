import React, { useState } from 'react';
import styles from '../styles/InscriptionsCard.module.css';

const InscriptionsCard: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const months = [
    'Gener',
    'Febrer',
    'Març',
    'Abril',
    'Maig',
    'Juny',
    'Juliol',
    'Agost',
    'Setembre',
    'Octubre',
    'Novembre',
    'Desembre',
  ];

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const generateCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDayOfMonth = getFirstDayOfMonth(currentDate);
    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className={styles['day-cell']}></div>);
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
      const isSelected =
        selectedDate &&
        date.getDate() === selectedDate.getDate() &&
        date.getMonth() === selectedDate.getMonth() &&
        date.getFullYear() === selectedDate.getFullYear();

      days.push(
        <div
          key={day}
          className={`${styles['day-cell']} ${isSelected ? styles.highlighted : ''} ${
            styles.clickable
          }`}
          onClick={() => handleDateClick(date)}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  const handlePreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <div className={styles['inscriptions-card']}>
      <div className={styles['inscriptions-card-content']}>
        <div className={styles['month-navigation']}>
          <button
            className={styles['nav-button']}
            onClick={handlePreviousMonth}
            aria-label="Mes anterior"
          >
            ‹
          </button>
          <div className={styles['month-indicator']}>
            <span>
              {months[currentDate.getMonth()]} {currentDate.getFullYear()}
            </span>
          </div>
          <button
            className={styles['nav-button']}
            onClick={handleNextMonth}
            aria-label="Mes següent"
          >
            ›
          </button>
        </div>

        <div className={styles['calendar-grid']}>
          <div className={styles['weekday-row']}>
            <span>Dg</span>
            <span>Dl</span>
            <span>Dt</span>
            <span>Dm</span>
            <span>Dj</span>
            <span>Dv</span>
            <span>Ds</span>
          </div>

          <div className={styles['days-grid']}>{generateCalendarDays()}</div>
        </div>

        {selectedDate && (
          <div className={styles['selected-date']}>
            Data seleccionada: {selectedDate.getDate()} de {months[selectedDate.getMonth()]} de{' '}
            {selectedDate.getFullYear()}
          </div>
        )}
      </div>
    </div>
  );
};

export default InscriptionsCard;
