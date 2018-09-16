import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import ReviewList from './ReviewList.jsx';
import ReviewSummary from './ReviewSummary.jsx';
import Modal from './FlagModal.jsx';

import styles from '../../styles/app.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showmodal: false,
      reviews: [],
      house: null,
      host: null,
      searched: false,
    };
  }

  showModal() {
    this.setState({ showmodal: true });
  }

  hideModal() {
    this.setState({ showmodal: false });
  }

  componentDidMount() {
    this.getHomeReviews();
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
      searched: !this.state.searched,
    });
  }

  resetHomes() {
    this.getHomeReviews(this.state.house);
    this.setState({
      searched: false,
    });
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
          host: data.host,
        });
      })
      .fail(() => console.log('didn\'t go through :('));
  }

  render() {
    return (
      <div className={styles.App}>
        <ReviewSummary
          onClick={this.handleSearch.bind(this)}
          reviews={this.state.reviews}
          searched={this.state.searched}
          resetHomes={this.resetHomes.bind(this)}
        />
        <ReviewList reviews={this.state.reviews} host={this.state.host} />
      </div>
    );
  }
}

export default App;
