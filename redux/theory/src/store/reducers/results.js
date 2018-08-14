import * as actions from '../actions';

const initialState = {
    results: []
};

const resultsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({value: action.counter, id: new Date()})
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

export default resultsReducer;