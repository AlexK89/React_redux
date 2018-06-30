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
		console.log('this.props.goals: ', this.props.goals);
		return (
			<ul className="goal_list">

			</ul>
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