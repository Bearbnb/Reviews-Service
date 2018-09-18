import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styles from '../../styles/Review.css';

const moment = require('moment');

const HostComments = ({ review, host }) => (
  <div className={styles.hostContainer}>
    <div className={styles.mainHostContainer}>
      <div className={styles.hostPhoto}>
        <div className={styles.hostAvatar}>
          <img className={styles.avatar} src={host.photo} alt="" />
        </div>
      </div>
      <div className={styles.hostText}>
        <div className={styles.textHostHeader}>
          <h4 className={styles.response}>Response from {host.name}:</h4>
        </div>
        <p className={styles.response}>{review.host_comments}</p>
        <div className={styles.hostText} />
        <div className={styles.HostDate}>
          {moment(review.created).format('MMMM YYYY')}
        </div>
      </div>
    </div>
  </div>
);

HostComments.propTypes = {
  review: PropTypes.shape({
    host_comments: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
  }).isRequired,
  host: PropTypes.shape({
    name: PropTypes.string,
    created: PropTypes.string,
    photo: PropTypes.string,
  }),
};

HostComments.defaultProps = {
  host: PropTypes.shape({
    name: '',
    created: '',
    photo: '',
  }),
};

export default HostComments;
