import * as actions from './actions';

const initialState = {
    counter: 0,
    results: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.INC_COUNTER:
            return {
                ...state,
                counter: state.counter + 1
            };
        case actions.DEC_COUNTER:
            return {
                ...state,
                counter: state.counter - 1
            };
        case actions.ADD_COUNTER:
            return {
                ...state,
                counter: state.counter + action.value
            };
        case actions.SUBTRACT_COUNTER:
            return {
                ...state,
                counter: state.counter - action.value
            };
        case actions.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({value: state.counter, id: new Date()})

            };
        case actions.DELETE_RESULT:
            const updatedArray = state.results.filter((item) => item.id !== action.id);

            return {
                ...state,
                results: [...updatedArray]
            };
        default:
            return state;
    }
};

export default reducer