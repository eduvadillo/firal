import React from 'react';
// Importa Routes/Route para manejar la navegación INTERNA del dashboard si es necesario
import { Routes, Route } from 'react-router-dom';
// Importa ThemeProvider de styled-components, necesario para los estilos del dashboard
import { ThemeProvider } from 'styled-components';

// --- Asegúrate de que estas rutas sean correctas según tu estructura final ---
// Asumiendo que los componentes del dashboard están ahora en './components/' relativo a este archivo
import Dashboard from './components/Dashboard';
import SideMenu from './components/SideMenu';
// Import FiresPage for /dashboard/fires
import FiresPage from './Fires/FiresPage';
// Import Fira detail page
import Fira from './Fira/Fira';
// Asumiendo que theme y GlobalStyles están en la carpeta raíz 'src/styles/'
// import { theme } from '@/pages/FiralApp/styles/theme';
// import { GlobalStyles } from '@/styles/GlobalStyles'; // GlobalStyles se aplicará en el App.tsx raíz

// Asume que existe un 'FiralApp.module.css' o 'FiralApp.css' correspondiente
import styles from './FiralApp.module.css'; // O podrías usar: import './FiralApp.css';
import LaMevaParada from './laMevaParada/LamevaParada';

// Componente renombrado a FiralApp
function FiralApp() {
  return (
    <div className={styles['app-container']}>
      {' '}
      {/* Clase actualizada si usas CSS Modules */}
      <SideMenu />
      <main className={styles['main-content']}>
        {' '}
        {/* Clase actualizada si usas CSS Modules */}
        {/*
         * Aquí defines las rutas INTERNAS del dashboard.
         * La ruta raíz ('index' o '/') dentro de '/dashboard/*' mostrará el componente Dashboard.
         * Puedes añadir más rutas si la SideMenu navega a otras secciones dentro del dashboard.
         */}
        <Routes>
          {/* Ruta principal que se muestra al entrar a /dashboard */}
          <Route index element={<Dashboard />} />
          {/* Fires page */}
          <Route path="fires" element={<FiresPage />} />
          {/* Fira detail page for individual fairs */}
          <Route path="fires/:fairName" element={<Fira />} />
          <Route path="lamevaparada" element={<LaMevaParada />} />
          {/* Ejemplos de otras rutas internas del dashboard: */}
          {/* <Route path="profile" element={<UserProfilePage />} /> */}
          {/* <Route path="settings" element={<SettingsPage />} /> */}
          {/* <Route path="fair/:fairId" element={<FairDetailPage />} /> */}
        </Routes>
      </main>
    </div>
  );
}

// Exporta el componente renombrado
export default FiralApp;
