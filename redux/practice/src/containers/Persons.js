import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {
    state = {
        person: {
            name: '',
            age: ''
        }
    };

    addPersonHandler = (stateProperty, statePropertyValue) => {
        let newPerson = this.state.person;
        newPerson[stateProperty] = statePropertyValue;

        this.setState({
            ...newPerson
        })
    };

    passPersonToState = (event) => {
        event.preventDefault();
        this.props.addPerson(this.state.person)
    };

    render () {
        return (
            <div>
                <div>
                    <form onSubmit={this.passPersonToState}>
                        <div className="name">
                            <label htmlFor="name">Name</label>
                            <input onChange={(event) => this.addPersonHandler(event.target.id, event.target.value)} type="text" id="name"/>
                        </div>
                        <div className="age">
                            <label htmlFor="age">Age</label>
                            <input onChange={(event) => this.addPersonHandler(event.target.id, event.target.value)} type="text" id="age"/>
                        </div>
                        <button type="submit">Save</button>
                    </form>
                </div>
                {/*<AddPerson personAdded={this.props.addPerson} />*/}
                {this.props.persons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.removePerson(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
  return {
      ...state
  }
};

const mapDispatchToProps = dispatch => {
    return {
        addPerson: (person) => dispatch({type: actions.ADD_PERSON, person}),
        removePerson: (personId) => dispatch({type: actions.REMOVE_PERSON, value: personId})
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Persons);