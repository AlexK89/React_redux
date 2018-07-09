import React from 'react';
import {ErrorBoundary} from '../../ErrorBaundary/ErrorBoundary';
import {Person} from './Person/Person.jsx';

export const Persons = (props) => {
	return (
		props.persons.map((person, index) => {
			return (
				<ErrorBoundary key={person.id}>
					<Person
						personId={person.id}
						index={index}
						deletePersonHandler={props.deletePersonHandler}
						switchNameHandler={props.switchNameHandler}
						name={person.name}
						age={person.age}/>
				</ErrorBoundary>
			)
		})
	)
}