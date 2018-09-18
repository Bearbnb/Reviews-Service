import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ReviewWithoutComments from './ReviewWithoutComments.jsx';
import HostComents from './HostComments.jsx';
import styles from '../../styles/Review.css';

const Review = ({ review, host, FlagClick }) => {
  if (review.host_comments === 'null') {
    return (
      <div>
        <ReviewWithoutComments review={review} FlagClick={FlagClick} />
        <div className={styles.bottom} />
      </div>
    );
  }
  return (
    <div>
      <ReviewWithoutComments review={review} FlagClick={FlagClick} />
      <HostComents review={review} host={host} />
      <div className={styles.bottom} />
    </div>);
};

Review.propTypes = {
  review: PropTypes.shape({
    host_comments: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
    house_id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    rating: PropTypes.array.isRequired,
    review: PropTypes.string.isRequired,
  }).isRequired,
  host: PropTypes.shape({
    name: PropTypes.string,
    created: PropTypes.string,
    photo: PropTypes.string,
  }).isRequired,
  FlagClick: PropTypes.func.isRequired,
};
export default Review;
