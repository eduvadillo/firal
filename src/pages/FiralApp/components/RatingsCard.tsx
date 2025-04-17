import React from 'react';
import { StarIcon } from './icons';
import '../styles/RatingsCard.css';

interface Rating {
  fairName: string;
  date: string;
  rating: number;
  comment: string;
}

const RatingsCard: React.FC = () => {
  const ratings: Rating[] = [
    {
      fairName: 'Fira de la Candelera',
      date: '08/01/25',
      rating: 4,
      comment: 'Molt bona organització i ambient. Repetirem!',
    },
    {
      fairName: 'Fira Igualada',
      date: '15/12/24',
      rating: 5,
      comment: 'Excel·lent experiència. Tot perfecte.',
    },
    {
      fairName: 'Fira Sant Vicenç',
      date: '02/12/24',
      rating: 3,
      comment: 'Bé en general, però millorable la distribució.',
    },
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    for (let index = 0; index < 5; index++) {
      stars.push(<StarIcon key={index} filled={index < rating} />);
    }
    return stars;
  };

  return (
    <div className="ratings-card">
      <div className="ratings-header">
        <StarIcon filled={true} />
        <h3>Valoracions i feedback</h3>
      </div>
      <div className="ratings-subheader">
        <h4>Les teves darreres valoracions</h4>
        <button className="view-all-button">Veure totes</button>
      </div>
      <div className="ratings-list">
        {ratings.map((rating, index) => (
          <div key={index} className="rating-item">
            <div className="rating-main">
              <div className="rating-info">
                <span className="fair-name">{rating.fairName}</span>
                <span className="rating-date">{rating.date}</span>
              </div>
              <div className="stars-container">{renderStars(rating.rating)}</div>
            </div>
            <p className="rating-comment">{rating.comment}</p>
          </div>
        ))}
      </div>
      <div className="rating-summary">
        <div className="stars-container">{renderStars(4.5)}</div>
        <span className="rating-value">4.5</span>
        <span className="rating-count">(12 opinions)</span>
      </div>
    </div>
  );
};

export default RatingsCard;
