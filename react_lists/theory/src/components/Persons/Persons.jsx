import React from 'react';
import {ErrorBoundary} from '../../ErrorBaundary/ErrorBoundary';
import {Person} from './Person/Person.jsx';

export class Persons extends React.Component {
	render() {
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