import React, { useState } from 'react';
import styles from './styles/DocumentsLegals.module.css';
import { FiUpload } from 'react-icons/fi';

interface FileState {
  [key: string]: File | null;
}

const DocumentsLegals: React.FC = () => {
  const [files, setFiles] = useState<FileState>({
    licencia: null,
    assegurancaParada: null,
    responsabilitat: null,
  });

  const handleFileChange = (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFiles((prev) => ({ ...prev, [key]: file }));
  };

  const handleClear = (key: string) => () => {
    setFiles((prev) => ({ ...prev, [key]: null }));
  };

  const fields = [
    { key: 'licencia', label: 'Llicència de la teva parada *' },
    { key: 'assegurancaParada', label: 'Assegurança de la teva parada *' },
    { key: 'responsabilitat', label: 'Assegurança de responsabilitat civil *' },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Documents legals</h2>
      <p className={styles.description}>
        Adjunta en aquesta secció tots els documents legals relacionats amb la teva activitat.
      </p>

      {fields.map((field) => (
        <div key={field.key} className={styles.formGroup}>
          <label htmlFor={field.key} className={styles.label}>
            {field.label}
          </label>
          <div className={styles.uploadGroup}>
            <label htmlFor={field.key} className={styles.uploadButton}>
              <FiUpload className={styles.uploadIcon} />
              <span>{files[field.key]?.name || 'Afegeix fitxer'}</span>
              <input
                id={field.key}
                type="file"
                className={styles.fileInput}
                onChange={handleFileChange(field.key)}
              />
            </label>
            <button type="button" className={styles.clearButton} onClick={handleClear(field.key)}>
              Esborrar
            </button>
          </div>
        </div>
      ))}

      <div className={styles.actions}>
        <button type="button" className={styles.primaryButton}>
          Guardar
        </button>
      </div>
    </div>
  );
};

export default DocumentsLegals;
