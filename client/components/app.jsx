import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import ReviewList from './ReviewList.jsx';
var fakeData = require('./fakeData').fakeData;


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            house: 6,
            reviews: fakeData
        };
    }
    writeFakeData() {
        $.ajax({
            method: 'GET',
            url: 'http://localhost:3000/reviews'
        })
            .done((data) => {
                this.setState({ reviews: data })
                console.log(this.state.reviews)
            })
            .fail(() => console.log('didn\'t go through :('));
    }
    render() {
        return (
            <ReviewList reviews = {this.state.reviews}/>
        );
    }
}

export default App;