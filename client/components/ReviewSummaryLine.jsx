import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../../styles/ReviewSummaryLine.css';

const ratingToStars = (number) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (number >= 1) {
      stars.push('whole');
    } else if (number > 0) {
      stars.push('half');
    } else {
      stars.push('empty');
    }
    number--;
  }
  return stars;
};

const ReviewSummaryLine = (props) => {
  const description = Object.keys(props.category);
  const rating = props.category[description[0]];
  const stars = ratingToStars(rating).map((star) => {
    if (star === 'whole') {
      return (<i id ={styles.star} className="fas fa-star" />);
    } if (star === 'half') {
      return (<i id={styles.star} className="fas fa-star-half-alt" />);
    }
    return (<i id={styles.star} className="far fa-star" />);
  });

  return (
    <div className={styles.descriptionLine}>
      <div className={styles.description}>
            {description}
          </div>
      <div className={styles.descriptionStars} rating={rating}>
            <div className={styles.starDiv}>
                <span className={styles.reviewStar}>
                    {stars}
                  </span>
              </div>
          </div>
    </div>
  );
};

export default ReviewSummaryLine;
