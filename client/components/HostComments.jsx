import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../../styles/Review.css';

const HostComments = (props) => (
    <div className={styles.hostContainer}>
        <div className={styles.mainHostContainer}>
            <div className={styles.hostPhoto}>
                <div className={styles.hostAvatar}>
                    <img className={styles.avatar} src={props.host.photo} alt="" />
                </div>
            </div>
            <div className={styles.hostText}>
                <div className={styles.textHostHeader}>
                    <h4>Response from {props.host.name}:</h4>
                </div>
                <p>{props.review.host_comments}</p>
                <div className={styles.hostText}>
                </div>
                <div className={styles.HostDate}>
                    {moment(props.review.created).format("MMMM YYYY")}
                </div>
            </div>
        </div>
    </div>
)

export default HostComments;
