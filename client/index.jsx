import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
  writeFakeData() {
    console.log('get quest');
    $.ajax({
      method: 'GET',
      url: 'http://localhost:3000/puppy',
    })
      .done(() => console.log('GET done'))
      .fail(() => console.log('didn\'t go through :('));
  }

  render() {
    return (
    <input type = 'submit' onClick = {this.writeFakeData.bind(this)}></input>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
