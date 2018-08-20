import * as actionTypes from '../actions/actionTypes';

const initialState = {
    results: []
};

const resultsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({value: action.counter, id: new Date()})
            };
        case actionTypes.DELETE_RESULT:
            const updatedArray = state.results.filter((item) => item.id !== action.id);

            return {
                ...state,
                results: [...updatedArray]
            };
        default:
            return state;
    }
};

export default resultsReducer;