import React, { useState } from 'react';
import styles from './styles/LamevaParada.module.css';
import LaMevaParadaHeader from './LaMevaParadaHeader';
import SideMenu from './SideMenu';
import DadesPersonals from './DadesPersonals';
import DadesFiscals from './DadesFiscals';
import DocumentsLegals from './DocumentsLegals';
import MetodePagament from './MetodePagament';

// Map each section name to its component
const sectionMap: Record<string, React.FC> = {
  'Dades personals': DadesPersonals,
  'Dades fiscals': DadesFiscals,
  'Documents legals': DocumentsLegals,
  'Mètode de pagament': MetodePagament,
};

const LaMevaParada: React.FC = () => {
  const [activeSection, setActiveSection] = useState('Dades personals');
  const ActiveComponent = sectionMap[activeSection] || DadesPersonals;
  return (
    <div className={styles.container}>
      <LaMevaParadaHeader />
      <div className={styles.content}>
        <aside className={styles.sidebar}>
          <SideMenu activeItem={activeSection} onSelect={setActiveSection} />
        </aside>
        <section className={styles.main}>
          <ActiveComponent />
        </section>
      </div>
    </div>
  );
};

export default LaMevaParada;
