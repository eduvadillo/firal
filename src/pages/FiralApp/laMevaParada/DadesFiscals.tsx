import React from 'react';
import styles from './styles/DadesFiscals.module.css';

const DadesFiscals: React.FC = () => (
  <div className={styles.container}>
    <h2 className={styles.title}>Dades fiscals</h2>
    <p className={styles.description}>
      Aquí és on podràs centralitzar i actualitzar tota la informació legal de la teva empresa i la
      teva pròpia. Assegura't de tenir tota la informació al dia abans de començar el projecte per
      no tenir problemes amb el pagament.
    </p>

    <div className={styles.formGroup}>
      <label className={styles.label}>Raó social o nom jurídic</label>
      <input type="text" className={styles.input} />
    </div>
    <div className={styles.formGroup}>
      <label className={styles.label}>Domicili o direcció fiscal</label>
      <input type="text" className={styles.input} />
    </div>
    <div className={styles.formGroup}>
      <label className={styles.label}>Entitat jurídica</label>
      <select className={styles.select}>
        <option>Selecciona</option>
      </select>
    </div>

    <h3 className={styles.subTitle}>Forma jurídica</h3>
    <p className={styles.subDescription}>
      La següent informació apareixerà al peu de pàgina de totes les teves factures. Tenint en
      compte la naturalesa jurídica de la teva empresa, assegura't que tota la informació que hi
      aparegui compleixi la normativa i la reglamentació del país on tingui la seu la teva empresa.
    </p>
    <div className={styles.formGroup}>
      <label className={styles.label}>Número de DNI o passaport</label>
      <input type="text" className={styles.input} />
    </div>
    <div className={styles.formGroup}>
      <label className={styles.label}>Número de IVA intracomunitari</label>
      <input type="text" className={styles.input} />
    </div>
    <div className={styles.formGroup}>
      <label className={styles.label}>Número d'epígraf</label>
      <input type="text" className={styles.input} />
    </div>

    <h3 className={styles.subTitle}>Haig de cobrar IVA?</h3>
    <p className={styles.subDescription}>
      Si els teus ingressos han superat el llindar establert a la teva jurisdicció fiscal, has de
      cobrar l'IVA. Ves a la nostra pàgina d'informació sobre l'IVA per obtenir més detalls.
    </p>
    <div className={styles.radioGroup}>
      <label className={styles.radioOption}>
        <input type="radio" name="iva" value="no" />
        <span>No</span>
      </label>
      <label className={styles.radioOption}>
        <input type="radio" name="iva" value="si" defaultChecked />
        <span>Sí</span>
      </label>
    </div>

    <h3 className={styles.subTitle}>Impostos</h3>
    <div className={styles.optionsGroup}>
      <button type="button" className={styles.option}>
        0%
      </button>
      <button type="button" className={styles.option}>
        10%
      </button>
      <button type="button" className={styles.option}>
        21%
      </button>
    </div>

    <h3 className={styles.subTitle}>IRPF</h3>
    <div className={styles.optionsGroup}>
      <button type="button" className={styles.option}>
        -15%
      </button>
      <button type="button" className={styles.option}>
        -7%
      </button>
      <button type="button" className={styles.option}>
        0%
      </button>
    </div>

    <div className={styles.actions}>
      <button className={styles.primaryButton}>Guardar</button>
    </div>
  </div>
);

export default DadesFiscals;
