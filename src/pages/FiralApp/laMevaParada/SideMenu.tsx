import React from 'react';
import styles from './styles/SideMenu.module.css';

interface SideMenuProps {
  activeItem: string;
  onSelect: (item: string) => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ activeItem, onSelect }) => {
  const menuItems = [
    'Dades personals',
    'Dades fiscals',
    'Documents legals',
    'Mètode de pagament',
    'Parada',
    'Producte',
    'Certificacions',
    'Fotografies',
  ];

  return (
    <nav className={styles.container}>
      <ul className={styles.menuList}>
        {menuItems.map((item) => (
          <li
            key={item}
            className={`${styles.menuItem} ${activeItem === item ? styles.active : ''}`}
            onClick={() => onSelect(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideMenu;
