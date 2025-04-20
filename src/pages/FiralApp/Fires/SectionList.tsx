import React, { FC, ReactNode, Children, useState } from 'react';
import styles from './styles/SectionList.module.css';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface SectionListProps {
  title: string;
  children: ReactNode;
}

const SectionList: FC<SectionListProps> = ({ title, children }) => {
  const items = Children.toArray(children);
  const [startIndex, setStartIndex] = useState(0);
  const ITEMS_PER_PAGE = 4;

  const goPrev = () =>
    setStartIndex((prev) => (prev === 0 ? items.length - ITEMS_PER_PAGE : prev - ITEMS_PER_PAGE));
  const goNext = () =>
    setStartIndex((prev) => (prev + ITEMS_PER_PAGE >= items.length ? 0 : prev + ITEMS_PER_PAGE));

  const visibleItems = (() => {
    const slice = items.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    return slice.length === ITEMS_PER_PAGE
      ? slice
      : slice.concat(items.slice(0, ITEMS_PER_PAGE - slice.length));
  })();

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <button className={styles.viewAll}>
          Veure-les totes <FiChevronRight className={styles.icon} />
        </button>
      </div>
      <div className={styles.carousel}>
        <button onClick={goPrev} className={styles.arrow} aria-label="Anterior">
          <FiChevronLeft />
        </button>
        <div className={styles.list}>
          {visibleItems.map((item, idx) => (
            <div key={idx} className={styles.cardWrapper}>
              {item}
            </div>
          ))}
        </div>
        <button onClick={goNext} className={styles.arrow} aria-label="Següent">
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
};

export default SectionList;
