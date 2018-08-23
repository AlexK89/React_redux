import * as actionTypes from '../actions/actionTypes';
import {updateObject} from "../utility";

const initialState = {
    results: []
};

const deleteResult = (state, action) => {
    const updateArray = state.results.filter((item) => item.id !== action.id);
    return updateObject(state, {results: [...updateArray]})
};

const resultsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return updateObject(state, {results: state.results.concat({value: action.counter, id: new Date()})});
        case actionTypes.DELETE_RESULT:
            return deleteResult(state, action);
        default:
            return state;
    }
};

export default resultsReducer;