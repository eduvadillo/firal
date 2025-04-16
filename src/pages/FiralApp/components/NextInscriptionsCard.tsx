import React, { useState, useEffect, useRef } from 'react';
import { CalendarIcon } from './icons';
import styles from '../styles/NextInscriptionsCard.module.css';

interface Fair {
  id: string;
  name: string;
  date: string;
  inscriptionsDate: string;
  imageUrl: string;
}

const mockFairs: Fair[] = [
  {
    id: '1',
    name: 'Fira de la Candelera',
    date: '2 de febrer de 2024',
    inscriptionsDate: 'Inscripcions: 1 - 15 de gener',
    imageUrl: '/assets/images/candalera.png',
  },
  {
    id: '2',
    name: 'Lactium',
    date: '13 de maig de 2024',
    inscriptionsDate: "Inscripcions: 1 - 30 d'abril",
    imageUrl: '/assets/images/lactium.png',
  },
  {
    id: '3',
    name: 'Literal',
    date: '13 de maig de 2024',
    inscriptionsDate: "Inscripcions: 1 - 30 d'abril",
    imageUrl: '/assets/images/literal.png',
  },
  {
    id: '4',
    name: 'Mercat de Vic',
    date: '13 de maig de 2024',
    inscriptionsDate: "Inscripcions: 1 - 30 d'abril",
    imageUrl: '/assets/images/vic.png',
  },
  {
    id: '5',
    name: 'Aixada',
    date: '13 de maig de 2024',
    inscriptionsDate: "Inscripcions: 1 - 30 d'abril",
    imageUrl: '/assets/images/aixada.png',
  },
];

const NextInscriptionsCard: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calculateItemsPerView = () => {
      if (cardRef.current) {
        const containerWidth = cardRef.current.offsetWidth;
        const itemWidth = 210; // Base width per item
        const calculatedItems = Math.floor(containerWidth / itemWidth);
        const newItemsPerView = Math.max(1, calculatedItems);

        setItemsPerView(newItemsPerView);
        // Asegurarse de que el currentIndex es válido con el nuevo itemsPerView
        setCurrentIndex((prev) => Math.min(prev, mockFairs.length - newItemsPerView));
      }
    };

    calculateItemsPerView();
    window.addEventListener('resize', calculateItemsPerView);

    return () => {
      window.removeEventListener('resize', calculateItemsPerView);
    };
  }, []);

  const totalItems = mockFairs.length;
  const maxIndex = Math.max(0, totalItems - itemsPerView);

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const visibleFairs = mockFairs.slice(currentIndex, currentIndex + itemsPerView);

  return (
    <div className={styles.nextInscriptionsCard} ref={cardRef}>
      <div className={styles.header}>
        <h3>Obertura properes inscripcions</h3>
        <button className={styles.viewAllButton}>Veure-les totes</button>
      </div>
      <div className={styles.carouselContainer}>
        {currentIndex > 0 && (
          <button
            className={`${styles.carouselButton} ${styles.prevButton}`}
            onClick={handlePrevious}
            aria-label="Previous images"
          >
            ‹
          </button>
        )}
        <div className={styles.content}>
          <div
            className={styles.fairsList}
            style={{
              transform: `translateX(calc(-${currentIndex * (100 / itemsPerView)}%))`,
            }}
          >
            {mockFairs.map((fair) => (
              <div
                key={fair.id}
                className={styles.fairItem}
                style={{
                  width: `calc(${100 / itemsPerView}% - ${
                    (24 * (itemsPerView - 1)) / itemsPerView
                  }px)`,
                }}
              >
                <div className={styles.imageContainer}>
                  <img src={fair.imageUrl} alt={fair.name} className={styles.fairImage} />
                </div>
              </div>
            ))}
          </div>
        </div>
        {currentIndex < maxIndex && (
          <button
            className={`${styles.carouselButton} ${styles.nextButton}`}
            onClick={handleNext}
            aria-label="Next images"
          >
            ›
          </button>
        )}
      </div>
    </div>
  );
};

export default NextInscriptionsCard;
