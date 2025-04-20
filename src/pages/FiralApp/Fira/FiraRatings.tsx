import React from 'react';
import styles from './styles/FiraRatings.module.css';

interface AspectRating {
  label: string;
  rating: number;
}

const FiraRatings: React.FC = () => {
  const average = 4.5;
  const breakdown: Record<number, number> = {
    5: 70,
    4: 20,
    3: 5,
    2: 3,
    1: 2,
  };
  const aspects: AspectRating[] = [
    { label: 'Informació prèvia', rating: 4.8 },
    { label: 'Comunicació', rating: 4.3 },
    { label: 'Ubicació parades', rating: 4.5 },
    { label: 'Preu', rating: 4 },
    { label: 'Afluència', rating: 4.9 },
    { label: 'Muntatge/desmuntatge', rating: 4.1 },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.general}>
        <span className={styles.average}>{average.toFixed(1)}/5</span>
        <h3 className={styles.generalTitle}>Valoracions generals</h3>
      </div>
      <div className={styles.breakdown}>
        {[5, 4, 3, 2, 1].map((star) => (
          <div key={star} className={styles.breakdownRow}>
            <span className={styles.starLabel}>{star}</span>
            <div className={styles.barContainer}>
              <div className={styles.bar} style={{ width: `${breakdown[star]}%` }} />
            </div>
          </div>
        ))}
      </div>
      <div className={styles.aspects}>
        {aspects.map((aspect) => (
          <div key={aspect.label} className={styles.aspectRow}>
            <span className={styles.aspectLabel}>{aspect.label}</span>
            <span className={styles.aspectRating}>{aspect.rating.toFixed(1)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FiraRatings;
