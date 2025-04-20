import React, { FC } from 'react';
import styles from './styles/FiraGallery.module.css';

interface FiraGalleryProps {
  images: string[]; // expect exactly 5 image URLs: [main, thumb1, thumb2, thumb3, thumb4]
}

const FiraGallery: FC<FiraGalleryProps> = ({ images }) => {
  const [main, thumb1, thumb2, thumb3, thumb4] = images;
  return (
    <div className={styles.gallery}>
      <div className={styles.main}>
        <img src={main} alt="Main image" />
      </div>
      <div className={styles.thumb1}>
        <img src={thumb1} alt="Thumbnail 1" />
      </div>
      <div className={styles.thumb2}>
        <img src={thumb2} alt="Thumbnail 2" />
      </div>
      <div className={styles.thumb3}>
        <img src={thumb3} alt="Thumbnail 3" />
      </div>
      <div className={styles.thumb4}>
        <img src={thumb4} alt="Thumbnail 4" />
      </div>
    </div>
  );
};

export default FiraGallery;
