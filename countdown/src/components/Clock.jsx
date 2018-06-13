import React, {Component} from 'react';
import '../App.css';

class Clock extends Component {
	constructor(props) {
		super(props);
		this.state = {
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0,
		}
	}

	componentWillMount() {
		this.getTimeUntil(this.props.deadline);
	}

	componentDidMount() {
		setInterval(() => {
			this.getTimeUntil(this.props.deadline);
		}, 1000);
	}

	leading0(num, unit = '') {
		return (num === 1) ? `${num} ${unit}` : `${num} ${unit}s`
	}

	getTimeUntil(deadline) {
		const time = Date.parse(deadline) - Date.parse(new Date());
		const seconds = Math.floor((time / 1000) % 60);
		const minutes = Math.floor((time / (1000 * 60)) % 60);
		const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
		const days = Math.floor(time / (1000 * 60 * 60 * 24));

		this.setState({
			days,
			hours,
			minutes,
			seconds,
		})
	}

	render() {
		return (
			<div>
				<h2 className="clock">
					<span className="clock-days">{this.leading0(this.state.days, 'day')} </span>
					<span className="clock-hours">{this.leading0(this.state.hours, 'hour')} </span>
					<span className="clock-minutes">{this.leading0(this.state.minutes, 'minute')} </span>
					<span className="clock-seconds">{this.leading0(this.state.seconds, 'second')} </span>
				</h2>
			</div>
		)
	}

}

export default Clock;
