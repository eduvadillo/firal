import React from 'react';
import styles from '../styles/RatingsTable.module.css';
import { StarIcon } from './icons';

interface Rating {
  id: string;
  fairLogo: string;
  fairName: string;
  date: string;
  rating: number;
}

const mockRatings: Rating[] = [
  {
    id: '1',
    fairLogo: '/assets/images/logos/candelera-logo.png',
    fairName: 'Fira de la Candelera',
    date: '8 gen 2025',
    rating: 4.5,
  },
  {
    id: '2',
    fairLogo: '/assets/images/logos/igualada-logo.png',
    fairName: 'Fira Igualada',
    date: '26 set 2025',
    rating: 3,
  },
];

const RatingsTable: React.FC = () => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>Valoracions</h3>
        <button className={styles.viewAll}>Veure-les totes</button>
      </div>
      <p className={styles.subtitle}>Les teves darreres valoracions</p>

      <div className={styles.list}>
        {mockRatings.map((item) => {
          const fullStars = Math.floor(item.rating);
          const stars = Array.from({ length: 5 }, (_, i) => (
            <StarIcon key={i} filled={i < fullStars} />
          ));
          return (
            <div key={item.id} className={styles.row}>
              <div className={styles.fairCell}>
                <div className={styles.logoCell}>
                  <img src={item.fairLogo} alt={item.fairName} className={styles.logo} />
                </div>
                <div>
                  <span className={styles.fairName}>{item.fairName}</span>
                  <div className={styles.starsCell}>{stars}</div>
                </div>
              </div>
              <div className={styles.dateCell}>
                <span className={styles.date}>{item.date}</span>
                <span className={styles.ratingValue}>{item.rating.toFixed(1)}/5</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RatingsTable;
