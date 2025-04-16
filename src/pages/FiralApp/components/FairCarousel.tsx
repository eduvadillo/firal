import React from 'react';
import styles from '../styles/FairCarousel.module.css';

const FairCarousel: React.FC = () => {
  return (
    <div className={styles['fair-carousel-container']}>
      <div className={styles['carousel-header']}>
        <h3>Próximas Ferias</h3>
        <p>Ferias disponibles para inscribirte</p>
      </div>

      <div className={styles['carousel-controls']}>
        <button className={styles['carousel-nav'] + ' ' + styles.prev}>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z" fill="#686868" />
          </svg>
        </button>

        <div className={styles['carousel-items']}>
          <div className={`${styles['carousel-item']} ${styles.active}`}>
            <div className={styles['fair-card']}>
              <div className={styles['fair-image']}>
                <img src="/assets/fira-candelera.jpg" alt="Fira de la Candelera" />
                <div className={styles['fair-dates']}>
                  <span>2-3 Feb 2025</span>
                </div>
              </div>
              <div className={styles['fair-content']}>
                <h4>Fira de la Candelera</h4>
                <p className={styles['fair-location']}>Molins de Rei</p>
                <div className={styles['fair-highlight']}>
                  <span>16</span>
                  <small>días para inscribirse</small>
                </div>
                <button className={styles['fair-button']}>Inscribirse</button>
              </div>
            </div>
          </div>

          <div className={styles['carousel-item']}>
            <div className={styles['fair-card']}>
              <div className={styles['fair-image']}>
                <img src="/assets/fira-sant-llorenc.jpg" alt="Fira Sant Llorenç" />
                <div className={styles['fair-dates']}>
                  <span>10-12 Ago 2025</span>
                </div>
              </div>
              <div className={styles['fair-content']}>
                <h4>Fira Sant Llorenç</h4>
                <p className={styles['fair-location']}>Sant Llorenç d'Hortons</p>
                <div className={styles['fair-highlight']}>
                  <span>68</span>
                  <small>días para inscribirse</small>
                </div>
                <button className={styles['fair-button']}>Inscribirse</button>
              </div>
            </div>
          </div>

          <div className={styles['carousel-item']}>
            <div className={styles['fair-card']}>
              <div className={styles['fair-image']}>
                <img src="/assets/fira-tofona.jpg" alt="Fira de la Tòfona" />
                <div className={styles['fair-dates']}>
                  <span>15-18 Mar 2025</span>
                </div>
              </div>
              <div className={styles['fair-content']}>
                <h4>Fira de la Tòfona</h4>
                <p className={styles['fair-location']}>Centelles</p>
                <div className={styles['fair-highlight']}>
                  <span>120</span>
                  <small>días para inscribirse</small>
                </div>
                <button className={styles['fair-button']}>Inscribirse</button>
              </div>
            </div>
          </div>
        </div>

        <button className={`${styles['carousel-nav']} ${styles.next}`}>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.59 16.59L10 18L16 12L10 6L8.59 7.41L13.17 12L8.59 16.59Z" fill="#686868" />
          </svg>
        </button>
      </div>

      <div className={styles['carousel-indicators']}>
        <span className={`${styles.indicator} ${styles.active}`}></span>
        <span className={styles.indicator}></span>
        <span className={styles.indicator}></span>
      </div>

      <div className={styles['carousel-footer']}>
        <button className={styles['view-all-button']}>
          Ver todas las ferias
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="#6A28FC" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default FairCarousel;
