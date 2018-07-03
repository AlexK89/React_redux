import React, {Component} from 'react';
import {Person} from './Person/Person';
import './App.css';

class App extends Component {
    state = {
        name: 'Alex'
    };

    switchNameHandler = (name) => {
        this.setState({name})
    }

    render() {
        //Inline styling
        const style = {
            backgroundColor: '#eee',
            padding: '1em',
            cursor: 'pointer'
        }

        return (<div className="App">
            <h1>React app</h1>
            <p>This is works</p>
            <button
                style={style}
                onClick={() => this.switchNameHandler('Kristina')}
                >
                    Change name
                </button>
            <Person switchNameHandler={this.switchNameHandler} name={this.state.name} age={Math.floor(Math.random() * 100)}>
                Text nested to component
            </Person>
        </div>);

        // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'React app'));
    }
}

export default App;
