import React from 'react';
import styles from './styles/DadesPersonals.module.css';

const DadesPersonals: React.FC = () => (
  <div className={styles.container}>
    <h2 className={styles.title}>Dades personals</h2>
    <p className={styles.description}>
      Aquí és on podràs centralitzar i actualitzar tota la informació legal de la teva empresa i la
      teva pròpia.
    </p>
    <p className={styles.description}>
      Ho pujaràs una sola vegada i t'estalviaràs haver-ho de fer cada vegada que sol·licitis
      assistir a una fira.
    </p>
    <div className={styles.formGrid}>
      <div className={styles.formGroup}>
        <label className={styles.label}>Cognoms</label>
        <input type="text" className={styles.input} />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>Nom</label>
        <input type="text" className={styles.input} />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>Nacionalitat</label>
        <select className={styles.select}>
          <option>Selecciona</option>
        </select>
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>Data neixement</label>
        <input type="date" className={styles.input} />
      </div>
    </div>
    <div className={styles.actions}>
      <button className={styles.primaryButton}>Guardar</button>
    </div>
  </div>
);

export default DadesPersonals;
