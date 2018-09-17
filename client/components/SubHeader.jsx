import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ReviewSummaryLine from './ReviewSummaryLine.jsx';
import styles from '../../styles/ReviewSummary.css';

const SubHeader = ({searched, categories, ratingToStars, reviews, term, resetHomes}) => {
  if (searched === false) {
    return (
      <div className={styles.breakdownComponent}>
        {categories.map(category => <ReviewSummaryLine category={category} ratingToStars={ratingToStars} />)}
      </div>);
  }
  return (
    <div>
      <h4>{reviews.length} guests have mentioned " {term} "</h4>
      <button type="button" id={styles.resetReviews} onClick={() => resetHomes()}> Back to all reviews </button>
    </div>
  );
};

SubHeader.propTypes = {
  searched: PropTypes.bool.isRequired,
  categories: PropTypes.array.isRequired,
  ratingToStars: PropTypes.func.isRequired,
  reviews: PropTypes.array.isRequired,
  term: PropTypes.string.isRequired,
  resetHomes: PropTypes.func.isRequired,
};


export default SubHeader;
