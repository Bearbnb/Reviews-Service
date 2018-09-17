import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../../styles/ReviewSummary.css';
import Header from './Header.jsx';
import SubHeader from './SubHeader.jsx';
import { throws } from 'assert';


class ReviewSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      termSearched: '',
      reviewTotal: 1,
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
    if (this.props.reviews !== prevProps.reviews) {
      this.setState({
        reviewTotal: this.props.reviews.length,
        categories: this.getAverages(),
        average: this.calculateAverage(this.getAverages()),
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
    this.props.reviews.forEach((review) => {
      review.rating.forEach((rate) => {
        const description = Object.keys(rate);
        const rating = rate[description[0]];
        vals[description] += rating;
      });
    });
    const newCategories = [];
    Object.entries(vals).forEach((pair) => {
      const value = ((pair[1]) / this.props.reviews.length).toFixed(2);
      const category = pair[0];
      newCategories.push({ [category]: value });
    });
    return newCategories;
  }

  calculateAverage(arr) {
    let total = 0;
    arr.forEach((review) => {
      const description = Object.keys(review);
      const rating = review[description[0]];
      total += Number(rating);
    });
    total /= arr.length;
    return (total).toFixed(2);
  }

  handleSearch(e) {
    this.props.onClick(e);
    this.setState({
      termSearched: e,
    });
  }

  ratingToStars(number) {
    let num = number;
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (num >= 1) {
        stars.push('whole');
      } else if (num > 0) {
        stars.push('half');
      } else {
        stars.push('empty');
      }
      num--;
    }
    return stars;
  }


  render() {
    const props = this.props;
    if (props.searched === false) {
      return (
        <div className={styles.averageContainer}>
          <div className={styles.break} />
          <Header
            length={props.length}
            onClick={this.handleSearch.bind(this)}
            searched={props.searched}
            average={this.state.average}
            ratingToStars={this.ratingToStars}
          />
          <div className={styles.break} />
          <SubHeader
            searched={props.searched}
            categories={this.state.categories}
            ratingToStars={this.ratingToStars}
            reviews={props.reviews}
            term={this.state.termSearched}
            resetHomes={props.resetHomes}
          />
        </div>
      );
    }
    return (
      <div className={styles.averageContainer}>
        <div className={styles.break} />
        <Header
          length={props.length}
          onClick={this.handleSearch.bind(this)}
          searched={props.searched}
          average={this.state.average}
          ratingToStars={this.ratingToStars}
        />
        <SubHeader
          searched={props.searched}
          categories={this.state.categories}
          ratingToStars={this.ratingToStars}
          reviews={props.reviews}
          term={this.state.termSearched}
          resetHomes={props.resetHomes}
        />
        <div className={styles.break} />
      </div>
    );
  }
}

export default ReviewSummary;
