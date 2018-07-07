import React, {Component} from 'react';
import {Person} from '../Person/Person.jsx';
import { ErrorBoundary } from '../ErrorBaundary/ErrorBoundary';
import styles from './App.scss';

class App extends Component {
    state = {
        persons: [
            {id: 1, name: 'Alex', age: 29},
            {id: 2, name: 'Khrystyna', age: 30},
        ],
        showPerson: false
    };

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
    }

    deletePersonHandler = (index) => {
        //to not mutate original array as arrays works by refferance
        const persons = [...this.state.persons];
        persons.splice(index, 1);

        this.setState({
            persons
        })
    }

    toggleVisibilityHandler = () => {
        this.setState({
            showPerson: !this.state.showPerson
        })
    }

    render() {
        const buttonColour = this.state.showPerson ? styles.btn_colour_red : styles.btn_colour_green;

        return (
            <div className={styles.App}>
                <h1>React app</h1>
                <p>This is works</p>
                <button className={`${styles.btn} ${buttonColour}`} onClick={this.toggleVisibilityHandler}>Change name</button>

                {
                    this.state.showPerson &&
                    this.state.persons.map((person, index) => {
                        return (
                            <ErrorBoundary key={person.id}>
                                <Person
                                    personId={person.id}
                                    index = {index}
                                    click={this.deletePersonHandler}
                                    switchNameHandler={this.switchNameHandler}
                                    name={person.name}
                                    age={person.age} />
                            </ErrorBoundary>
                        )
                    })

                }

            </div>
        );
    }
}

export default App;
