import React, { Component } from 'react';
import Clock from './components/Clock';
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
			deadline: this.state.newDeadline
		})
	};

	render() {
		return (
			<div className="app">
				<h1 className="app-title">Countdown {this.state.deadline}</h1>
				<Clock />
				<div>
					<input
						type="text"
						placeholder="New date"
						onChange={ (event) => this.setState({ newDeadline: event.target.value }) }/>
					<button onClick={ () => { this.changeDeadline() } }>Submit</button>
				</div>
			</div>
		)
	}
}

export default App;