import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import ReviewList from './ReviewList.jsx';
import ReviewSummary from './ReviewSummary.jsx';

var fakeData = require('./fakeData').fakeData;


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: [],
            house: null
        };
    }

    componentDidMount(){
        const home = Math.ceil(Math.random() * 100);
        this.setState({ house: home })
        $.ajax({
            method: 'GET',
            url: `http://localhost:3000/reviews?id=${home}`
        })
            .done((data) => {
                this.setState({ reviews: data })
                console.log(this.state)
            })
            .fail(() => console.log('didn\'t go through :('));
    }
    render() {
        return (
            <div>
                <ReviewSummary reviews = {this.state.reviews}/>
                <ReviewList reviews = {this.state.reviews}/>
            </div>
        );
    }
}

export default App;