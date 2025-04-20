import React, { FC } from 'react';
import styles from './styles/FiraDescription.module.css';

interface FiraDescriptionProps {
  imageUrl: string;
  title: string;
  description: string;
  linkText: string;
  onLinkClick?: () => void;
}

const FiraDescription: FC<FiraDescriptionProps> = ({
  imageUrl,
  title,
  description,
  linkText,
  onLinkClick,
}) => (
  <div className={styles.container}>
    <img src={imageUrl} alt={title} className={styles.image} />
    <div className={styles.textContainer}>
      {/* <h2 className={styles.title}>{title}</h2> */}
      <p className={styles.description}>{description}</p>
      <button className={styles.link} onClick={onLinkClick}>
        {linkText}
      </button>
    </div>
  </div>
);

export default FiraDescription;
