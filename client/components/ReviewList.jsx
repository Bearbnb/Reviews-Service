import React from 'react';
import ReactDOM from 'react-dom';
import Review from './Review.jsx';

let ReviewList = (props) => (
    <div className="review-list">
        {props.reviews.map(review =>
            <Review review={review}/>
        )}
    </div>
);

export default ReviewList;