import React from "react";
import styles from "./ChallengesSolutions.module.css";
import iconClose from "../../../../assets/images/icon-close.svg";
import iconCheck from "../../../../assets/images/icon-check-circle.svg";

const problems: string[] = [
  "Trobar les convocatòries és una cerca constant entre webs i xarxes socials",
  "Els processos d'inscripció són lents",
  "Seguiment complicat. Desorganització entre emails, PDFs i carpetes",
  "Processos lents i requisits exigents",
  "Places limitades o falta de disponibilitat",
];

const solutions: string[] = [
  "Cercador de fires amb filtres per dates, zones i tipus de producte",
  "Instruccions clares i pas a pas per inscriure't.",
  "Repositori amb tota la teva documentació. Només pujaràs la info un cop",
  "Seguiment de l'estat d'inscripció, recordatoris i notificacions.",
  "Estadístiques i anàlisis",
];

export const ChallengesSolutions: React.FC = () => {
  return (
    <section className={styles.challengesSolutions}>
      <div className={styles.container}>
        <h2 className={styles.title}>Cansat/da de procediments complicats?</h2>

        <div className={styles.columns}>
          {/* Problemas - Lado izquierdo */}
          <div className={styles.column}>
            {problems.map((problem, index) => (
              <div key={`problem-${index}`} className={styles.item}>
                <img src={iconClose} alt='' className={styles.icon} aria-hidden='true' />
                <p>{problem}</p>
              </div>
            ))}
          </div>

          {/* Soluciones - Lado derecho */}
          <div className={styles.column}>
            {solutions.map((solution, index) => (
              <div key={`solution-${index}`} className={styles.item}>
                <img src={iconCheck} alt='' className={styles.icon} aria-hidden='true' />
                <p>{solution}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
