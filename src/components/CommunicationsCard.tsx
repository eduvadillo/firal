import React from 'react';
import styles from '../styles/CommunicationsCard.module.css';

const CommunicationsCard: React.FC = () => {
  return (
    <div className={styles['communications-card']}>
      <div className={styles['communications-header']}>
        <h3>Comunicaciones</h3>
        <p>Mensajes pendientes de responder</p>
      </div>

      <div className={styles['communications-list']}>
        <div className={styles['communication-item']}>
          <div className={styles['sender-avatar']}>
            <img src="/assets/ajuntament-avatar.jpg" alt="Ajuntament" />
          </div>
          <div className={styles['message-content']}>
            <div className={styles['message-sender']}>
              <span className={styles['sender-name']}>Ajuntament de Vallgorguina</span>
              <span className={styles['message-time']}>Hace 2 días</span>
            </div>
            <p className={styles['message-preview']}>
              Benvolgut expositor, li recordem que és necessari presentar la sol·licitud...
            </p>
          </div>
          <div className={`${styles['message-status']} ${styles.unread}`}>
            <span className={styles['status-indicator']}></span>
          </div>
        </div>

        <div className={styles['communication-item']}>
          <div className={styles['sender-avatar']}>
            <img src="/assets/organitzador-avatar.jpg" alt="Organitzador" />
          </div>
          <div className={styles['message-content']}>
            <div className={styles['message-sender']}>
              <span className={styles['sender-name']}>Organitzador Fira Sant Llorenç</span>
              <span className={styles['message-time']}>Hace 1 semana</span>
            </div>
            <p className={styles['message-preview']}>
              Hem revisat la seva proposta de parada i ens agradaria comentar alguns aspectes...
            </p>
          </div>
          <div className={styles['message-status']}>
            <span className={styles['status-indicator']}></span>
          </div>
        </div>
      </div>

      <div className={styles['communications-footer']}>
        <button className={styles['view-all-button']}>
          Ver todos los mensajes
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

export default CommunicationsCard;
