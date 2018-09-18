import React from 'react';
import ReactDOM from 'react-dom';
import Review from './Review.jsx';
import styles from '../../styles/ReviewList.css';
import FlagModal from './FlagModal.jsx';


class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.hideModalFunc = this.hideModalFunc.bind(this);
    this.showModalFunc = this.showModalFunc.bind(this);
    this.state = {
      reviewlist: [],
      currentPage: 1,
      pages: [],
      showModal: false,
    };
  }

  componentDidUpdate(prevProps) {
    const currProps = this.props;
    if (currProps.reviews !== prevProps.reviews) {
      this.setState({
        reviewlist: currProps.reviews.slice(0, 5),
        pages: Array.from({ length: Math.ceil(currProps.reviews.length / 5) }, (x, i) => i),
      });
    }
  }

  handleClick(page) {
    const currProps = this.props;
    const end = page * 5;
    const start = end - 5;
    this.setState({
      reviewlist: currProps.reviews.slice(start, end),
      currentPage: page,
    });
  }

  handleNext() {
    const currState = this.state;
    if (currState.currentPage < currState.pages.length) {
      this.handleClick(currState.currentPage + 1);
    }
  }

  handlePrev() {
    const currState = this.state;
    if (currState.currentPage > 1) {
      this.handleClick(currState.currentPage - 1);
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
    const { currentPage, showModal, reviewlist, pages } = this.state;
    const previousButton = () => {
      if (currentPage > 1) {
        return (<button type="button" id={styles.nextButton} onClick={() => this.handlePrev()}>{'<'}</button>);
      }
    };
    const nextButton = () => {
      if (currentPage != pages.length) {
        return (<button type="button" id={styles.nextButton} onClick={() => this.handleNext()}>{'>'}</button>);
      }
    };
    return (
      <div className={styles.reviewlist}>
        <FlagModal showModal={showModal} hideModalFunc={this.hideModalFunc} />
        <div className={styles.reviewlist}>
          { reviewlist.map(review => <Review review={review} key={review.id} host={this.props.host} FlagClick={this.showModalFunc} />)}
        </div>
        <div>
          <div className={styles.buttonContainer}>
            {previousButton()}
            { pages.map((button, index) => (
              <button type="button" key={button.id} id={index + 1 === currentPage ? styles.circleButton : styles.pagesButton} onClick={() => this.handleClick(button + 1)}>
                {button + 1}
              </button>
            ))
              }
            {nextButton()}
          </div>
        </div>
      </div>

    );
  }
}

export default ReviewList;
