import React from 'react';
import { connect } from 'react-redux';
import { goalRef } from "../firebase";
import { setGoals } from '../actions';
import GoalItem from './GoalItem.jsx';

class GoalList extends React.Component {
	componentDidMount() {
		goalRef.on('value', snap => {
			let goals = [];

			snap.forEach(goal => {
				const {email, title} = goal.val();

				goals.push({email, title});
			});
			console.log('goals: ', goals);
			this.props.setGoals(goals);
		})
	}

	render() {
		return (
			<div className="goals_list">
				{
					this.props.goals &&
						<ul className="list-group">
							{ this.props.goals.map((goal, key) => {
								return (
									<GoalItem key={key} goal={goal}/>
								)
							})}
						</ul>
				}
			</div>
		)
	}
}

function mapStateToProps(state) {
	const { goals } = state;
    return {
		goals
    }
}

export default connect(mapStateToProps, { setGoals })(GoalList);