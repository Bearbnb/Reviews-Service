import React from 'react';
import ReactDOM from 'react-dom';
import { throws } from 'assert';
import PropTypes from 'prop-types';
import styles from '../../styles/ReviewSummary.css';
import Header from './Header.jsx';
import SubHeader from './SubHeader.jsx';


class ReviewSummary extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.state = {
      termSearched: '',
      average: 0,
      categories: [{ Accuracy: 0 },
        { Comunication: 0 },
        { Cleanliness: 0 },
        { Location: 0 },
        { CheckIn: 0 },
        { Value: 0 }],
    };
  }

  componentDidUpdate(prevProps) {
    const calculateAverage = (arr) => {
      let total = 0;
      arr.forEach((review) => {
        const description = Object.keys(review);
        const rating = review[description[0]];
        total += Number(rating);
      });
      total /= arr.length;
      return (total).toFixed(2);
    };
    const { reviews } = this.props;
    if (reviews !== prevProps.reviews) {
      this.setState({
        categories: this.getAverages(),
        average: Number(calculateAverage(this.getAverages())),
      });
    }
  }

  getAverages() {
    const vals = {
      accuracy: 0,
      communication: 0,
      cleanliness: 0,
      location: 0,
      checkin: 0,
      value: 0,
    };
    const { reviews } = this.props;
    reviews.forEach((review) => {
      review.rating.forEach((rate) => {
        const description = Object.keys(rate);
        const rating = rate[description[0]];
        vals[description] += rating;
      });
    });
    const newCategories = [];
    Object.entries(vals).forEach((pair) => {
      const value = Number(((pair[1]) / reviews.length).toFixed(2));
      const category = pair[0];
      newCategories.push({ [category]: value });
    });
    return newCategories;
  }


  handleSearch(e) {
    this.props.onClick(e);
    this.setState({
      termSearched: e,
    });
  }


  render() {
    const ratingToStars = (number) => {
      const stars = [];
      let num = number;
      for (let i = 0; i < 5; i += 1) {
        if (num >= 1) {
          stars.push('whole');
        } else if (num > 0) {
          stars.push('half');
        } else {
          stars.push('empty');
        }
        num -= 1;
      }
      return stars;
    };
    const {
      reviews, searched, length, resetHomes,
    } = this.props;
    const { categories, average, termSearched } = this.state;
    const header = (
      <Header
        length={length}
        onClick={this.handleSearch}
        searched={searched}
        average={average}
        ratingToStars={ratingToStars}
      />
    );
    const subheader = (
      <SubHeader
        searched={searched}
        categories={categories}
        ratingToStars={ratingToStars}
        reviews={reviews}
        term={termSearched}
        resetHomes={resetHomes}
      />
    );
    if (searched === false) {
      return (
        <div className={styles.averageContainer}>
          <div className={styles.break} />
          {header}
          <div className={styles.break} />
          {subheader}
        </div>
      );
    }
    return (
      <div className={styles.averageContainer}>
        <div className={styles.break} />
        {header}
        {subheader}
        <div className={styles.break} />
      </div>
    );
  }
}

ReviewSummary.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
  searched: PropTypes.bool.isRequired,
  resetHomes: PropTypes.func.isRequired,
  length: PropTypes.number.isRequired,
};
export default ReviewSummary;
