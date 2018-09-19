import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styles from '../../styles/Review.css';

const moment = require('moment');

const ReviewWithoutComments = ({ review, FlagClick }) => (
  <div className={styles.reviewContainer}>
    <div>
      <div className={styles.mainHeader}>
        <div className={styles.imageHeader}>
          <img className={styles.avatar} src={review.photo} alt="" />
        </div>
        <div className={styles.textHeader}>
          <div className={styles.reviewer}>
            {review.name}
            <div className={styles.flag}>
              <button type="button" onClick={() => FlagClick()}><i className="far fa-flag" /></button>
            </div>
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
  review: PropTypes.shape({
    host_comments: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
  }).isRequired,
  FlagClick: PropTypes.func.isRequired,
};

export default ReviewWithoutComments;
