import React, { useState, useEffect, useRef } from 'react';
import { CalendarIcon, HeartIcon, StarIcon, LocationIcon } from './icons';
import styles from '../styles/NextInscriptionsCard.module.css';

interface Fair {
  id: string;
  name: string;
  date: string;
  inscriptionsDate: string;
  imageUrl: string;
  location: string;
  rating: number;
  tags: string[];
  isFavorite: boolean;
}

const initialMockFairs: Fair[] = [
  {
    id: '1',
    name: 'Fira de la Candelera',
    date: '2 de febrer de 2024',
    inscriptionsDate: 'Inscripcions: 1 - 15 de gener',
    imageUrl: '/assets/images/candalera.png',
    location: 'Molins de Rei',
    rating: 4.8,
    tags: ['Gastronomia', 'Popular'],
    isFavorite: false,
  },
  {
    id: '2',
    name: 'Lactium',
    date: '13 de maig de 2024',
    inscriptionsDate: "Inscripcions: 1 - 30 d'abril",
    imageUrl: '/assets/images/lactium.png',
    location: 'Vic',
    rating: 4.5,
    tags: ['Formatges', 'Artesania'],
    isFavorite: true,
  },
  {
    id: '3',
    name: 'Literal',
    date: '13 de maig de 2024',
    inscriptionsDate: "Inscripcions: 1 - 30 d'abril",
    imageUrl: '/assets/images/literal.png',
    location: 'Barcelona',
    rating: 4.2,
    tags: ['Llibres', 'Radical'],
    isFavorite: false,
  },
  {
    id: '4',
    name: 'Mercat Medieval Vic',
    date: 'Desembre 2024',
    inscriptionsDate: 'Inscripcions: Properament',
    imageUrl: '/assets/images/vic.png',
    location: 'Vic',
    rating: 4.9,
    tags: ['Medieval', 'Gran Afluència'],
    isFavorite: false,
  },
  {
    id: '5',
    name: "Fira de l'Aixada",
    date: '13 de maig de 2024',
    inscriptionsDate: 'Inscripcions: Properament',
    imageUrl: '/assets/images/aixada.png',
    location: 'Manresa',
    rating: 4.6,
    tags: ['Històrica', 'Familiar'],
    isFavorite: true,
  },
];

const ITEM_WIDTH = 210;
const GAP = 24;
const ITEMS_PER_VIEW = 3; // Mostrar siempre 3 elementos

const NextInscriptionsCard: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fairs, setFairs] = useState<Fair[]>(initialMockFairs);

  const totalItems = fairs.length;
  const maxIndex = Math.max(0, totalItems - ITEMS_PER_VIEW); // Índice máximo basado en 3 visibles

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const handleToggleFavorite = (id: string) => {
    setFairs((currentFairs) =>
      currentFairs.map((fair) =>
        fair.id === id ? { ...fair, isFavorite: !fair.isFavorite } : fair
      )
    );
    console.log(`Toggled favorite for fair ID: ${id}`);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    for (let i = 0; i < fullStars; i++) stars.push(<StarIcon key={`full-${i}`} filled={true} />);
    if (hasHalfStar) stars.push(<StarIcon key="half" filled={true} />);
    for (let i = 0; i < emptyStars; i++) stars.push(<StarIcon key={`empty-${i}`} filled={false} />);
    return stars;
  };

  const translateX = currentIndex * (ITEM_WIDTH + GAP);

  return (
    <div className={styles.nextInscriptionsCard}>
      <div className={styles.header}>
        <h3>Obertura properes inscripcions</h3>
        <button className={styles.viewAllButton}>Veure-les totes</button>
      </div>
      <div className={styles.carouselContainer}>
        {currentIndex > 0 && (
          <button
            className={`${styles.carouselButton} ${styles.prevButton}`}
            onClick={handlePrevious}
            aria-label="Previous fairs"
          >
            ‹
          </button>
        )}
        <div className={styles.content}>
          <div
            className={styles.fairsList}
            style={{
              transform: `translateX(-${translateX}px)`,
              width: `${totalItems * ITEM_WIDTH + (totalItems - 1) * GAP}px`,
            }}
          >
            {fairs.map((fair) => (
              <div key={fair.id} className={styles.fairItem}>
                <div className={styles.imageContainer}>
                  <img src={fair.imageUrl} alt={fair.name} className={styles.fairImage} />
                  <button
                    className={`${styles.favoriteButton} ${
                      fair.isFavorite ? styles.favoriteActive : ''
                    }`}
                    onClick={() => handleToggleFavorite(fair.id)}
                    aria-label={fair.isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                  >
                    <HeartIcon filled={fair.isFavorite} />
                  </button>
                </div>
                <div className={styles.fairInfo}>
                  <h4 className={styles.fairName}>{fair.name}</h4>
                  <div className={styles.ratingContainer}>
                    <div className={styles.stars}> {renderStars(fair.rating)} </div>
                    <span className={styles.ratingValue}>{fair.rating.toFixed(1)}</span>
                  </div>
                  <p className={styles.location}>
                    <LocationIcon /> {fair.location}
                  </p>
                  <div className={styles.tagsContainer}>
                    {fair.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className={styles.fairDate}>{fair.date}</p>
                  <p className={styles.inscriptionsDate}>{fair.inscriptionsDate}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {currentIndex < maxIndex && (
          <button
            className={`${styles.carouselButton} ${styles.nextButton}`}
            onClick={handleNext}
            aria-label="Next fairs"
          >
            ›
          </button>
        )}
      </div>
    </div>
  );
};

export default NextInscriptionsCard;
