// NodeJS syntax
const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
};

// Reducer
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INC_COUNTER':
            return {
                ...state,
                counter: state.counter + 1
            };
        case 'ADD_COUNTER':
            return {
                ...state,
                counter: state.counter + action.value
            };
        default:
            return state;
    }
};

// Store
const store = createStore(rootReducer);

// Dispatching action || should contain type, which can be any string. By convention we use CAPITALS
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
store.dispatch({type: 'DEC_COUNTER'});

console.log(store.getState());

// Subscription