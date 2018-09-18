import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styles from '../../styles/ReviewSummaryLine.css';


const ReviewSummaryLine = ({ category, ratingToStars }) => {
  const description = Object.keys(category);
  const rating = category[description[0]];
  const stars = ratingToStars(rating).map((star, index) => {
    if (star === 'whole') {
      return (<i id={styles.star} key={star.id} className="fas fa-star" />);
    } if (star === 'half') {
      return (<i id={styles.star} kkey={star.id} className="fas fa-star-half-alt" />);
    }
    return (<i id={styles.star} key={star.id} className="far fa-star" />);
  });

  return (
    <div className={styles.descriptionLine}>
      <div className={styles.description}>
        {description}
      </div>
      <div className={styles.descriptionStars} rating={rating}>
        <div className={styles.starDiv}>
          <span className={styles.reviewStar}>
            {stars}
          </span>
        </div>
      </div>
    </div>
  );
};
ReviewSummaryLine.propTypes = {
  category: PropTypes.shape({
    Accuracy: PropTypes.number,
    Communication: PropTypes.number,
    CheckIn: PropTypes.number,
    Value: PropTypes.number,
    Cleanliness: PropTypes.number,
    Location: PropTypes.number,
  }).isRequired,
  ratingToStars: PropTypes.func.isRequired,
};


export default ReviewSummaryLine;
