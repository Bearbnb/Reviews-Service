import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../../styles/Review.css';

const moment = require('moment');

const HostComments = ({ review }) => {
  return (
      <div className={styles.hostContainer}>
    <div className={styles.mainHostContainer}>
      <div className={styles.hostPhoto}>
        <div className={styles.hostAvatar}>
          <img className={styles.avatar} src={review.host.photo} alt="" />
        </div>
      </div>
      <div className={styles.hostText}>
        <div className={styles.textHostHeader}>
          <h4>Response from {review.host.name}:</h4>
        </div>
        <p>{review.review.host_comments}</p>
        <div className={styles.hostText} />
        <div className={styles.HostDate}>
          {moment(review.review.created).format('MMMM YYYY')}
        </div>
      </div>
    </div>
  </div>
  );
};


export default HostComments;
