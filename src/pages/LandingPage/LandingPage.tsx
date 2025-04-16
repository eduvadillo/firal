import React from 'react';
// Importa el CSS Module renombrado y movido
import styles from './LandingPage.module.css';
// Importa los componentes desde la subcarpeta ./components/
import { Header } from './components/header/Header';
import { Hero } from './components/hero/Hero';
import { ChallengesSolutions } from './components/challenges-solutions/ChallengesSolutions';
import { FeaturesSection } from './components/features-section/FeaturesSection';
import { WaitlistForm } from './components/waitlist-form/WaitlistForm';
import { Footer } from './components/footer/Footer';
// Nota: Asegúrate de que las importaciones de assets DENTRO de estos componentes
// también se actualicen a la ruta '@/assets/images/...'

// Componente principal de la Landing Page, renombrado de App a LandingPage
const LandingPage: React.FC = () => {
  return (
    // Utiliza los estilos del CSS Module importado
    <div className={styles.app}>
      <Header />
      {/* El elemento <main> mantiene su estructura */}
      <main>
        <Hero />
        <ChallengesSolutions />
        <FeaturesSection />
        <WaitlistForm />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
