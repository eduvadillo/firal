import React from 'react';
import styles from './styles/FiresPage.module.css';
import FilterBar from './FilterBar';
import HeroCarousel from './HeroCarousel';
import SectionList from './SectionList';
import FairCard from './FairCard';
import { mockSections } from './mockSections';

const FiresPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const handleSearchChange = (value: string) => setSearchTerm(value);
  const [selectedFilters, setSelectedFilters] = React.useState<string[]>([]);
  const handleFilterChange = (tags: string[]) => setSelectedFilters(tags);

  const filteredSections = mockSections.map((section) => ({
    title: section.title,
    fairs: section.fairs.filter((fair) => {
      const matchesFilter =
        selectedFilters.length === 0 || fair.tags.some((tag) => selectedFilters.includes(tag));
      const matchesSearch = fair.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesFilter && matchesSearch;
    }),
  }));

  return (
    <div className={styles.pageContainer}>
      <FilterBar
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        selectedFilters={selectedFilters}
        onFilterChange={handleFilterChange}
      />
      <HeroCarousel />
      {filteredSections.map((section) => (
        <SectionList key={section.title} title={section.title}>
          {section.fairs.map((fair) => (
            <FairCard key={fair.id} fair={fair} />
          ))}
        </SectionList>
      ))}
    </div>
  );
};

export default FiresPage;
