import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsAuthenticated } from '../../store/slices/authSlice'; // Import the selector
import LandingPage from '../../pages/LandingPage/LandingPage'; // Import the actual LandingPage

const LandingRedirect: React.FC = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  // If the user is authenticated, redirect them to the dashboard
  if (isAuthenticated) {
    // `replace` prevents the landing page route from being added to history
    return <Navigate to="/dashboard" replace />;
  }

  // Otherwise, render the LandingPage
  return <LandingPage />;
};

export default LandingRedirect;
