import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/SideMenu.module.css';
import firalLogoImage from '../../../assets/images/logo.png';
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

const FiralLogo = () => (
  <div className={styles.logoContainer}>
    <img src={firalLogoImage} alt="Fira App Logo" className={styles.logo} />
  </div>
);

const SideMenu: React.FC = () => {
  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${styles.menuItem} ${styles.active}` : styles.menuItem;

  return (
    <aside className={styles.sideMenu}>
      <FiralLogo />

      <div className={styles.searchContainer}>
        <input type="text" placeholder="Buscar" className={styles.searchInput} />
        <div className={styles.searchIcon}>
          <SearchIcon />
        </div>
      </div>

      <nav className={styles.menuSection}>
        <h3 className={styles.menuLabel}>MAIN</h3>
        <ul className={styles.menuItems}>
          <li>
            <NavLink to="/dashboard" className={getNavLinkClass} end>
              <DashboardIcon />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/calendar" className={getNavLinkClass}>
              <CalendarIcon />
              <span>Calendari</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/requests" className={getNavLinkClass}>
              <PersonIcon />
              <span>Sol·licituds</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/my-stall" className={getNavLinkClass}>
              <StorefrontIcon />
              <span>La meva parada</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/payments" className={getNavLinkClass}>
              <CreditCardIcon />
              <span>Pagaments</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/communications" className={getNavLinkClass}>
              <MessageIcon />
              <span>Comunicacions</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/ratings" className={getNavLinkClass}>
              <StarIcon filled={false} />
              <span>Valoracions</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/weather" className={getNavLinkClass}>
              <WeatherIcon />
              <span>Meteorologia</span>
            </NavLink>
          </li>
        </ul>
      </nav>

      <nav className={styles.menuSection}>
        <h3 className={styles.menuLabel}>SUPORT</h3>
        <ul className={styles.menuItems}>
          <li>
            <NavLink to="/dashboard/help" className={getNavLinkClass}>
              <HelpIcon />
              <span>Ajuda</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/preferences" className={getNavLinkClass}>
              <SettingsIcon />
              <span>Preferències</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideMenu;
