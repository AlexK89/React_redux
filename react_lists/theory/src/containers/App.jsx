import React, {Component} from 'react';
import {Persons} from '../components/Persons/Persons.jsx';
import {Header} from '../components/Header/Header.jsx';
import styles from './App.scss';

class App extends Component {
	// NEW version of initialization State
	state = {
		persons: [
			{id: 1, name: 'Alex', age: 29},
			{id: 2, name: 'Khrystyna', age: 30},
		],
		showPerson: false
	};

	constructor(props) {
		super(props);

		// Old version of initialization State
		// this.state = {
		// 	persons: [
		// 		{id: 1, name: 'Alex', age: 29},
		// 		{id: 2, name: 'Khrystyna', age: 30},
		// 	],
		// 	showPerson: false
		// };

		console.log('App.js:Consctructor', props);
	}

	componentWillMount() {
		console.log('App.js:ComponentWillMount');
	}

	componentDidMount() {
		console.log('App.js:ComponentDidMount');
	}

	switchNameHandler = (name, id) => {
		// Getting person with selected id and save this person into new variable
		const personIndex = this.state.persons.findIndex(person => person.id === id);
		const person = {...this.state.persons[personIndex]};

		// Changing name for selected person
		person.name = name;

		// Create new array of persons and update person with selected id
		const persons = [...this.state.persons];
		persons[personIndex] = person;

		this.setState({
			persons
		})
	};

	deletePersonHandler = (index) => {
		//to not mutate original array as arrays works by reference
		const persons = [...this.state.persons];
		persons.splice(index, 1);

		this.setState({
			persons
		})
	};

	toggleVisibilityHandler = () => {
		this.setState({
			showPerson: !this.state.showPerson
		})
	};

	render() {
		console.log('App.js:Render');
		return (
			<div className={styles.App}>

				<Header
					showPerson = {this.state.showPerson}
					toggleVisibilityHandler = {this.toggleVisibilityHandler} />

				{
					this.state.showPerson &&
						<Persons
							persons = {this.state.persons}
							deletePersonHandler = {this.deletePersonHandler}
							switchNameHandler = {this.switchNameHandler}
						/>
				}

			</div>
		);
	}
}

export default App;
