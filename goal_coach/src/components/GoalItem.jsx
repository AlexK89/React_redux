import React from 'react';
import {connect} from 'react-redux';

class GoalItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {}
	}

	componentDidMount() {

	}

	render() {

		return (
			
		)
	}
}

function mapStateToProps(state) {
	const { goals } = state;
	return {
		goals
	}
}

export default connect(mapStateToProps, { setGoals })(GoalItem);