import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../../styles/ReviewSummary.css';

class ReviewSummary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviewTotal: props.reviews.length,
            average: 0,
            accuracy: 5, 
            comunication: 5, 
            cleanliness: 4, 
            location: 4.5, 
            checkIn: 5, 
            value: 5
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
                    <div className ={styles.description}>
                        <div className ={styles.description}>
                            Accuracy
                        </div>
                        <div className = {styles.descriptionStars}></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ReviewSummary;


