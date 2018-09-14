import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../../styles/Review.css';

const ReviewWithoutComments = (props) => (

    <div className={styles.reviewContainer}>
        <div className={styles.mainHeader}>
            <div className={styles.imageHeader}>
                <img className={styles.avatar} src={props.review.photo} alt="" />
            </div>
            <div className={styles.textHeader}>
                <div className={styles.reviewer}>
                    {props.review.name}
                </div>
                <div className={styles.date}>
                    {moment(props.review.created).format("MMMM YYYY")}
                </div>
            </div>
        </div>
    <div className={styles.reviewText}>
        <p>{props.review.review}</p>
    </div>
    </div>
)

export default ReviewWithoutComments;
