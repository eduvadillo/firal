import React from 'react';
import styles from '../styles/PaymentsTable.module.css';

const PaymentsTable: React.FC = () => {
  return (
    <div className={styles['payments-table-container']}>
      <div className={styles['payments-header']}>
        <h3>Pagos Pendientes</h3>
        <p>Gestiona tus pagos para las ferias</p>
      </div>

      <div className={styles['table-container']}>
        <table className={styles['payments-table']}>
          <thead>
            <tr>
              <th>Feria</th>
              <th>Concepto</th>
              <th>Importe</th>
              <th>Fecha Límite</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles['fair-name']}>Fira de la Candelera</td>
              <td>Pago Inscripción</td>
              <td className={styles.amount}>245,00 €</td>
              <td>15/01/2025</td>
              <td>
                <span className={`${styles['payment-status']} ${styles.pending}`}>Pendiente</span>
              </td>
              <td className={styles['actions-cell']}>
                <button className={styles['action-button']}>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6 20C5.45 20 4.97917 19.8042 4.5875 19.4125C4.19583 19.0208 4 18.55 4 18V6C4 5.45 4.19583 4.97917 4.5875 4.5875C4.97917 4.19583 5.45 4 6 4H18C18.55 4 19.0208 4.19583 19.4125 4.5875C19.8042 4.97917 20 5.45 20 6V18C20 18.55 19.8042 19.0208 19.4125 19.4125C19.0208 19.8042 18.55 20 18 20H6ZM12 17C12.55 17 13.0208 16.8042 13.4125 16.4125C13.8042 16.0208 14 15.55 14 15C14 14.45 13.8042 13.9792 13.4125 13.5875C13.0208 13.1958 12.55 13 12 13C11.45 13 10.9792 13.1958 10.5875 13.5875C10.1958 13.9792 10 14.45 10 15C10 15.55 10.1958 16.0208 10.5875 16.4125C10.9792 16.8042 11.45 17 12 17ZM8 11H16C16.55 11 17.0208 10.8042 17.4125 10.4125C17.8042 10.0208 18 9.55 18 9V7C18 6.45 17.8042 5.97917 17.4125 5.5875C17.0208 5.19583 16.55 5 16 5H8C7.45 5 6.97917 5.19583 6.5875 5.5875C6.19583 5.97917 6 6.45 6 7V9C6 9.55 6.19583 10.0208 6.5875 10.4125C6.97917 10.8042 7.45 11 8 11Z"
                      fill="#686868"
                    />
                  </svg>
                  <span>Pagar</span>
                </button>
              </td>
            </tr>
            <tr>
              <td className={styles['fair-name']}>Fira Sant Llorenç</td>
              <td>Pago Inscripción</td>
              <td className={styles.amount}>180,00 €</td>
              <td>01/07/2025</td>
              <td>
                <span className={`${styles['payment-status']} ${styles.pending}`}>Pendiente</span>
              </td>
              <td className={styles['actions-cell']}>
                <button className={styles['action-button']}>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6 20C5.45 20 4.97917 19.8042 4.5875 19.4125C4.19583 19.0208 4 18.55 4 18V6C4 5.45 4.19583 4.97917 4.5875 4.5875C4.97917 4.19583 5.45 4 6 4H18C18.55 4 19.0208 4.19583 19.4125 4.5875C19.8042 4.97917 20 5.45 20 6V18C20 18.55 19.8042 19.0208 19.4125 19.4125C19.0208 19.8042 18.55 20 18 20H6ZM12 17C12.55 17 13.0208 16.8042 13.4125 16.4125C13.8042 16.0208 14 15.55 14 15C14 14.45 13.8042 13.9792 13.4125 13.5875C13.0208 13.1958 12.55 13 12 13C11.45 13 10.9792 13.1958 10.5875 13.5875C10.1958 13.9792 10 14.45 10 15C10 15.55 10.1958 16.0208 10.5875 16.4125C10.9792 16.8042 11.45 17 12 17ZM8 11H16C16.55 11 17.0208 10.8042 17.4125 10.4125C17.8042 10.0208 18 9.55 18 9V7C18 6.45 17.8042 5.97917 17.4125 5.5875C17.0208 5.19583 16.55 5 16 5H8C7.45 5 6.97917 5.19583 6.5875 5.5875C6.19583 5.97917 6 6.45 6 7V9C6 9.55 6.19583 10.0208 6.5875 10.4125C6.97917 10.8042 7.45 11 8 11Z"
                      fill="#686868"
                    />
                  </svg>
                  <span>Pagar</span>
                </button>
              </td>
            </tr>
            <tr>
              <td className={styles['fair-name']}>Fira del Gall</td>
              <td>Fianza Reserva</td>
              <td className={styles.amount}>50,00 €</td>
              <td>30/10/2025</td>
              <td>
                <span className={`${styles['payment-status']} ${styles.paid}`}>Pagado</span>
              </td>
              <td className={styles['actions-cell']}>
                <button className={styles['action-button']}>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6 2C4.9 2 4.01 2.9 4.01 4L4 20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2H6ZM13 9V3.5L18.5 9H13Z"
                      fill="#686868"
                    />
                  </svg>
                  <span>Recibo</span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={styles['table-footer']}>
        <button className={styles['view-all-button']}>
          Ver todos los pagos
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

export default PaymentsTable;
