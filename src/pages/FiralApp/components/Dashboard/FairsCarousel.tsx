// FairsCarousel.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/FairsCarousel.module.css';
import { HeartIcon } from '../icons';

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
  stallType: string;
}

interface Props {
  fairs: Fair[];
}

const ITEMS_PER_PAGE = 4;

const FairsCarousel: React.FC<Props> = ({ fairs }) => {
  const [startIndex, setStartIndex] = useState(0);
  // Manage a local copy of fairs to handle favorite toggling
  const [localFairs, setLocalFairs] = useState<Fair[]>(fairs);

  const handleToggleFavorite = (id: string) => {
    setLocalFairs((current) =>
      current.map((fair) => (fair.id === id ? { ...fair, isFavorite: !fair.isFavorite } : fair))
    );
  };

  const goPrev = () => {
    setStartIndex(startIndex === 0 ? fairs.length - ITEMS_PER_PAGE : startIndex - ITEMS_PER_PAGE);
  };

  const goNext = () => {
    setStartIndex(startIndex + ITEMS_PER_PAGE >= fairs.length ? 0 : startIndex + ITEMS_PER_PAGE);
  };

  // Elementos visibles (3) con wrap‑around
  const visible = (() => {
    const slice = localFairs.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    return slice.length === ITEMS_PER_PAGE
      ? slice
      : slice.concat(localFairs.slice(0, ITEMS_PER_PAGE - slice.length));
  })();

  return (
    <div className={styles.nextInscriptionsCard}>
      <div className={styles.header}>
        <h3>Obertura properes inscripcions</h3>
        <button className={styles.viewAllButton}>Veure-les totes</button>
      </div>
      <div className={styles.container}>
        <button onClick={goPrev} aria-label="Anterior" className={styles.arrow}>
          &#8592;
        </button>

        <div className={styles.carousel}>
          {visible.map((fair) => (
            <div key={fair.id} className={styles.card}>
              {/* Image container with favorite overlay */}
              <div className={styles.imageContainer}>
                <Link to={`/dashboard/fires/${fair.name}`} className={styles.titleLink}>
                  <img src={fair.imageUrl} alt={fair.name} className={styles.image} />
                </Link>
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
              {/* Card content */}
              <div className={styles.wrapperNameDate}>
                <Link to={`/dashboard/fires/${fair.name}`} className={styles.titleLink}>
                  <h3 className={styles.name}>{fair.name}</h3>{' '}
                </Link>
                <p className={styles.date}>{fair.rating}</p>
              </div>
              <p className={styles.date}>{fair.stallType}</p>
              <p className={styles.date}>{fair.date}</p>
              <p className={styles.location}>{fair.location}</p>
              {/* Tags styled according to Figma */}
              <div className={styles.tagsContainer}>
                {fair.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button onClick={goNext} aria-label="Siguiente" className={styles.arrow}>
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default FairsCarousel;
