import React from "react";
import styles from "./FeaturesSection.module.css";
import featureFires1 from "../../../../assets/images/feature1.webp";
import featureFires2 from "../../../../assets/images/feature2.webp";
import featureSolicituds1 from "../../../../assets/images/feature3.webp";

// Based on Figma Group 2818 (430:5615)

export const FeaturesSection: React.FC = () => {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>Mai havia estat tant fàcil</h2>
        <div className={styles.featuresGrid}>
          {/* Feature Card 1 */}
          <div className={styles.featureCard}>
            <h3 className={styles.featureTitle}>Fires amb tota la informació</h3>
            <div className={styles.imageContainer}>
              <img
                src={featureFires1}
                alt='Fires amb tota la informació'
                className={styles.featureImage}
              />
            </div>
          </div>

          {/* Feature Card 2 */}
          <div className={styles.featureCard}>
            <h3 className={styles.featureTitle}>Filtra per multiples resultats</h3>
            <div className={styles.imageContainer}>
              <img
                src={featureFires2}
                alt='Filtra per multiples resultats'
                className={styles.featureImage}
              />
            </div>
          </div>

          {/* Feature Card 3 */}
          <div className={styles.featureCard}>
            <h3 className={styles.featureTitle}>Controla les teves sol·licituds</h3>
            <div className={styles.imageContainer}>
              <img
                src={featureSolicituds1}
                alt='Controla les teves sol·licituds'
                className={styles.featureImage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
