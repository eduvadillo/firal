import React from 'react';
import '../styles/SideMenu.css';
import {
  SearchIcon,
  DashboardIcon,
  CalendarIcon,
  PersonIcon,
  StorefrontIcon,
  CreditCardIcon,
  MessageIcon,
  StarIcon,
  WeatherIcon,
  HelpIcon,
  SettingsIcon,
} from './icons';

const SideMenu: React.FC = () => {
  return (
    <aside className="side-menu">
      <div className="logo-container">
        <img src="/assets/fira-logo.svg" alt="Fira App" className="logo" />
      </div>

      <div className="search-container">
        <input type="text" placeholder="Buscar" className="search-input" />
        <div className="search-icon">
          <SearchIcon />
        </div>
      </div>

      <div className="menu-section">
        <h3 className="menu-label">MAIN</h3>
        <ul className="menu-items">
          <li className="menu-item active">
            <DashboardIcon fill="#6A28FC" />
            <span>Dashboard</span>
          </li>
          <li className="menu-item">
            <CalendarIcon />
            <span>Calendari</span>
          </li>
          <li className="menu-item">
            <PersonIcon />
            <span>Sol·licituds</span>
          </li>
          <li className="menu-item">
            <StorefrontIcon />
            <span>La meva parada</span>
          </li>
          <li className="menu-item">
            <CreditCardIcon />
            <span>Pagaments</span>
          </li>
          <li className="menu-item">
            <MessageIcon />
            <span>Comunicacions</span>
          </li>
          <li className="menu-item">
            <StarIcon outline={true} />
            <span>Valoracions</span>
          </li>
          <li className="menu-item">
            <WeatherIcon />
            <span>Meteorologia</span>
          </li>
        </ul>
      </div>

      <div className="menu-section">
        <h3 className="menu-label">SUPORT</h3>
        <ul className="menu-items">
          <li className="menu-item">
            <HelpIcon />
            <span>Ajuda</span>
          </li>
          <li className="menu-item">
            <SettingsIcon />
            <span>Preferències</span>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideMenu;
