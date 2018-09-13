import React from 'react';
import ReactDOM from 'react-dom';
import ReviewSummaryLine from './ReviewSummaryLine.jsx'
import styles from '../../styles/ReviewSummary.css';

class ReviewSummary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviewTotal: props.reviews.length,
            average: 0,
            categories: [{Accuracy: 5}, 
            {Comunication: 5}, 
            {Cleanliness: 4}, 
            {Location: 4.5}, 
            {CheckIn: 5}, 
            {Value: 5}]
        };
    }

    calculateAverage(property) {
        let total = 0;
        this.props.reviews.forEach(review => {
            total += review[property];
        });
        total = total / this.props.reviews.length;
        return Math.round(total)
    }

    componentDidMount() {
        this.setState({
            average: this.calculateAverage('rating')
        })
    }

    render() {
        var stars = ['☆', '☆', '☆', '☆', '☆'].map(star =>
                <span className={styles.reviewStar}>{star}</span>)
        return (
            <div className = {styles.averageContainer}>
                <div className={styles.break}>
                </div>
                <div className={styles.averageHeader}>
                    <div className = {styles.textHeader}>
                    <h2 className = {styles.reviewTitle}>{this.props.reviews.length} Reviews  
                       <div className ={styles.headerStars}>
                        {stars} 
                       </div> 
                    </h2>
                    </div>
                    <div className = {styles.search}>
                        <h4>Search Bar Place Holder</h4>
                    </div>
                </div>
                <div className = {styles.break}>
                </div>
                <div className = {styles.breakdownComponent} >
                    {this.state.categories.map((category) =>
                        <ReviewSummaryLine category={category}/>
                    )} 
                   
                </div>
            </div>
        );
    }
}

export default ReviewSummary;


