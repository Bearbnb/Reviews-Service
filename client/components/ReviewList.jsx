import React from 'react';
import ReactDOM from 'react-dom';
import Review from './Review.jsx';
import styles from '../../styles/ReviewList.css';
import FlagModal from './FlagModal.jsx';


class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewlist: [],
      currentPage: 1,
      pages: [],
      showModal: false,
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.reviews !== prevProps.reviews) {
      this.setState({
        reviewlist: this.props.reviews.slice(0, 5),
        pages: Array.from({ length: Math.ceil(this.props.reviews.length / 5) }, (x, i) => i),
      });
    }
  }

  handleClick(page) {
    const end = page * 5;
    const start = end - 5;
    this.setState({
      reviewlist: this.props.reviews.slice(start, end),
      currentPage: page,
    });
  }

  handleNext() {
    if (this.state.currentPage < this.state.pages.length) {
      this.handleClick(this.state.currentPage + 1);
    }
  }

  handlePrev() {
    if (this.state.currentPage > 1) {
      this.handleClick(this.state.currentPage - 1);
    }
  }

  showModalFunc() {
    this.setState({
      showModal: true,
    });
  }

  hideModalFunc() {
    this.setState({
      showModal: false,
    });
  }

  render() {
    const currentPage = this.state.currentPage;
    const previousButton = () => {
      if (currentPage > 1) {
        return (<button type="button" id={styles.nextButton} onClick={() => this.handlePrev()}>{'<'}</button>);
      }
    };
    const nextButton = () => {
      if (currentPage != this.state.pages.length) {
        return (<button type="button" id={styles.nextButton} onClick={() => this.handleNext()}>{'>'}</button>);
      }
    };
    return (
      <div className={styles.reviewlist}>
        <FlagModal showModal={this.state.showModal} hideModalFunc={this.hideModalFunc.bind(this)} />
        <div className={styles.reviewlist}>
          { this.state.reviewlist.map(review => <Review review={review} host={this.props.host} FlagClick={this.showModalFunc.bind(this)} />)}
        </div>
        <div>
          <div className={styles.buttonContainer}>
            {previousButton()}
            { this.state.pages.map((button, index) => {
              if (index + 1 === this.state.currentPage) {
                return (
                  <button
                    type="button"
                    id={styles.circleButton}
                    onClick={() => this.handleClick(button + 1)}
                  >{button + 1}
                  </button>
                );
              }
              return (<button type="button" id={styles.pagesButton} onClick={() => this.handleClick(button + 1)}>{button + 1}</button>);
            })}
            {nextButton()}
          </div>
        </div>
      </div>

    );
  }
}

export default ReviewList;
