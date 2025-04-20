import React from 'react';
import FiraHeader from './FiraHeader';
import FiraDescription from './FiraDescription';
import FiraGallery from './FiraGallery';
import FiraInfo from './FiraInfo';
import FiraRatings from './FiraRatings';
import FiraReviews from './FiraReviews';
import styles from './styles/Fira.module.css';
// Sample images for gallery
import feature1 from '../../../assets/images/feature1.webp';
import feature2 from '../../../assets/images/feature2.webp';
import feature3 from '../../../assets/images/feature3.webp';
import firaImg from '../../../assets/images/fira.png';
import featureSectionImg from '../../../assets/images/featureSection.png';
import FairCard from './FairCard';
import SectionList from './SectionList';
import { mockSections } from './mockSections';

const Fira: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedFilters, setSelectedFilters] = React.useState<string[]>([]);

  const description = `L'edició de la FIRAGOST 2025 es convertirà en un gran aparador de maquinària, tecnologia, bioeconomia, agramentació, i de productes per l'agricultura, amb el saló AGROINNOVA, un espai exclusivament dedicat al món agrícola. La FIRAGOST, la Fira-exposició del Camp Català per excel·lència, conservarà la seva essència, amb més de 300 expositors en un quilòmetre i mig de recinte firal al centre de la ciutat.`;
  const infoItems = [
    { label: 'Localització', value: 'Valls (Alt Camp)' },
    { label: 'Dates', value: "6 i 7 d'agost" },
    { label: 'Tipus', value: 'Sector Primari' },
    { label: 'Cost inscripció', value: 'Consultar bases' },
    { label: 'Tamany', value: 'Entre 50 i 200 parades' },
    { label: 'Afluència', value: 'Entre 5.000 i 50.000' },
    { label: 'Promotor', value: 'Ajuntament de Valls' },
    { label: 'Requisits', value: '-' },
  ];

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
    <div className={styles.container}>
      <FiraHeader name="FIRAGOST 2025" rating={4.5} />
      <FiraDescription
        imageUrl={feature1}
        title="FIRAGOST 2025"
        description={description}
        linkText="Llegeix més"
      />
      {/* Gallery section */}
      <FiraInfo items={infoItems} columns={4} />
      <FiraGallery images={[feature1, feature2, feature3, firaImg, featureSectionImg]} />
      <div className={styles.sectionContainer}>
        <div className={styles.ratingsWrapper}>
          <FiraRatings />
        </div>
        <div className={styles.reviewsWrapper}>
          <FiraReviews />
        </div>
      </div>
      <div className={styles.nextFairCards}>
        {filteredSections.map((section) => (
          <SectionList key={section.title} title={section.title}>
            {section.fairs.map((fair) => (
              <FairCard key={fair.id} fair={fair} />
            ))}
          </SectionList>
        ))}
      </div>
    </div>
  );
};

export default Fira;
