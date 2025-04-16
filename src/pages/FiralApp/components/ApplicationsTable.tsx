import React from 'react';
import styles from '../styles/ApplicationsTable.module.css';

const ApplicationsTable: React.FC = () => {
  return (
    <div className={styles['applications-table-container']}>
      <div className={styles['applications-header']}>
        <h3>Solicitudes a Ferias</h3>
        <p>Gestiona tus solicitudes para participar en ferias</p>
      </div>

      <div className={styles['table-container']}>
        <table className={styles['applications-table']}>
          <thead>
            <tr>
              <th>Feria</th>
              <th>Fechas</th>
              <th>Localización</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles['fair-name']}>Fira de la Candelera</td>
              <td>02-03 Feb, 2025</td>
              <td>Molins de Rei</td>
              <td>
                <span className={`${styles['status-badge']} ${styles.accepted}`}>Aceptada</span>
              </td>
              <td className={styles['actions-cell']}>
                <button className={styles['action-button']}>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z"
                      fill="#686868"
                    />
                  </svg>
                  <span>Ver</span>
                </button>
              </td>
            </tr>
            <tr>
              <td className={styles['fair-name']}>Fira Sant Llorenç</td>
              <td>10-12 Ago, 2025</td>
              <td>Sant Llorenç d'Hortons</td>
              <td>
                <span className={`${styles['status-badge']} ${styles.pending}`}>Pendiente</span>
              </td>
              <td className={styles['actions-cell']}>
                <button className={styles['action-button']}>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z"
                      fill="#686868"
                    />
                  </svg>
                  <span>Ver</span>
                </button>
              </td>
            </tr>
            <tr>
              <td className={styles['fair-name']}>Fira de la Tòfona</td>
              <td>15-18 Mar, 2025</td>
              <td>Centelles</td>
              <td>
                <span className={`${styles['status-badge']} ${styles.rejected}`}>Rechazada</span>
              </td>
              <td className={styles['actions-cell']}>
                <button className={styles['action-button']}>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z"
                      fill="#686868"
                    />
                  </svg>
                  <span>Ver</span>
                </button>
              </td>
            </tr>
            <tr>
              <td className={styles['fair-name']}>Fira del Gall</td>
              <td>18-19 Dic, 2025</td>
              <td>Vilafranca del Penedès</td>
              <td>
                <span className={`${styles['status-badge']} ${styles.draft}`}>Borrador</span>
              </td>
              <td className={styles['actions-cell']}>
                <button className={styles['action-button']}>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM21.41 6.34L17.66 2.59L15.13 5.13L18.88 8.88L21.41 6.34Z"
                      fill="#686868"
                    />
                  </svg>
                  <span>Editar</span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={styles['table-footer']}>
        <button className={styles['view-all-button']}>
          Ver todas las solicitudes
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="#6A28FC" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ApplicationsTable;
