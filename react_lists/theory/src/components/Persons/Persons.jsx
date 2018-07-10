import React from 'react';
import {ErrorBoundary} from '../../ErrorBaundary/ErrorBoundary';
import {Person} from './Person/Person.jsx';

export class Persons extends React.Component {
	constructor(props) {
		super(props);

		console.log('Persons.js:Consctructor', props);
	}

	componentWillMount() {
		console.log('Persons.js:ComponentWillMount');
	}

	componentDidMount() {
		console.log('Persons.js:ComponentDidMount');
	}

	componentWillUnmount() {
		console.log('Persons.js:ComponentWillUnmount');
	}

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