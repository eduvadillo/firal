import React, { FC } from 'react';
import styles from './styles/FiraInfo.module.css';

interface InfoItem {
  label: string;
  value: string;
}

interface FiraInfoProps {
  items: InfoItem[];
  columns?: number;
}

const FiraInfo: FC<FiraInfoProps> = ({ items, columns = 4 }) => (
  <div className={styles.grid} style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
    {items.map((item, idx) => (
      <div key={idx} className={styles.item}>
        <p className={styles.label}>{item.label}</p>
        <p className={styles.value}>{item.value}</p>
      </div>
    ))}
  </div>
);

export default FiraInfo;
