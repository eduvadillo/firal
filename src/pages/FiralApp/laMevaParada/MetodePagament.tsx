import React from 'react';
import styles from './styles/MetodePagament.module.css';
import { FaCcVisa } from 'react-icons/fa';
import { FiEdit, FiChevronDown } from 'react-icons/fi';

const MetodePagament: React.FC = () => (
  <div className={styles.container}>
    <h2 className={styles.title}>Mètode de pagament</h2>
    <p className={styles.description}>
      Fira només utilitzarà les dades de la teva targeta de crèdit per a realitzar pagaments als
      organitzadors de les fires que sol·licitis
    </p>
    <p className={styles.subDescription}>Omple les dades de la teva targeta de crèdit</p>
    <div className={styles.card}>
      <div className={styles.cardLogo}>
        <FaCcVisa size={36} color="#1a1f71" />
      </div>
      <div className={styles.cardInfo}>
        <span className={styles.cardNumber}>.... .... .... 3688</span>
        <span className={styles.cardExpiry}>La teva targeta caduca el juliol del 2030</span>
      </div>
      <div className={styles.cardEdit}>
        <FiEdit size={20} />
      </div>
    </div>
    <div className={styles.chevronDown}>
      <FiChevronDown size={24} />
    </div>
    <div className={styles.actions}>
      <button className={styles.primaryButton}>Guardar</button>
    </div>
  </div>
);

export default MetodePagament;
