import React, { useState } from 'react';
import axios from 'axios';
import styles from './WaitlistForm.module.css';
import arrowDownIcon from '../../../../assets/images/icon-arrow-down.svg';

// Based on Figma Group 2827 (430:5627)

const stallTypes = ['Alimentació', 'Artesania', 'Roba i complements', 'Llibres i música', 'Altres'];

export const WaitlistForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [stallType, setStallType] = useState('');
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(
    null
  );
  const [validationErrors, setValidationErrors] = useState<{
    name?: string;
    email?: string;
    stallType?: string;
    privacy?: string;
  }>({});

  const validateForm = () => {
    const errors: { name?: string; email?: string; stallType?: string; privacy?: string } = {};
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();

    if (!trimmedName) {
      errors.name = 'Si us plau, introdueix el teu nom';
    }
    if (!trimmedEmail) {
      errors.email = 'Si us plau, introdueix el teu email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      errors.email = 'Si us plau, introdueix un email vàlid';
    }
    if (!stallType) {
      errors.stallType = 'Si us plau, selecciona un tipus de parada';
    }
    if (!privacyAccepted) {
      errors.privacy = "Has d'acceptar la política de privacitat per continuar";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitResult(null);
    setValidationErrors({});

    try {
      const waitlistData = {
        name: name.trim(),
        email: email.trim(),
        stallType,
        privacyAccepted,
      };

      const response = await axios.post(
        `${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/api/waitlist`,
        waitlistData
      );

      if (response.data.status === 'success') {
        setName('');
        setEmail('');
        setStallType('');
        setPrivacyAccepted(false);
        setSubmitResult({
          success: true,
          message: response.data.message || 'Gràcies per apuntar-te!',
        });
      } else {
        setSubmitResult({
          success: false,
          message: response.data.message || 'Hi ha hagut un error.',
        });
      }
    } catch (error: any) {
      console.error('Error during waitlist submission:', error);
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        'Hi ha hagut un error enviant el formulari. Si us plau, torna-ho a provar més tard.';
      setSubmitResult({
        success: false,
        message: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: 'name' | 'email' | 'stallType', value: string) => {
    switch (field) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'stallType':
        setStallType(value);
        break;
    }
    setValidationErrors((prev) => ({ ...prev, [field]: undefined }));
    setSubmitResult(null);
  };

  return (
    <section className={`${styles.waitlistSection} waitlistSection`}>
      <div className={styles.container}>
        <div className={styles.waitlistTitle}>
          <h2 className={styles.title}>Uneix-te a la llista d'espera</h2>
          <p className={styles.subtitle}>Vols provar firal.cat abans que ningú?</p>
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <p className={styles.description}>
              {`Apunta't a la llista i sigues el primer en saber quan firal.cat estigui disponible.
              Tindràs accés prioritari a la versió beta i l'oportunitat de provar l'eina abans del llançament oficial.
              A més, podràs fer-nos arribar els teus comentaris i ajudar-nos a construir una plataforma realment útil per a paradistes com tu.
              Ens ajudes?`}
            </p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            {submitResult && (
              <div
                className={`${styles.formMessage} ${
                  submitResult.success ? styles.success : styles.error
                }`}
              >
                {submitResult.message}
              </div>
            )}

            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                Nom
              </label>
              <input
                id="name"
                type="text"
                className={`${styles.input} ${validationErrors.name ? styles.inputError : ''}`}
                value={name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="El teu nom"
                disabled={isSubmitting}
              />
              {validationErrors.name && (
                <span className={styles.errorMessage}>{validationErrors.name}</span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input
                id="email"
                type="email"
                className={`${styles.input} ${validationErrors.email ? styles.inputError : ''}`}
                value={email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="El teu email"
                disabled={isSubmitting}
              />
              {validationErrors.email && (
                <span className={styles.errorMessage}>{validationErrors.email}</span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="stallType" className={styles.label}>
                Tipus de parada
              </label>
              <div className={styles.selectWrapper}>
                <select
                  id="stallType"
                  className={`${styles.select} ${
                    validationErrors.stallType ? styles.inputError : ''
                  }`}
                  value={stallType}
                  onChange={(e) => handleInputChange('stallType', e.target.value)}
                  disabled={isSubmitting}
                >
                  <option value="">Selecciona el tipus de parada</option>
                  {stallTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                <img src={arrowDownIcon} alt="" className={styles.selectArrow} aria-hidden="true" />
              </div>
              {validationErrors.stallType && (
                <span className={styles.errorMessage}>{validationErrors.stallType}</span>
              )}
            </div>

            <div className={styles.formGroupCheckbox}>
              <div className={styles.checkboxWrapper}>
                <input
                  id="privacy"
                  type="checkbox"
                  className={styles.checkbox}
                  checked={privacyAccepted}
                  onChange={(e) => {
                    setPrivacyAccepted(e.target.checked);
                    if (e.target.checked) {
                      setValidationErrors((prev) => ({ ...prev, privacy: undefined }));
                      setSubmitResult(null);
                    }
                  }}
                  disabled={isSubmitting}
                />
                <label htmlFor="privacy" className={styles.checkboxLabel}>
                  Accepto <span className={styles.privatPolicy}>la política de privacitat</span>
                </label>
              </div>
              {validationErrors.privacy && (
                <span className={styles.privacyError}>{validationErrors.privacy}</span>
              )}
            </div>

            <button
              type="submit"
              className={`${styles.submitButton} ${
                !privacyAccepted ? styles.submitButtonDisabled : ''
              }`}
              disabled={isSubmitting || !privacyAccepted}
            >
              {isSubmitting ? 'Enviant...' : 'Enviar'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
