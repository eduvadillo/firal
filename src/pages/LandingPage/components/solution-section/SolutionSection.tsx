import React from "react";
import styles from "./SolutionSection.module.css";
import iconCheck from "../../../../assets/images/icon-check-circle.svg";

const solutions: string[] = [
  "Cercador de fires amb filtres per dates, zones i tipus de producte",
  "Instruccions clares i pas a pas per inscriure't.",
  "Repositori amb tota la teva documentació. Només pujaràs la info un cop",
  "Seguiment de l'estat d'inscripció, recordatoris i notificacions.",
  "Estadístiques i anàlisis",
];

export const SolutionSection: React.FC = () => {
  return (
    <section className={styles.solutionSection}>
      <div className={styles.container}>
        {/* El diseño no incluye un título explícito para esta sección, */}
        {/* pero podríamos añadir uno si fuera necesario, ej: "Firal t'ho posa fàcil" */}
        {/* <h2 className={styles.title}>Firal t'ho posa fàcil</h2> */}
        <div className={styles.grid}>
          {solutions.map((solution, index) => (
            <div key={index} className={styles.solutionItem}>
              <img src={iconCheck} alt='' className={styles.icon} aria-hidden='true' />
              <p>{solution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
