import React from 'react';
import { connect } from 'react-redux';
import { completeGoalRef } from "../firebase";

class GoalItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {}
	}

	componentDidMount() {

	}

	completeGoal() {
		// Add to complete goals in DB
		const { email } = this.props.user;
		const { title } = this.props.goal;
		
		completeGoalRef.push({email, title});
		// Remove from goals list in DB
	}

	render() {
		return (
			<li className="goals_list_item list-group-item">
				<span>{this.props.goal.title}</span>
				<em> added by {this.props.user.email}</em>
				<button
					onClick={() => this.completeGoal()}
					className="btn btn-sm btn-success">
					Complete
				</button>
			</li>
		)
	}
}


function mapStateToProps(state) {
	const { user } = state;
	return {
		user
	}
}

export default connect(mapStateToProps, null)(GoalItem);