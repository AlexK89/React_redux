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
			<li className="list-group-item">{this.props.goal.title}</li>
		)
	}
}

export default GoalItem;

// function mapStateToProps(state) {
// 	const { goals } = state;
// 	return {
// 		goals
// 	}
// }
//
// export default connect(mapStateToProps, { setGoals })(GoalItem);