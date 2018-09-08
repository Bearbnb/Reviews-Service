import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery'

class App extends React.Component {


	writeFakeData () {
		console.log('get quest')
		let message = {q: '*'}
		$.ajax({
			method: 'POST',
			data: JSON.stringify(message),
			url: 'http://localhost:3000',
			contentType: 'application/json'
		})
		.done((data)=> console.log(data))
		.fail(()=>console.log(`didn't go through :(`)) 
	}

	render () {
		return (
		<input type = 'submit' onClick = {this.writeFakeData.bind(this)}></input>
		)
	}
}

ReactDOM.render( <App/>, document.getElementById('app'));