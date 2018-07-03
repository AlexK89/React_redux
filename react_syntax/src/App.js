import React, { Component } from 'react';
import {Person} from './Person/Person';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React app</h1>
        <p>This is works</p>
    <Person age={Math.floor(Math.random() * 100)}/>
      </div>
    );

    // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'React app'));
  }
}

export default App;
