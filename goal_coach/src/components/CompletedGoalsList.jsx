import React from 'react';
import { connect } from 'react-redux';
import { completeGoalRef } from "../firebase";
import { setCompletedGoals } from '../actions';

class GoalList extends React.Component {
	componentDidMount() {
		completeGoalRef.on('value', snap => {
			let completedGoals = [];

			snap.forEach(completedGoal => {
				const {email, title} = completedGoal.val();
				const serverKey = completedGoal.key;
				completedGoals.push({email, title, serverKey});
			});
			console.log('Completed goals: ', completedGoals);
			this.props.setCompletedGoals(completedGoals);
		})
	}

	removeCompleteGoal(serverKey) {
		// Remove from goals list in DB
		completeGoalRef.child(serverKey).remove();
	}

	render() {
		return (
			<div className="goals_list">
				{
					this.props.completedGoals &&
					<ul className="list-group">
						{ this.props.completedGoals.map((completedGoal, key) => {
							return (
								<li key={key} className="goals_list_item list-group-item">
									<span>{completedGoal.title}</span>
									<em> completed by {completedGoal.email}</em>
									<button
										onClick={() => this.removeCompleteGoal(completedGoal.serverKey)}
										className="btn btn-sm btn-danger">
										Remove
									</button>
								</li>
							)
						})}
					</ul>
				}
			</div>
		)
	}
}

function mapStateToProps(state) {
	console.log(state);
	const { completedGoals } = state;
	return {
		completedGoals
	}
}

export default connect(mapStateToProps, { setCompletedGoals })(GoalList);