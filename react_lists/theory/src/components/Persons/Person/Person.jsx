import React from 'react';
import Aux from '../../../hoc/Aux.jsx';
import withClass from '../../../hoc/withClass.jsx';
import styles from './Person.scss';

export const Person = (props) => {
	return (
		<Aux>
			<p>{props.personId}</p>
			<p onClick={() => props.deletePersonHandler(props.index)}>I am a {props.name}! I am {props.age} years
				old</p>
			{/* Rendering nested HTML from parent component */}
			<p>{props.children}</p>
			<input
				onChange={(event) => props.switchNameHandler(event.target.value, props.personId)}
				type="text"
				placeholder='name'
			/>
		</Aux>
	)
};

export default withClass(Person, styles.Person);