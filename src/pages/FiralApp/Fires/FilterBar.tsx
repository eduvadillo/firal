import React, { FC } from 'react';
import styles from './styles/FilterBar.module.css';
import SearchBar from './SearchBar';
import { FiChevronDown } from 'react-icons/fi';

const filterOptions = ['Gastronòmiques', 'Petites', 'Ben valorades', 'Ciència'];

interface FilterBarProps {
  selectedFilters: string[];
  onFilterChange: (tags: string[]) => void;
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

const FilterBar: FC<FilterBarProps> = ({
  selectedFilters,
  onFilterChange,
  searchTerm,
  onSearchChange,
}) => (
  <div className={styles.filterBar}>
    <SearchBar value={searchTerm} onChange={onSearchChange} />
    <div className={styles.chips}>
      {filterOptions.map((option) => {
        const isActive = selectedFilters.includes(option);
        const handleClick = () => {
          if (isActive) {
            onFilterChange(selectedFilters.filter((t) => t !== option));
          } else {
            onFilterChange([...selectedFilters, option]);
          }
        };
        return (
          <button
            key={option}
            className={`${styles.chip} ${isActive ? styles.chipActive : ''}`}
            onClick={handleClick}
          >
            {option}
          </button>
        );
      })}
    </div>
    <button className={styles.filterButton}>
      Filtres <FiChevronDown className={styles.icon} />
    </button>
  </div>
);

export default FilterBar;
