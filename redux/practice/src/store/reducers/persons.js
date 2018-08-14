import * as actions from '../actions';

const initialState = {
    persons: []
};

const resultsReducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.ADD_PERSON:
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: 'Vasile',
                age: Math.floor( Math.random() * 100 )
            };

            return {
                ...state,
                persons: state.persons.concat(newPerson)
            };
        case actions.REMOVE_PERSON:
            const newPersonsState = state.persons.filter(person => person.id !== action.value);

            return {
                ...state,
                persons: [...newPersonsState]
            };
        default:
            return state;
    }
};

export default resultsReducer;
