import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addReminder } from "./actions";
import './index.css';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			text: ''
		}
	}

	setReminder(event) {
		event.preventDefault();
		console.log('this: ', this);
		this.props.addReminder(this.state.text);
	}

	renderReminders() {
		const { reminders } = this.props;
		return (
			<ul className={'list-group col0-sm-4 reminders'}>
				{
					reminders.map(reminder => {
							return (
								<li key={reminder.id} className={'list-group-item'}>
									{reminder.text}
								</li>
							)
						}
					)
				}
			</ul>
		)
	}

	render() {
		return (
			<div className="app">
				<h1 className="app__title">Reminder Pro</h1>
				<form className="form-inline">
					<div className="form-group">
						<input
							type="text"
							className="form-control"
							placeholder={"I have to..."}
							onChange={event => this.setState({text: event.target.value})}
						/>
					</div>
					<button
						className={"btn btn-success"}
						onClick={(event) => this.setReminder(event)}>
						Add reminder
					</button>
				</form>
				{ this.renderReminders() }
			</div>
		)
	};
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({addReminder}, dispatch);
};

const mapStateToProps = (state) => {
		console.log('state: ', state);
		return {
			reminders: state
		}
};

export default connect(mapStateToProps, mapDispatchToProps)(App);