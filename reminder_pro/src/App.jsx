import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addReminder } from "./actions";

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			text: ''
		}
	}

	setReminder() {
		console.log('this: ', this);
		this.props.addReminder(this.state.text);
	}

	render() {
		return (
			<div className="app">
				<h1 className="app__title">Reminder Pro</h1>
				<div className="form-inline">
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
						onClick={() => this.setReminder()}>
						Add reminder
					</button>
				</div>
			</div>
		)
	};
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({addReminder}, dispatch);
};

export default connect(null, mapDispatchToProps)(App);