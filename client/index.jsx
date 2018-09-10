import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            house: 6,
            reviews: [] };
    }
    writeFakeData() {
    $.ajax({
        method: 'GET',
        url: 'http://localhost:3000/reviews'
    })
        .done((data) => {
            this.setState({reviews: data})
            console.log(this.state.reviews)
        })
        .fail(() => console.log('didn\'t go through :('));
    }
    render() {
    return (
    <input type = 'submit' onClick = {this.writeFakeData.bind(this)}></input>
    );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
