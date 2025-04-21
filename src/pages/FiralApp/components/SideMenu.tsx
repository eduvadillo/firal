import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/SideMenu.module.css';
import firalLogoImage from '../../../assets/images/logoDashboard.png';
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
import { FiFlag } from 'react-icons/fi';
import SideMenuItem from './SideMenuItem';

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
          <SideMenuItem to="/dashboard" icon={<DashboardIcon />} label="Dashboard" exact />
          <SideMenuItem
            to="/dashboard/fires"
            icon={<FiFlag className={styles.menuIcon} />}
            label="Fires"
          />
          <SideMenuItem to="/dashboard/calendar" icon={<CalendarIcon />} label="Calendari" />
          <SideMenuItem to="/dashboard/requests" icon={<PersonIcon />} label="Sol·licituds" />
          <SideMenuItem
            to="/dashboard/lamevaparada"
            icon={<StorefrontIcon />}
            label="La meva parada"
          />
          <SideMenuItem to="/dashboard/payments" icon={<CreditCardIcon />} label="Pagaments" />
          <SideMenuItem
            to="/dashboard/communications"
            icon={<MessageIcon />}
            label="Comunicacions"
          />
          <SideMenuItem
            to="/dashboard/ratings"
            icon={<StarIcon filled={false} />}
            label="Valoracions"
          />
          <SideMenuItem to="/dashboard/weather" icon={<WeatherIcon />} label="Meteorologia" />
        </ul>
      </nav>

      <nav className={styles.menuSection}>
        <h3 className={styles.menuLabel}>SUPORT</h3>
        <ul className={styles.menuItems}>
          <SideMenuItem to="/dashboard/help" icon={<HelpIcon />} label="Ajuda" />
          <SideMenuItem to="/dashboard/preferences" icon={<SettingsIcon />} label="Preferències" />
        </ul>
      </nav>
    </aside>
  );
};

export default SideMenu;
