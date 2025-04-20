import React, { ChangeEvent, FC } from 'react';
import styles from './styles/SearchBar.module.css';
import { SearchIcon } from '../components/icons';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ value, onChange }) => (
  <div className={styles.container}>
    <SearchIcon className={styles.icon} />
    <input
      type="text"
      placeholder="Buscar fires"
      className={styles.input}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

export default SearchBar;
