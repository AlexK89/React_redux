import React, {Component} from 'react';
import {Person} from './Person/Person.jsx';
import './App.scss';

class App extends Component {
    state = {
        persons: [
            {name: 'Alex', age: 29},
            {name: 'Khrystyna', age: 30},
        ],
        showPerson: false
    };

    switchNameHandler = (name) => {
        this.setState({
            persons: [
                {name, age: 29},
                {name: 'Khrystyna', age: 30},
            ]
        })
    }

    deletePersonHandler = (index) => {
        const persons = this.state.persons;
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
        return (
            <div className="App">
                <h1>React app</h1>
                <p>This is works</p>
                <button onClick={this.toggleVisibilityHandler}>Change name</button>

                {
                    this.state.showPerson &&
                    this.state.persons.map((person, key) => {
                        return (
                            <Person
                                key={key}
                                click={() => this.deletePersonHandler(key)}
                                switchNameHandler={this.switchNameHandler}
                                name={person.name}
                                age={person.age} />
                        )
                    })

                }

            </div>
        );
    }
}

export default App;
