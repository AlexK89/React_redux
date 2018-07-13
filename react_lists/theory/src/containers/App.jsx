import React, {PureComponent} from 'react';
import {Persons} from '../components/Persons/Persons.jsx';
import {Header} from '../components/Header/Header.jsx';
import WithClass from '../hoc/WithClass.jsx';
import styles from './App.scss';

// =============================
// !!! We can import PureComponent from React which has
// pre-build shouldComponentUpdate with check for similarity
// =============================


class App extends PureComponent {
	// NEW version of initialization State
	state = {
		persons: [
			{id: 1, name: 'Alex', age: 29},
			{id: 2, name: 'Khrystyna', age: 30},
		],
		showPerson: false
	};

	// =========================
	// React component CREATE Lifecycle hooks
	// =========================

	// #1
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

		console.log('#1 [CREATE App.js]:Consctructor', props);
	}

	// #2
	componentWillMount() {
		console.log('#2 [CREATE App.js]:ComponentWillMount');
	}

	// #3
	componentDidMount() {
		console.log('#4 [CREATE App.js]:ComponentDidMount');
	}


	// =========================
	// React component UPDATE Lifecycle hooks INTERNAL/STATE update
	// =========================

	// #4
	// shouldComponentUpdate(nextProps, nextState) {
	// 	console.log('#5 [UPDATE App.js]:shouldComponentUpdate', nextProps, nextState);
	// 	// MUST RETURN TRUE || FALSE
	// 	return 	nextState.persons !== this.state.persons ||
	// 			nextState.showPerson !== this.state.showPerson;
	// }

	// #5
	componentWillUpdate(nextProps, nextState) {
		console.log('#6 [UPDATE App.js]:componentWillUpdate', nextProps, nextState);
	}

	// #6
	componentDidUpdate(nextProps, nextState) {
		console.log('#7 [UPDATE App.js]:componentDidUpdate', nextProps, nextState);
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
		console.log('#3 [CREATE App.js] AND #8 [UPDATE App.js].js:Render');
		return (
			<WithClass className={styles.App}>

				<Header
					showPerson = {this.state.showPerson}
					toggleVisibilityHandler = {this.toggleVisibilityHandler} />
				<button className={`${styles.btn} ${styles.btn_colour_green}`} onClick={() => this.setState({showPerson: true}) }>Show persons</button>
				{
					this.state.showPerson &&
						<Persons
							persons = {this.state.persons}
							deletePersonHandler = {this.deletePersonHandler}
							switchNameHandler = {this.switchNameHandler}
						/>
				}

			</WithClass>
		);
	}
}

export default App;
