import React from 'react';
import { MessageIcon } from '../icons';
import styles from '../styles/NewMessages.module.css';

interface Message {
  id: string;
  sender: string;
  preview: string;
  time: string;
  unread: boolean;
}

interface NewMessagesProps {
  messages: Message[];
}

const NewMessages: React.FC<NewMessagesProps> = ({ messages }) => {
  return (
    <div className={styles.newMessages}>
      <div className={styles.messagesHeader}>
        <div className={styles.unreadIndicator} />
        <h3>Tens missatges nous</h3>
      </div>
      <div className={styles.messagesList}>
        {messages.map((message) => (
          <div
            key={message.id}
            className={`${styles.messageItem} ${message.unread ? styles.unread : ''}`}
          >
            <div className={styles.messageContent}>
              <p className={styles.messagePreview}>{message.preview}</p>
            </div>
          </div>
        ))}
      </div>
      <button className={styles.viewAllButton}>Ves a comunicacions</button>
    </div>
  );
};

export default NewMessages;
