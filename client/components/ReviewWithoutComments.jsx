import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styles from '../../styles/Review.css';

const moment = require('moment');

const ReviewWithoutComments = ({review}) => (
  <div className={styles.reviewContainer}>
    <div>
      <div className={styles.mainHeader}>
        <div className={styles.imageHeader}>
          <img className={styles.avatar} src={review.photo} alt="" />
        </div>
        <div className={styles.textHeader}>
          <div className={styles.reviewer}>
            {review.name}
          </div>
          <div className={styles.date}>
            {moment(review.created).format('MMMM YYYY')}
          </div>
        </div>
      </div>
    </div>
    <div className={styles.reviewText}>
      <p>{review.review}</p>
    </div>
  </div>
);

ReviewWithoutComments.propTypes = {
  review: PropTypes.object.isRequired,
};

export default ReviewWithoutComments;
