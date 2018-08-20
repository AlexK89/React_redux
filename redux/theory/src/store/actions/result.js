import * as result from './actionTypes';

export const storeResult = (value) => {
    return dispatch => {
        setTimeout(() => {
            dispatch({type: result.STORE_RESULT, counter: value});
        }, 2000);
    }
};

export const deleteResult = (id) => {
    return {
        type: result.DELETE_RESULT,
        id
    }
};