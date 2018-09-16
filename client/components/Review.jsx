import React from 'react';
import ReactDOM from 'react-dom';
import HostComents from './HostComments.jsx';
import styles from '../../styles/Review.css';


const moment = require('moment');


const ReviewWithoutComments = props => (
  <div className={styles.reviewContainer}>
    <div>
      <div className={styles.mainHeader}>
        <div className={styles.imageHeader}>
            <img className={styles.avatar} src={props.review.photo} alt="" />
          </div>
        <div className={styles.textHeader}>
            <div className={styles.reviewer}>
              {props.review.name}
            </div>
            <div className={styles.date}>
              {moment(props.review.created).format('MMMM YYYY')}
            </div>
          </div>
      </div>
    </div>
    <div className={styles.reviewText}>
      <p>{props.review.review}</p>
    </div>
  </div>
);


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
      <HostComents review={props} />
      <div className={styles.bottom} />
    </div>);
};

export default Review;
