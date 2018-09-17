import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Search from './Search.jsx';
import styles from '../../styles/ReviewSummary.css';


const Header = ({ ratingToStars, average, length, onClick, searched }) => {
  const starArr = ratingToStars(average);
  const stars = starArr.map((star) => {
    if (star === 'whole') {
      return (<i id={styles.star} className="fas fa-star" />);
    } if (star === 'half') {
      return (<i id={styles.star} className="fas fa-star-half-alt" />);
    }
    return (<i id={styles.star} className="far fa-star" />);
  });
  return (
    <div className={styles.averageHeader}>
      <div className={styles.textHeader}>
        <div className={styles.reviewTitle}>
          <h2>{length} Reviews </h2>
        </div>
        <div className={styles.headerStars}>
          {stars}
        </div>
      </div>
      <div className={styles.search}>
        <Search onClick={onClick} searched={searched} />
      </div>
    </div>);
};

Header.propTypes = {
  ratingToStars: PropTypes.func.isRequired,
  average: PropTypes.any.isRequired,
  length: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  searched: PropTypes.bool.isRequired,
};

export default Header;
