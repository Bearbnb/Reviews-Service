import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../../styles/ReviewSummaryLine.css';

let ReviewSummaryLine = (props) => {
    var stars = ['☆', '☆', '☆', '☆', '☆'].map(star =>
        <span className={styles.reviewStar}>{star}</span>)
    let description = Object.keys(props.category);
    let rating = props.category.description;
    return (
        <div className={styles.descriptionLine}>
            <div className={styles.description}>
                {description}
            </div>
            <div className={styles.descriptionStars} rating ={rating}>{stars}</div>
        </div>
    );
};

export default ReviewSummaryLine;