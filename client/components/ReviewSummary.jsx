import React from 'react';
import ReactDOM from 'react-dom';
import ReviewSummaryLine from './ReviewSummaryLine.jsx';
import Search from './Search.jsx';
import ratingToStars from './ReviewSummaryLine.jsx';
import styles from '../../styles/ReviewSummary.css';

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

  calculateAverage(arr) {
    let total = 0;
    arr.forEach((review) => {
      const description = Object.keys(review);
      const rating = review[description[0]];
      total += rating;
    });
    total /= arr.length;
    return Math.round(total);
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
    for (const key in vals) {
      const value = (vals[key] / this.props.reviews.length).toFixed(2);
      newCategories.push({ [key]: Number(value) });
    }
    return newCategories;
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
    const starArr = this.ratingToStars(this.state.average);
    const stars = starArr.map((star) => {
      if (star === 'whole') {
        return (<i id={styles.star} className="fas fa-star" />);
      } if (star === 'half') {
        return (<i id={styles.star} className="fas fa-star-half-alt" />);
      }
      return (<i id={styles.star} className="far fa-star" />);
    });
    if (this.props.searched === false) {
      return (
        <div className={styles.averageContainer}>
          <div className={styles.break} />
          <div className={styles.averageHeader}>
            <div className={styles.textHeader}>
                <h2 className={styles.reviewTitle}>{this.props.reviews.length} Reviews </h2>
                <div className={styles.headerStars}>
                    {stars}
                  </div>
              </div>
            <div className={styles.search}>
                <Search onClick={this.handleSearch.bind(this)} searched={this.props.searched} />
              </div>
          </div>
          <div className={styles.break} />
          <div className={styles.breakdownComponent}>
            {this.state.categories.map(category => <ReviewSummaryLine category={category} />)}

          </div>
        </div>
      );
    }
    return (
      <div className={styles.averageContainer}>
        <div className={styles.break} />
        <div className={styles.averageHeader}>
          <div className={styles.textHeader}>
                    <h2 className={styles.reviewTitle}>{this.props.reviews.length} Reviews
                        <div className={styles.headerStars}>
                            {stars}
                          </div>
                      </h2>
                  </div>
          <div className={styles.search}>
                    <Search onClick={this.props.onClick} searched={this.props.searched} />
                  </div>
        </div>
        <div>
          <h4>{this.props.reviews.length} guests have mentioned "{this.state.termSearched}"</h4>
          <button id={styles.resetReviews} onClick={() => this.props.resetHomes()}> Back to all reviews </button>
        </div>
        <div className={styles.break} />
      </div>
    );
  }
}

export default ReviewSummary;
