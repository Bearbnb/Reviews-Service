import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import ReviewWithoutComments from './ReviewWithoutComments.jsx';
import HostComents from './HostComments.jsx';
import styles from '../../styles/Review.css';

const Review = (props) => {
  if (props.review.host_comments === 'null') {
    return (
      <div>
        <ReviewWithoutComments review={props.review} />
        <div className={styles.bottom} />
      </div>
    );
  }
  return (
    <div>
      <ReviewWithoutComments review={props.review} />
      <HostComents review={props.review} host={props.host} />
      <div className={styles.bottom} />
    </div>);
};

Review.propTypes = {
  review: PropTypes.object.isRequired, 
  host: PropTypes.object.isRequired, 
};

export default Review;
