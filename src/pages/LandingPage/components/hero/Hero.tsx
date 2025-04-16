import React from "react";
import styles from "./Hero.module.css";
import backgroundImage from "../../../../assets/images/background2.webp";
import dashboardImage from "../../../../assets/images/dashboardLanding.webp";

export const Hero: React.FC = () => {
  const scrollToWaitlist = () => {
    const waitlistSection = document.querySelector(".waitlistSection");
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={styles.hero}>
      <div className={styles.backgroundContainer}>
        <img
          src={backgroundImage}
          alt='Abstract background'
          className={styles.backgroundImage}
          aria-hidden='true'
        />
      </div>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Simplifica la gestió <br />
            de les teves fires
          </h1>
          <p className={styles.subtitle}>
            Troba, inscriu-te i fes seguiment de totes les convocatòries en una sola plataforma
          </p>
          <button onClick={scrollToWaitlist} className={styles.ctaButton}>
            Vull saber-ne més
          </button>
        </div>
        <div className={styles.imageContainer}>
          {/* Añadir un contenedor para la imagen y el overlay */}
          <div className={styles.dashboardWrapper}>
            <img
              src={dashboardImage}
              alt='Firal Dashboard Preview'
              className={styles.dashboardImage}
            />
            {/* Overlay con degradado para la parte inferior */}
            <div className={styles.dashboardOverlay}></div>
          </div>
        </div>
      </div>
    </section>
  );
};
