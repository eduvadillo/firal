import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectCurrentUser, logout } from '../../../store/slices/authSlice';
import avatarPlaceholder from '../../../assets/images/profile-avatar.png';
import '../styles/Header.css';
import { NotificationIcon, SettingsIcon, ArrowDownIcon } from './icons';

const Header: React.FC = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userName = currentUser?.name || 'usuari';

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <header className="dashboard-header">
      <div className="header-left">
        <div className="welcome-message">
          <h1>Bon dia {userName},</h1>
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

        <div
          className="user-profile"
          onClick={handleLogout}
          style={{ cursor: 'pointer' }}
          title="Tancar sessió"
        >
          <div className="user-avatar">
            <div className="avatar-image">
              <img src={avatarPlaceholder} alt="User Profile" />
            </div>
            <div className="dropdown-icon">
              <ArrowDownIcon />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
