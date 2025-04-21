import React, { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/HeroCarousel.module.css';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
// Import feature images for carousel
import feature1 from '../../../assets/images/feature1.webp';
import feature2 from '../../../assets/images/feature2.webp';
import feature3 from '../../../assets/images/feature3.webp';

interface Slide {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
}

const mockSlides: Slide[] = [
  {
    id: '1',
    title: 'Fira Literal',
    subtitle: '4,5/5 - 24, 25 i 26 de maig | Barcelona',
    imageUrl: feature1,
  },
  {
    id: '2',
    title: 'Mercat Medieval Vic',
    subtitle: '4,8/5 - 6, 7 i 8 de setembre | Vic (Osona)',
    imageUrl: feature2,
  },
  {
    id: '3',
    title: 'Fira Candelaria',
    subtitle: '3,5/5 - Dates per confirmar',
    imageUrl: feature3,
  },
];

const HeroCarousel: FC = () => {
  const [current, setCurrent] = useState(0);
  const maxIndex = mockSlides.length - 1;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === maxIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [maxIndex]);

  const prev = () => setCurrent((prev) => (prev === 0 ? maxIndex : prev - 1));
  const next = () => setCurrent((prev) => (prev === maxIndex ? 0 : prev + 1));

  return (
    <div className={styles.carousel}>
      <button onClick={prev} className={`${styles.nav} ${styles.left}`}>
        <FiChevronLeft />
      </button>
      {mockSlides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`${styles.slide} ${idx === current ? styles.active : ''}`}
          style={{ backgroundImage: `url(${slide.imageUrl})` }}
        >
          {idx === current && (
            <Link to={`/dashboard/fires/${slide.title}`} className={styles.titleLink}>
              <div className={styles.content}>
                <h2 className={styles.title}>{slide.title}</h2>
                <p className={styles.subtitle}>{slide.subtitle}</p>
                <button className={styles.cta}>Veure ara</button>
              </div>
            </Link>
          )}
        </div>
      ))}
      <button onClick={next} className={`${styles.nav} ${styles.right}`}>
        <FiChevronRight />
      </button>
      <div className={styles.dots}>
        {mockSlides.map((_, idx) => (
          <span
            key={idx}
            className={`${styles.dot} ${idx === current ? styles.activeDot : ''}`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
