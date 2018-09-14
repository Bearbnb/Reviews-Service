import React from 'react';
import ReactDOM from 'react-dom';
import Review from './Review.jsx';
import styles from '../../styles/ReviewList.css';

class ReviewList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviewlist: [],
            currentPage: 1,
            pages: []
        };
    }
    componentDidUpdate(prevProps){
        if (this.props.reviews !== prevProps.reviews) {
            this.setState({ 
                reviewlist: this.props.reviews.slice(0, 5),
                pages: Array.from({ length: Math.ceil(this.props.reviews.length / 5) }, (x, i) => i)
            });
        }
    }
    handleClick(page){
        const end = page*5;
        const start = end-5;
        this.setState({
            reviewlist: this.props.reviews.slice(start, end), 
            currentPage: page
        })
    }
    handleNext(){
        if (this.state.currentPage<this.state.pages.length){
            this.handleClick(this.state.currentPage+1)
        }
    }
    handlePrev() {
        if (this.state.currentPage > 1) {
            this.handleClick(this.state.currentPage - 1)
        }
    }

    render(){
        return (
            <div className={styles.reviewlist}>
                <div className = {styles.reviewlist}>
                { this.state.reviewlist.map(review =>
                    <Review review={review} host = {this.props.host}/>
                )} 
                </div>
            <div>
                <div className = {styles.buttonContainer}>
                    <button id={styles.nextButton} onClick={() => this.handlePrev()}>{'<'}</button>
                    { this.state.pages.map((button, index)=> {
                        if(index+1===this.state.currentPage) {
                            return (<button id={styles.circleButton} 
                            onClick={() => this.handleClick(button + 1)}>{button + 1}</button>)
                        } else {
                         return (<button id = {styles.pagesButton} onClick = {()=>this.handleClick(button+1)}>{button+1}</button>)
                        }
                    }
                    )}
                    <button id={styles.nextButton} onClick ={()=> this.handleNext()}>{'>'}</button>
                </div>
            </div>
            </div> 
                
        );
    }  
}

export default ReviewList;