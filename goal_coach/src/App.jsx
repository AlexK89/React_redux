import React from 'react';
import {connect} from 'react-redux';
import {firebaseApp} from "./firebase";
import AddGoal from './components/AddGoal.jsx';
import GoalList from './components/GoalList.jsx';
import CompletedGoalsList from './components/CompletedGoalsList.jsx';

export class App extends React.Component {
	signOut() {
		firebaseApp.auth().signOut();
	}

	render() {
		return (
			<div>
				<h1>Goal Coach</h1>
				<AddGoal/>
				<hr/>
				<h2>Goals list</h2>
				<GoalList/>
				<hr/>
				<h2>Complete Goal list</h2>
				<CompletedGoalsList />
				<hr/>
				<button
					className="btn btn-danger"
					onClick={() => this.signOut()}>
					Sign Out
				</button>
			</div>
		)
	}
}


function mapStateToProps(state) {
	return {}
}

export default connect(mapStateToProps, null)(App);