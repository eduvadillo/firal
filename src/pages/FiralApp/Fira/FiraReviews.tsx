import React, { useState } from 'react';
import styles from './styles/FiraReviews.module.css';
import profileAvatar from '../../../assets/images/profile-avatar.png';
import SearchIcon from '../dashboard/icons/SearchIcon';
import StarIcon from '../dashboard/icons/StarIcon';

interface Review {
  id: string;
  avatar: string;
  name: string;
  joinInfo: string;
  date: string;
  rating: number;
  comment: string;
}

const mockReviews: Review[] = [
  {
    id: '1',
    avatar: profileAvatar,
    name: 'Delina',
    joinInfo: 'Fa 3 anys que és a Fira',
    date: 'Aquest any',
    rating: 4,
    comment:
      'Bona fira, en el meu cas va anar molt bé. Bona organització, tot molt ben pensat i un preu raonable',
  },
  {
    id: '2',
    avatar: profileAvatar,
    name: 'Pere',
    joinInfo: 'Porta 1 any a Fira',
    date: 'Any passat',
    rating: 4,
    comment:
      'Bona fira, en el meu cas va anar molt bé. Bona organització, tot molt ben pensat i un preu raonable',
  },
  {
    id: '3',
    avatar: profileAvatar,
    name: 'Alberto',
    joinInfo: 'Porta 6 any a Fira',
    date: 'Fa 3 anys',
    rating: 2,
    comment: 'Força decepcionant. La ubicació de la meva parada deixava molt a desitjar.',
  },
];

const FiraReviews: React.FC = () => {
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('Mes recents');
  const filtered = mockReviews.filter(
    (r) =>
      r.name.toLowerCase().includes(search.toLowerCase()) ||
      r.comment.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.title}>272 evaluacions</h3>
        <select value={sort} onChange={(e) => setSort(e.target.value)} className={styles.dropdown}>
          <option>Mes recents</option>
          <option>Mes vells</option>
        </select>
      </div>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Buscar evaluacions"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles.searchInput}
        />
        <div className={styles.searchIcon}>
          <SearchIcon />
        </div>
      </div>
      <ul className={styles.list}>
        {filtered.map((r) => (
          <li key={r.id} className={styles.item}>
            <div className={styles.leftColumn}>
              <div className={styles.avatar}>
                <img src={r.avatar} alt={r.name} />
              </div>
              <div className={styles.ratingDate}>
                <div className={styles.stars}>
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      fill={i < r.rating ? '#6a28fc' : '#e9e9ea'}
                      outline={i >= r.rating}
                      width={10}
                      height={10}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.rightColumn}>
              <div className={styles.info}>
                <span className={styles.name}>{r.name}</span>
                <span className={styles.joinInfo}>{r.joinInfo}</span>
                <span className={styles.date}>{r.date}</span>
              </div>
              <p className={styles.comment}>{r.comment}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FiraReviews;
