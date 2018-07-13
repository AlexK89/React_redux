import React from 'react';
import PropTypes from 'prop-types';
import {AuthContext} from '../../../containers/App.jsx';
import Aux from '../../../hoc/Aux.jsx';
import withClass from '../../../hoc/withClass.jsx';
import styles from './Person.scss';

export class Person extends React.Component {
	constructor(props) {
		super(props);
		this.inputElement = React.createRef();
	}

	focus() {
		this.inputElement.current.focus();
	}

	componentDidMount() {
		// Focus on first input
		// (this.props.index === 0) && this.inputElement.current.focus();
	}

	render() {
		return (
			<Aux>
				<AuthContext.Consumer>
					{auth => {
						return (
							<h2>{(auth) ? 'Authenticated' : 'Unauthenticated'}</h2>
						)
					}
					}
				</AuthContext.Consumer>
				<p>{this.props.personId}</p>
				<p onClick={() => this.props.deletePersonHandler(this.props.index)}>I am a {this.props.name}! I
					am {this.props.age} years
					old</p>
				{/* Rendering nested HTML from parent component */}
				<p>{this.props.children}</p>
				<input
					ref={this.inputElement}
					onChange={(event) => this.props.switchNameHandler(event.target.value, this.props.personId)}
					type="text"
					placeholder='name'
				/>
			</Aux>
		)
	}
};

Person.propTypes = {
	click: PropTypes.func,
	name: PropTypes.string,
	age: PropTypes.number,
	changed: PropTypes.func
};
export default withClass(Person, styles.Person);