import React from 'react';
import '../styles/Header.css';
import { NotificationIcon, SettingsIcon, ArrowDownIcon } from './icons';

const Header: React.FC = () => {
  return (
    <header className="dashboard-header">
      <div className="header-left">
        <div className="welcome-message">
          <h1>Bon dia Júlia,</h1>
          <p>La gestió de fires mai havia estat tant senzilla. Comencem?</p>
        </div>
      </div>
      <div className="header-right">
        <div className="header-icon-button">
          <div className="icon-circle">
            <NotificationIcon />
          </div>
          <div className="notification-badge">
            <div className="badge-circle">
              <span>2</span>
            </div>
          </div>
        </div>

        <div className="header-icon-button">
          <div className="icon-circle">
            <SettingsIcon />
          </div>
        </div>

        <div className="user-profile">
          <div className="user-avatar">
            <div className="avatar-image">
              <img src="/assets/images/profile-avatar.jpg" alt="User Profile" />
            </div>
            <div className="dropdown-icon">
              <ArrowDownIcon />
            </div>
          </div>
        </div>
      </div>

      <div className="notification-dot">
        <div className="purple-dot"></div>
      </div>
    </header>
  );
};

export default Header;
