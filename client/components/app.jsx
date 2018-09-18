import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import ReviewList from './ReviewList.jsx';
import ReviewSummary from './ReviewSummary.jsx';

import styles from '../../styles/app.css';


class App extends React.Component {
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
    this.getHomeReviews();
  }

  getHomeReviews(id, random = Math.ceil(Math.random() * 100)) {
    let home = random;
    if (id) {
      home = id;
    }
    this.setState({ house: home });
    $.ajax({
      method: 'GET',
      url: `http://localhost:3000/reviews?id=${home}`,
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

export default App;
