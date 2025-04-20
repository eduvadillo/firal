import React from 'react';
import styles from './styles/LaMevaParadaHeader.module.css';

const LaMevaParadaHeader: React.FC = () => (
  <header className={styles.container}>
    <h1 className={styles.title}>La meva parada</h1>
    <p className={styles.description}>
      Aquí és on podràs centralitzar i actualitzar tota la informació legal de la teva empresa i la
      teva pròpia.
    </p>
    <p className={styles.description}>
      Ho pujaràs una sola vegada i t'estalviaràs haver-ho de fer cada vegada que sol·licitis
      assistir a una fira.
    </p>
  </header>
);

export default LaMevaParadaHeader;
