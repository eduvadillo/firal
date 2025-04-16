import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authService } from '../../services/auth.service';
import {
  setCredentials,
  setLoading,
  setError,
  selectAuthStatus,
} from '../../store/slices/authSlice';
import styles from './SignUp.module.css';

interface ValidationErrors {
  name?: string;
  email?: string;
  password?: string;
  stallType?: string;
}

const stallTypes = ['Alimentació', 'Artesania', 'Roba i complements', 'Llibres i música', 'Altres'];

export const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authStatus = useSelector(selectAuthStatus);
  const isLoading = authStatus === 'loading';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('firant');
  const [stallType, setStallType] = useState('');
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [apiError, setApiError] = useState('');

  // Password validation function
  const validatePassword = (password: string): boolean => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return (
      password.length >= minLength && hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChar
    );
  };

  // Form validation
  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {};

    if (!name.trim()) {
      newErrors.name = 'Si us plau, introdueix el teu nom';
    }

    if (!email.trim()) {
      newErrors.email = 'El correu electrònic és obligatori';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'El correu electrònic no és vàlid';
    }

    if (!password) {
      newErrors.password = 'La contrasenya és obligatòria';
    } else if (!validatePassword(password)) {
      newErrors.password =
        'La contrasenya ha de tenir almenys 8 caràcters, una majúscula, una minúscula, un número i un caràcter especial';
    }

    if (userType === 'firant' && !stallType) {
      newErrors.stallType = 'Si us plau, selecciona un tipus de parada';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setApiError('');

    if (!validateForm()) {
      return;
    }

    dispatch(setLoading());

    try {
      const userData = {
        name,
        email,
        password,
        userType,
        ...(userType === 'firant' && { stallType }),
      };

      const response = await authService.register(userData);

      dispatch(setCredentials({ user: response.data.user, token: response.token }));
      navigate('/dashboard');
    } catch (error: any) {
      console.error('Error de registre:', error);
      const errorMessage = error.response?.data?.message || error.message || 'Error en el registre';
      setApiError(errorMessage);
      dispatch(setError(errorMessage));
    }
  };

  return (
    <div className={styles.signUpContainer}>
      <h2>Crear un compte</h2>
      {apiError && <div className={styles.errorMessage}>{apiError}</div>}
      <form onSubmit={handleSubmit} className={styles.signUpForm}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Nom</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (errors.name) {
                setErrors({ ...errors, name: undefined });
              }
            }}
            className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            disabled={isLoading}
          />
          {errors.name && (
            <span id="name-error" className={styles.errorText} role="alert">
              {errors.name}
            </span>
          )}
        </div>
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
        <div className={styles.formGroup}>
          <label>Registrar-se com a</label>
          <div className={styles.radioGroup}>
            <label htmlFor="firant">
              <input
                type="radio"
                id="firant"
                name="userType"
                value="firant"
                checked={userType === 'firant'}
                onChange={(e) => {
                  setUserType(e.target.value);
                  if (e.target.value !== 'firant') {
                    setStallType('');
                  }
                }}
                disabled={isLoading}
              />
              Firant
            </label>
            <label htmlFor="organitzador">
              <input
                type="radio"
                id="organitzador"
                name="userType"
                value="organitzador"
                checked={userType === 'organitzador'}
                onChange={(e) => {
                  setUserType(e.target.value);
                  setStallType('');
                }}
                disabled={isLoading}
              />
              Organitzador/a de fires
            </label>
          </div>
        </div>

        {userType === 'firant' && (
          <div className={styles.formGroup}>
            <label htmlFor="stallType">Tipus de parada</label>
            <select
              id="stallType"
              value={stallType}
              onChange={(e) => {
                setStallType(e.target.value);
                if (errors.stallType) {
                  setErrors({ ...errors, stallType: undefined });
                }
              }}
              className={`${styles.select} ${errors.stallType ? styles.inputError : ''}`}
              aria-invalid={!!errors.stallType}
              aria-describedby={errors.stallType ? 'stallType-error' : undefined}
              disabled={isLoading}
            >
              <option value="">Selecciona el tipus de parada</option>
              {stallTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            {errors.stallType && (
              <span id="stallType-error" className={styles.errorText} role="alert">
                {errors.stallType}
              </span>
            )}
          </div>
        )}

        <button type="submit" className={styles.submitButton} disabled={isLoading}>
          {isLoading ? 'Registrant...' : 'Registrar-se'}
        </button>
      </form>
    </div>
  );
};
