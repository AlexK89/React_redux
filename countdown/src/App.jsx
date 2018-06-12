import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			deadline: 'December 25, 2018',
		}
	}

	changeDeadline() {
		this.setState({
			deadline: ''
		})
	};

	render() {
		return (
			<div className="app">
				<h1 className="app-title">Countdown {this.state.deadline}</h1>
				<h2 className="clock">
					<span className="clock-days">14 days </span>
					<span className="clock-hours">30 hours </span>
					<span className="clock-minutes">15 minutes </span>
					<span className="clock-seconds">20 seconds </span>
				</h2>
				<div>
					<input type="text" placeholder="New date"/>
					<button onClick={() => {this.changeDeadline()}}>Submit</button>
				</div>
			</div>
		)
	}
}

export default App;