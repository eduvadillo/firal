// FairsCarousel.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/FairsCarousel.module.css';
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

// Determine items per page based on viewport width: mobile 2, tablet 3, desktop 4
const getItemsPerPage = (width: number): number => {
  if (width < 768) return 2;
  if (width < 1024) return 3;
  return 4;
};

const FairsCarousel: React.FC<Props> = ({ fairs }) => {
  const [startIndex, setStartIndex] = useState(0);
  // Manage a local copy of fairs to handle favorite toggling
  const [localFairs, setLocalFairs] = useState<Fair[]>(fairs);
  const [itemsPerPage, setItemsPerPage] = useState<number>(getItemsPerPage(window.innerWidth));

  useEffect(() => {
    const handleResize = () => setItemsPerPage(getItemsPerPage(window.innerWidth));
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleToggleFavorite = (id: string) => {
    setLocalFairs((current) =>
      current.map((fair) => (fair.id === id ? { ...fair, isFavorite: !fair.isFavorite } : fair))
    );
  };

  const goPrev = () => {
    setStartIndex((prev) => (prev === 0 ? localFairs.length - itemsPerPage : prev - itemsPerPage));
  };

  const goNext = () => {
    setStartIndex((prev) => (prev + itemsPerPage >= localFairs.length ? 0 : prev + itemsPerPage));
  };

  // Elementos visibles con wrap-around
  const visible = (() => {
    const slice = localFairs.slice(startIndex, startIndex + itemsPerPage);
    return slice.length === itemsPerPage
      ? slice
      : slice.concat(localFairs.slice(0, itemsPerPage - slice.length));
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
