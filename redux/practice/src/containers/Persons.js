import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {
    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.addPerson} />
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
        addPerson: () => dispatch({type: actions.ADD_PERSON}),
        removePerson: (personId) => dispatch({type: actions.REMOVE_PERSON, value: personId})
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Persons);