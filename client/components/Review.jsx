import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../../styles/Review.css';
const moment = require('moment')
let Review = (props) => {
    return (
        <div className={styles.review}>
            <div className="media-left media-middle">
                <img className={styles.mediaobject} src={props.review.photo} alt="" />
            </div>
            <div className="reviewer-name">
                <div className="review-writer">
                    {moment(props.review.created).format("MMM Do YY")}
                </div>
                <div className="video-list-entry-detail">
                    {props.review.review}
                </div>
            </div>
        </div>
    );
};

export default Review;