import React, {Component} from 'react';
import '../App.css';

class Clock extends Component {
	constructor(props) {
		super(props);
		this.state = {
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0
		}
	}
	render() {
		return (
			<div>
				<h2 className="clock">
					<span className="clock-days">{this.state.days} days </span>
					<span className="clock-hours">{this.state.hours} hours </span>
					<span className="clock-minutes">{this.state.minutes} minutes </span>
					<span className="clock-seconds">{this.state.seconds} seconds </span>
				</h2>
			</div>
		)
	}

}

export default Clock;
