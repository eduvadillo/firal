import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authService } from '../../services/auth.service';
import {
  setCredentials,
  setLoading,
  setError,
  selectAuthStatus,
  selectAuthError,
  selectIsAuthenticated,
} from '../../store/slices/authSlice';
import styles from './Login.module.css';

interface ValidationErrors {
  email?: string;
  password?: string;
}

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const authStatus = useSelector(selectAuthStatus);
  const authError = useSelector(selectAuthError);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const isLoading = authStatus === 'loading';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [apiError, setApiError] = useState<string | null>(null);

  // Redirect if already logged in
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  // Update local apiError state when Redux authError changes
  useEffect(() => {
    setApiError(authError);
  }, [authError]);

  // Form validation
  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {};

    if (!email.trim()) {
      newErrors.email = 'El correu electrònic és obligatori';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'El correu electrònic no és vàlid';
    }

    if (!password) {
      newErrors.password = 'La contrasenya és obligatòria';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setApiError(null); // Clear local error on new submission
    dispatch(setError('')); // Clear Redux error

    if (!validateForm()) {
      return;
    }

    dispatch(setLoading());

    try {
      const response = await authService.login({ email, password });
      // If login succeeds, authService handles response structure internally
      dispatch(setCredentials({ user: response.data.user, token: response.token }));
      // Redirect is handled by the useEffect hook
    } catch (error: any) {
      console.error('Error de login:', error);
      const errorMessage =
        error.response?.data?.message || error.message || 'Error en iniciar sessió';
      // Let useEffect handle setting apiError from Redux state
      dispatch(setError(errorMessage));
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h2>Iniciar Sessió</h2>
      {/* Display API error from Redux state via local state */}
      {apiError && <div className={styles.errorMessage}>{apiError}</div>}
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <div className={styles.formGroup}>
          <label htmlFor="email">Correu electrònic</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email) {
                setErrors({ ...errors, email: undefined });
              }
            }}
            className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            disabled={isLoading}
          />
          {errors.email && (
            <span id="email-error" className={styles.errorText} role="alert">
              {errors.email}
            </span>
          )}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Contrasenya</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (errors.password) {
                setErrors({ ...errors, password: undefined });
              }
            }}
            className={`${styles.input} ${errors.password ? styles.inputError : ''}`}
            aria-invalid={!!errors.password}
            aria-describedby={errors.password ? 'password-error' : undefined}
            disabled={isLoading}
          />
          {errors.password && (
            <span id="password-error" className={styles.errorText} role="alert">
              {errors.password}
            </span>
          )}
        </div>

        <button type="submit" className={styles.submitButton} disabled={isLoading}>
          {isLoading ? 'Iniciant...' : 'Entrar'}
        </button>
      </form>
    </div>
  );
};
