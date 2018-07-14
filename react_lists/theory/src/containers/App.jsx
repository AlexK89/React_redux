import React, {PureComponent} from 'react';
import {Persons} from '../components/Persons/Persons.jsx';
import {Header} from '../components/Header/Header.jsx';
import Aux from '../hoc/Aux.jsx';
import withClass from '../hoc/withClass.jsx';
import styles from './App.scss';

// =============================
// !!! We can import PureComponent from React which has
// pre-build shouldComponentUpdate with check for similarity
// =============================

export const AuthContext = React.createContext(false);

class App extends PureComponent {
	// NEW version of initialization State
	state = {
		persons: [
			{id: 1, name: 'Alex', age: 29},
			{id: 2, name: 'Khrystyna', age: 30},
		],
		showPerson: false,
		toggleCounter: 0,
		authenticated: false
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

		console.log('#1 [CREATE App.jsx]:Consctructor', props);
	}

	// // #2
	// componentWillMount() {
	// 	console.log('#2 [CREATE App.jsx]:ComponentWillMount');
	// }

	// #3
	componentDidMount() {
		console.log('#4 [CREATE App.jsx]:ComponentDidMount');
	}


	// =========================
	// React component UPDATE Lifecycle hooks INTERNAL/STATE update
	// =========================

	// #4
	// shouldComponentUpdate(nextProps, nextState) {
	// 	console.log('#5 [UPDATE App.jsx]:shouldComponentUpdate', nextProps, nextState);
	// 	// MUST RETURN TRUE || FALSE
	// 	return 	nextState.persons !== this.state.persons ||
	// 			nextState.showPerson !== this.state.showPerson;
	// }

	// // #5
	// componentWillUpdate(nextProps, nextState) {
	// 	console.log('#6 [UPDATE App.jsx]:componentWillUpdate', nextProps, nextState);
	// }

	//New hook for new React 16.3
	static getDerivedStateFromProps(nextProps, prevState) {
		console.log('[UPDATE App.jsx]:getDerivedStateFromProps', nextProps, prevState);
		return prevState;
	}

	getSnapshotBeforeUpdate() {
		//Useful for saving scrolling position
		console.log('[UPDATE App.jsx]:getSnapshotBeforeUpdate');
	}

	// #6
	componentDidUpdate(nextProps, nextState) {
		console.log('#7 [UPDATE App.jsx]:componentDidUpdate', nextProps, nextState);
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
		//Right way to update state || Use prevState
		this.setState((prevState, props) => {
			return {
				showPerson: !this.state.showPerson,
				toggleCounter: prevState.toggleCounter + 1
			}
		})
	};

	loginHandler = () => {
		this.setState({
			authenticated: !this.state.authenticated
		})
	};

	render() {
		console.log('#3 [CREATE App.jsx] AND #8 [UPDATE App.jsx].js:Render');
		return (
			<Aux>
				<Header
					login={this.loginHandler}
					showPerson={this.state.showPerson}
					toggleVisibilityHandler={this.toggleVisibilityHandler}/>
				<button className={`${styles.btn} ${styles.btn_colour_green}`}
						onClick={() => this.setState({showPerson: true})}>Show persons
				</button>
				<AuthContext.Provider value={this.state.authenticated}>
					{
						this.state.showPerson &&
						<Persons
							persons={this.state.persons}
							deletePersonHandler={this.deletePersonHandler}
							switchNameHandler={this.switchNameHandler}
						/>
					}
				</AuthContext.Provider>
			</Aux>
		);
	}
}

export default withClass(App, styles.App);
