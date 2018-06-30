import React from 'react';
import {connect} from 'react-redux';
import {goalRef} from "../firebase";
import {setGoals} from '../actions/index';

class GoalList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {}
	}

	componentDidMount() {
		goalRef.on('value', snap => {
			let goals = [];

			snap.forEach(goal => {
				const {email, title} = goal.val();

				goals.push({email, title});
				this.props.setGoals(goals);
			})
		})
	}

	render() {
		const goals = this.props.goals;

		//after reloading page shows only first goal => by adding one more goal it show all goals ???
		console.log('this.props.goals: ', goals);
		console.log('this.props.goals.length: ', goals.length);
		return (
			<div className="goals_list">
				{
					goals &&
						<ul>
							{ goals.map((goal, key) => {
								return (
									<li key={key}>{goal.title}</li>
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