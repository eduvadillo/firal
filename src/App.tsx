import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import { ThemeProvider } from 'styled-components'; // Necesario si DashboardApp lo usa
import LandingRedirect from './components/auth/LandingRedirect'; // Import the redirect component
import FiralApp from './pages/FiralApp/FiralApp';
import { SignUp } from './pages/sign-up/SignUp';
import { Login } from './pages/login/Login'; // Import the Login component
import { GlobalStyles } from './pages/FiralApp/styles/GlobalStyles';
// import { theme } from './pages/FiralApp/styles/theme';
// import '@/styles/global.css';

function App() {
  return (
    // ThemeProvider aquí si quieres que el tema afecte a todo,
    // o mantenlo dentro de DashboardApp si es solo para esa sección.
    // <ThemeProvider theme={theme}>
    <>
      {/* Aplica estilos globales aquí */}
      <GlobalStyles />
      <Router>
        <Routes>
          {/* Use LandingRedirect for the root path */}
          <Route path="/" element={<LandingRedirect />} />
          {/* Ruta para el dashboard. El '*' permite rutas anidadas dentro de DashboardApp */}
          <Route path="/dashboard/*" element={<FiralApp />} />
          {/* Ruta para la página de registro */}
          <Route path="/sign-up" element={<SignUp />} />
          {/* Ruta para la página de inicio de sesión */}
          <Route path="/login" element={<Login />} />
          {/* Puedes añadir otras rutas globales aquí, como /404, etc. */}
          <Route
            path="*"
            element={
              <div>
                404 - Página no encontrada <Link to="/">Volver al inicio</Link>
              </div>
            }
          />
        </Routes>
      </Router>
    </>
    // </ThemeProvider>
  );
}

export default App;
