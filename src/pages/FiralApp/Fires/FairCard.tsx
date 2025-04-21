import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/FairCard.module.css';
import { HeartIcon } from '../components/icons';

export interface Fair {
  id: string;
  name: string;
  date: string;
  location: string;
  category: string;
  rating: number;
  imageUrl: string;
  tags: string[];
}

interface FairCardProps {
  fair: Fair;
}

const FairCard: FC<FairCardProps> = ({ fair }) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const handleToggleFavorite = () => {
    setIsFavorite((current) => !current);
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Link to={`/dashboard/fires/${fair.name}`} className={styles.titleLink}>
          <img src={fair.imageUrl} alt={fair.name} className={styles.image} />
        </Link>
        <button
          className={`${styles.favoriteButton} ${isFavorite ? styles.favoriteActive : ''}`}
          onClick={handleToggleFavorite}
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <HeartIcon filled={isFavorite} />
        </button>
      </div>
      <div className={styles.content}>
        <h4 className={styles.name}>
          <Link to={`/dashboard/fires/${fair.name}`} className={styles.titleLink}>
            <div className={styles.titleRating}>
              {fair.name} <span className={styles.rating}>{fair.rating.toFixed(1)}</span>
            </div>
          </Link>
        </h4>
        <p className={styles.category}>{fair.category}</p>
        <div className={styles.info}>
          <span className={styles.date}>{fair.date}</span>
        </div>
        <div className={styles.info}>
          <span className={styles.location}>{fair.location}</span>
        </div>
      </div>
      <div className={styles.tagsContainer}>
        {fair.tags.map((tag) => (
          <span key={tag} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export const mockFairs: Fair[] = [
  {
    id: '1',
    name: 'Lactium',
    date: '3-4 maig 2025',
    location: 'Vic (Osona)',
    category: 'Gastronomia | productes locals',
    rating: 4.5,
    imageUrl: '/assets/images/lactium.png',
    tags: ['Medieval'],
  },
  {
    id: '2',
    name: 'Fira de la Candelera',
    date: '2-4 feb 2025',
    location: 'Molins de Rei (Barcelona)',
    category: 'Transversal',
    rating: 4.5,
    imageUrl: '/assets/images/candelera.png',
    tags: ['Ciència'],
  },
  {
    id: '3',
    name: 'Fira Literal',
    date: '24-26 maig 2025',
    location: 'Barcelona',
    category: 'Cultura',
    rating: 4.5,
    imageUrl: '/assets/images/literal.png',
    tags: ['Petites'],
  },
  // más mocks si es necesario
];

export default FairCard;
