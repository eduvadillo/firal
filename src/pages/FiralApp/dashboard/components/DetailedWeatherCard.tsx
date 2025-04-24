import React from 'react';
import styles from '../styles/DetailedWeatherCard.module.css';
import { FiChevronDown, FiSun, FiCloud, FiCloudRain } from 'react-icons/fi';

const DetailedWeatherCard: React.FC = () => {
  const headerDate = '10 a 16 febrer 2025';
  const temp = 13;
  const precip = 100;
  const humidity = 88;
  const windSpeed = 26;
  const timeLabel = 'Divendres 15:00';
  const condition = 'Pluja';
  const forecast = [
    { day: 'dv.', icon: <FiSun size={24} />, max: 15, min: 9 },
    { day: 'ds.', icon: <FiCloudRain size={24} />, max: 16, min: 7 },
    { day: 'dg.', icon: <FiCloud size={24} />, max: 13, min: 7 },
    { day: 'dl.', icon: <FiCloudRain size={24} />, max: 13, min: 6 },
    { day: 'dt.', icon: <FiSun size={24} />, max: 15, min: 7 },
    { day: 'dc.', icon: <FiCloud size={24} />, max: 14, min: 7 },
    { day: 'dj.', icon: <FiCloud size={24} />, max: 16, min: 8 },
  ];

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>Meteorologia</h3>
        <div className={styles.dateSelector}>
          <span>{headerDate}</span>
          <FiChevronDown className={styles.chevron} />
        </div>
      </div>

      <p className={styles.instructions}>
        Aquí pots consultar quines vacunes hauràs de subministrar avui
      </p>

      <div className={styles.mainBlock}>
        <div className={styles.left}>
          <div className={styles.iconTemp}>
            <FiCloudRain className={styles.icon} />
            <span className={styles.temp}>{temp}°C</span>
          </div>
          <div className={styles.details}>
            <p>Precipitació: {precip}%</p>
            <p>Humitat: {humidity}%</p>
            <p>Vent: {windSpeed} km/h</p>
          </div>
        </div>
        <div className={styles.divider} />
        <div className={styles.right}>
          <p className={styles.sectionLabel}>Temps</p>
          <p className={styles.timeLabel}>{timeLabel}</p>
          <p className={styles.condition}>{condition}</p>
        </div>
      </div>

      <div className={styles.forecast}>
        {forecast.map((day, idx) => (
          <div key={idx} className={styles.forecastDay}>
            <span className={styles.day}>{day.day}</span>
            <div className={styles.forecastIcon}>{day.icon}</div>
            <span className={styles.maxMin}>
              {day.max}° {day.min}°
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailedWeatherCard;
