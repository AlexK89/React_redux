import * as actionTypes from '../actions/actionTypes';
import {updateObject} from "../utility";

const initialState = {
    counter: 0
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INC_COUNTER:
            return updateObject(state, {counter: state.counter + 1});
        case actionTypes.DEC_COUNTER:
            return updateObject({counter: state.counter - 1});
        case actionTypes.ADD_COUNTER:
            return updateObject({counter: state.counter + action.value});
        case actionTypes.SUBTRACT_COUNTER:
            return updateObject({counter: state.counter - action.value});
        default:
            return state;
    }
};

export default counterReducer;