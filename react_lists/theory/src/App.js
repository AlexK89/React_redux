import React, {Component} from 'react';
import {Person} from './Person/Person';
import './App.css';

class App extends Component {
    state = {
        name: 'Alex',
        showPersons: false
    };

    switchNameHandler = (name) => {
        this.setState({name})
    }

    togglePersonsHandler = () => {
        this.setState({
            showPersons: !this.state.showPersons
        })
    }

    render() {

        return (<div className="App">
            <h1>React app</h1>
            <p>This is works</p>
            <button onClick={this.togglePersonsHandler}>
                Change Person
            </button>

            {
                this.state.showPersons &&
                <Person switchNameHandler={this.switchNameHandler} name={this.state.name} age={Math.floor(Math.random() * 100)}>
                    Text nested to component
                </Person>
            }

        </div>);

        // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'React app'));
    }
}

export default App;
