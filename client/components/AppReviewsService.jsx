import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import ReviewList from './ReviewList.jsx';
import ReviewSummary from './ReviewSummary.jsx';

import styles from '../../styles/app.css';

class AppReviewsService extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.resetHomes = this.resetHomes.bind(this);
    this.state = {
      reviews: [],
      house: null,
      host: null,
      length: 0,
      searched: false,
    };
  } 

  componentDidMount() {
    const idPath = window.location.pathname;
    const id = idPath.substring(1, idPath.length - 1);
    this.getHomeReviews(id);
  }

  getHomeReviews(id) {
    this.setState({ house: id });
    $.ajax({
      method: 'GET',
      url: `/reviews/${id}`,
    })
      .done((data) => {
        this.setState({
          reviews: data.reviews,
          length: data.reviews.length,
          host: data.host,
        });
      })
      .fail(() => console.log('didn\'t go through :('));
  }

  resetHomes() {
    this.getHomeReviews(this.state.house);
    this.setState({
      searched: false,
    });
  }

  handleSearch(input) {
    const newReviews = [];
    this.state.reviews.forEach((review) => {
      if (review.review.includes(input)) {
        newReviews.push(review);
      }
    });
    this.setState({
      reviews: newReviews,
      searched: true,
    });
  }

  render() {
    const props = this.state;
    return (
      <div className={styles.App}>
        <ReviewSummary
          onClick={this.handleSearch}
          reviews={props.reviews}
          searched={props.searched}
          resetHomes={this.resetHomes}
          length ={props.length}
        />
        <ReviewList reviews={props.reviews} host={props.host} />
      </div>
    );
  }
}

export default AppReviewsService;
