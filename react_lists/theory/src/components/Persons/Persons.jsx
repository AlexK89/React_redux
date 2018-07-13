import React from 'react';
import {ErrorBoundary} from '../../ErrorBaundary/ErrorBoundary';
import Person from './Person/Person.jsx';

export class Persons extends React.PureComponent {
	// =========================
	// React component CREATE Lifecycle hooks
	// =========================

	// #1
	constructor(props) {
		super(props);

		console.log('#1 [CREATE Persons.js]:Consctructor', props);
	}

	// #2
	componentWillMount() {
		console.log('#2 [CREATE Persons.js]:ComponentWillMount');
	}

	// #4
	componentDidMount() {
		console.log('#4 [CREATE Persons.js]:ComponentDidMount');
	}

	// #5
	componentWillUnmount() {
		console.log('#5 [CREATE Persons.js]:ComponentWillUnmount');
	}

	// =========================
	// React component UPDATE Lifecycle hooks
	// =========================
	// #1
	componentWillReceiveProps( nextProps ) {
		console.log('#1 [UPDATE Persons.js]:componentWillReceiveProps', nextProps);
	}

	// #2
	// shouldComponentUpdate(nextProps, nextState) {
	// 	console.log('#2 [UPDATE Persons.js]:shouldComponentUpdate', nextProps, nextState);
	// 	return nextProps.persons !== this.props.persons;
	// 	// MUST RETURN TRUE || FALSE
	// 	// return true;
	// }

	// #3
	componentWillUpdate(nextProps, nextState) {
		console.log('#3 [UPDATE Persons.js]:componentWillUpdate', nextProps, nextState);
	}

	// #5
	componentDidUpdate(nextProps, nextState) {
		console.log('#5 [UPDATE Persons.js]:componentDidUpdate', nextProps, nextState);
	}

	// Component CREATE - #3, Component UPDATE - #1 AND #4
	render() {
		console.log('#3 [CREATE Persons.js] AND #1 [UPDATE Persons.js]:Render');
		return (
			this.props.persons.map((person, index) => {
				return (
					<ErrorBoundary key={person.id}>
						<Person
							personId={person.id}
							index={index}
							deletePersonHandler={this.props.deletePersonHandler}
							switchNameHandler={this.props.switchNameHandler}
							name={person.name}
							age={person.age}/>
					</ErrorBoundary>
				)
			})
		)
	}
}