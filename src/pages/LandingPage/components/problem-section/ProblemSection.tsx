import React from "react";
import styles from "./ProblemSection.module.css";
import iconClose from "../../../../assets/images/icon-close.svg";

const problems: string[] = [
  "Trobar les convocatòries és una cerca constant entre webs i xarxes socials",
  "Els processos d'inscripció són lents",
  "Seguiment complicat. Desorganització entre emails, PDFs i carpetes",
  "Processos lents i requisits exigents",
  "Places limitades o falta de disponibilitat",
];

export const ProblemSection: React.FC = () => {
  return (
    <section className={styles.problemSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Cansat/da de procediments complicats?</h2>
        <div className={styles.grid}>
          {problems.map((problem, index) => (
            <div key={index} className={styles.problemItem}>
              <img src={iconClose} alt='' className={styles.icon} aria-hidden='true' />
              <p>{problem}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
