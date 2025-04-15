import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Dashboard from './components/Dashboard';
import SideMenu from './components/SideMenu';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';
import './styles/App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="app-container">
        <SideMenu />
        <main className="main-content">
          <Router>
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </Router>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
