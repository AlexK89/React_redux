import React from 'react';
import {ErrorBoundary} from '../../ErrorBaundary/ErrorBoundary';
import {Person} from './Person/Person.jsx';

export class Persons extends React.Component {
	// =========================
	// React component CREATE Lifecycle hooks
	// =========================

	// #1
	constructor(props) {
		super(props);

		console.log('Persons.js:Consctructor', props);
	}

	// #2
	componentWillMount() {
		console.log('Persons.js:ComponentWillMount');
	}

	// #4
	componentDidMount() {
		console.log('Persons.js:ComponentDidMount');
	}

	// #5
	componentWillUnmount() {
		console.log('Persons.js:ComponentWillUnmount');
	}

	// =========================
	// React component UPDATE Lifecycle hooks
	// =========================
	// #1
	componentWillReceiveProps( nextProps ) {
		console.log('Persons.js:componentWillReceiveProps', nextProps);
	}

	// #2
	shouldComponentUpdate(nextProps, nextState) {
		console.log('Persons.js:shouldComponentUpdate', nextProps, nextState);

		// MUST RETURN TRUE || FALSE
		return true;
	}

	// #3
	componentWillUpdate(nextProps, nextState) {
		console.log('Persons.js:componentWillUpdate', nextProps, nextState);
	}

	// #5
	componentDidUpdate(nextProps, nextState) {
		console.log('Persons.js:componentDidUpdate', nextProps, nextState);
	}

	// Component CREATE - #3, Component UPDATE - #1 AND #4
	render() {
		console.log('Persons.js:Render');
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