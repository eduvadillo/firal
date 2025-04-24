import React from 'react';
import styles from '../styles/RequestsTable.module.css';

interface Request {
  id: string;
  fairLogo: string;
  fairName: string;
  requestDate: string;
  fairDate: string;
  status: 'Enviada' | 'Rebutjada' | 'Pendiente' | 'Borrador';
}

const mockRequests: Request[] = [
  {
    id: '1',
    fairLogo: '/assets/images/logos/candelera-logo.png',
    fairName: 'Fira de la Candelera',
    requestDate: '13 gen 2025',
    fairDate: 'Del 5 al 7 ag',
    status: 'Enviada',
  },
  {
    id: '2',
    fairLogo: '/assets/images/logos/oli-logo.png',
    fairName: "Fira de l'olí de Ventalló",
    requestDate: '21 feb 2025',
    fairDate: 'Del 22 al 23 set',
    status: 'Enviada',
  },
];

const RequestsTable: React.FC = () => {
  return (
    <div className={styles.card}>
      {/* Header */}
      <div className={styles.header}>
        <h3 className={styles.title}>Sol·licituds</h3>
        <button className={styles.viewAll}>Veure-les totes</button>
      </div>
      <p className={styles.subtitle}>Darreres peticions de participació en fires realitzades</p>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Fira</th>
              <th>Data sol·licitud</th>
              <th>Data Fira</th>
              <th>Estat</th>
            </tr>
          </thead>
          <tbody>
            {mockRequests.map((req) => (
              <tr key={req.id}>
                <td className={styles.fairCell} data-label="Fira">
                  <div className={styles.logoCell}>
                    <img src={req.fairLogo} alt={req.fairName} className={styles.logo} />
                  </div>
                  <span className={styles.fairName}>{req.fairName}</span>
                </td>
                <td className={styles.dateCell} data-label="Data sol·licitud">
                  {req.requestDate}
                </td>
                <td className={styles.dateCell} data-label="Data Fira">
                  {req.fairDate}
                </td>
                <td className={styles.statusCell} data-label="Estat">
                  <span className={styles.statusDot} style={{ backgroundColor: '#fbbc05' }} />
                  <span className={styles.statusText}>{req.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RequestsTable;
