import React from 'react';
import styles from './styles/PaymentsHistoryTable.module.css';

interface Transaction {
  id: string;
  fairLogo: string;
  fairName: string;
  concept: string;
  paymentDate: string;
  amount: string;
}

const mockTransactions: Transaction[] = [
  {
    id: '1',
    fairLogo: '/assets/images/logos/forum-logo.png',
    fairName: 'Fòrum Gastronòmic Girona',
    concept: 'Parada 2x3m',
    paymentDate: '13 nov 2025',
    amount: '€133,50',
  },
  {
    id: '2',
    fairLogo: '/assets/images/logos/formatge-llado-logo.png',
    fairName: 'Fira del formatge de Lladó',
    concept: 'Parada 3x2m',
    paymentDate: '07 gen 2025',
    amount: '€166',
  },
];

const PaymentsHistoryTable: React.FC = () => (
  <div className={styles.card}>
    <div className={styles.header}>
      <h3 className={styles.title}>Pagaments</h3>
      <button className={styles.viewAll}>Veure'ls tots</button>
    </div>
    <p className={styles.subtitle}>Consulta les darreres transaccions</p>

    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Fira</th>
            <th>Concepte</th>
            <th>Data pagament</th>
            <th>Preu</th>
          </tr>
        </thead>
        <tbody>
          {mockTransactions.map((tx) => (
            <tr key={tx.id}>
              <td className={styles.fairCell}>
                <div className={styles.logoCell}>
                  <img src={tx.fairLogo} alt={tx.fairName} className={styles.logo} />
                </div>
                <span className={styles.fairName}>{tx.fairName}</span>
              </td>
              <td className={styles.concept}>{tx.concept}</td>
              <td className={styles.dateCell}>{tx.paymentDate}</td>
              <td className={styles.amount}>{tx.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default PaymentsHistoryTable;
