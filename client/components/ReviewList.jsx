import React from 'react';
import ReactDOM from 'react-dom';
import Review from './Review.jsx';
import styles from '../../styles/ReviewList.css';

class ReviewList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviewlist: [],
            pages: Array.from({ length: Math.ceil(props.reviews.length / 5) }, (x, i) => i)
        };
    }
    componentDidMount(){
        this.setState({
            reviewlist: this.props.reviews.slice(0, 5)
        })
    }
    handleClick(page){
        const end = page*5;
        const start = end-5;
        console.log(this.props.reviews)
        this.setState({
            reviewlist: this.props.reviews.slice(start, end)
        })
    }
    handleNext () {
    }
    handlePrevious() {
    }
    render(){
        
        return (
            <div className={styles.reviewlist}>
                <div className = {styles.reviewlist}>
                { this.state.reviewlist.map(review =>
                    <Review review={review}/>
                )} 
                </div>
            <div>
                <div className = {styles.buttons}>
                    { this.state.pages.map(button => 
                    <button onClick = {()=>this.handleClick(button+1)}>{button+1}</button>
                    )}
                </div>
            </div>
            </div> 
                
        );
    }  
}

                {/* <div>
                    <div className={styles.pagesbuttonContainer}>
                        <nav role="navigation">
                            <span>
                                <div>
                                    <ul>
                                        <li>
                                            <button className={styles.button}>
                                                <div className={styles.nextButtonContainer}>
                                                    <div className={styles.nextButtonContainer}>
                                                        <svg className={styles.nextButton}>
                                                            {this.state.pages}
                                                        </svg>
                                                    </div>
                                                </div>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </span>
                        </nav>
                    </div>
                </div>
            */}


export default ReviewList;