import React from 'react';
import styles from '../styles/CommunicationsCard.module.css';

const CommunicationsCard: React.FC = () => {
  const mockConversations = [
    {
      id: '1',
      avatar: '/assets/images/logos/ajuntament-vallgorguina.png',
      sender: 'Ajuntament de Vallgorguina',
      date: '19/03/25',
      preview: 'Hola Júlia, vam rebre la docum...',
      unreadCount: 2,
    },
    {
      id: '2',
      avatar: '/assets/images/logos/ajuntament-molins.png',
      sender: 'Ajuntament de Molins de Rei',
      date: '16/03/25',
      preview: 'Gràcies per la teva petició. Estem...',
      unreadCount: 0,
    },
  ];

  return (
    <div className={styles.card}>
      {/* Header */}
      <div className={styles.header}>
        <h3 className={styles.title}>Comunicacions</h3>
        <button className={styles.viewAll}>Veure-les totes</button>
      </div>
      <p className={styles.subtitle}>Tens missatges sense llegir</p>

      {/* List of conversations */}
      <div className={styles.list}>
        {mockConversations.map((conv) => (
          <div key={conv.id} className={styles.item}>
            <div className={styles.avatar}>
              <img src={conv.avatar} alt={conv.sender} />
            </div>
            <div className={styles.content}>
              <div className={styles.meta}>
                <span className={styles.sender}>{conv.sender}</span>
                <p className={styles.preview}>{conv.preview}</p>
              </div>
              <div className={styles.previewContainer}>
                <span className={styles.date}>{conv.date}</span>
                {conv.unreadCount > 0 && <span className={styles.badge}>{conv.unreadCount}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunicationsCard;
