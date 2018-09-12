import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../../styles/Review.css';
const moment = require('moment')

let Review = (props) => {
    return (
        <div className={styles.reviewContainer}>
            <div className={styles.header}>
                <img className={styles.mediaobject} src={props.review.photo} alt="" />
                <div>
                    <div className={styles.reviewDate}>
                    {moment(props.review.created).format("MMM Do YY")}
                    </div>
                    <div className={styles.reviewer}>
                    {props.review.name}
                    </div>
                </div>
            </div>
            <div className={styles.reviewText}>
                <p>{props.review.review}</p>
            </div>
            <div className={styles.bottom}>
                <div></div>
            </div>
        </div>
    );
};

export default Review;