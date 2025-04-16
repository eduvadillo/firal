import React from 'react';
import '../styles/NotificationCard.css';

interface NotificationCardProps {
  title: string;
  message: string;
  actionText: string;
  type: 'reminder' | 'message'; // tipos de notificación disponibles
}

const NotificationCard: React.FC<NotificationCardProps> = ({ 
  title, 
  message, 
  actionText,
  type
}) => {
  return (
    <div className="notification-card">
      <div className="notification-header">
        <div className="notification-title">
          <span>{title}</span>
          <div className="notification-indicator"></div>
        </div>
      </div>
      <div className="notification-content">
        <p>{message}</p>
      </div>
      <div className="notification-action">
        <span>{actionText}</span>
      </div>
    </div>
  );
};

export default NotificationCard; 