import React, { FC } from 'react';
import styles from './styles/FiraHeader.module.css';

interface FiraHeaderProps {
  name: string;
  rating: number;
  onBasesClick?: () => void;
  onRequestClick?: () => void;
}

const FiraHeader: FC<FiraHeaderProps> = ({ name, rating, onBasesClick, onRequestClick }) => (
  <div className={styles.container}>
    <div className={styles.info}>
      <h1 className={styles.title}>{name}</h1>
      <span className={styles.rating}>{rating.toFixed(1)}/5</span>
    </div>
    <div className={styles.actions}>
      <button className={styles.secondary} onClick={onBasesClick}>
        Bases
      </button>
      <button className={styles.primary} onClick={onRequestClick}>
        Sol·licitar espai
      </button>
    </div>
  </div>
);

export default FiraHeader;
