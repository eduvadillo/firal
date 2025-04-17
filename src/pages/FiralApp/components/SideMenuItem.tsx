import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/SideMenu.module.css';

interface SideMenuItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  exact?: boolean;
}

const SideMenuItem: React.FC<SideMenuItemProps> = ({ to, icon, label, exact = false }) => {
  const getClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${styles.menuItem} ${styles.active}` : styles.menuItem;

  return (
    <li>
      <NavLink to={to} end={exact} className={getClass}>
        {icon}
        <span>{label}</span>
      </NavLink>
    </li>
  );
};

export default SideMenuItem;
