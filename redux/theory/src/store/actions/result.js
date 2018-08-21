import * as result from './actionTypes';

export const storeResult = (value) => {
    return (dispatch, getState) => {
        // getState - is a method which returns you a current state
        console.log('getState: ', getState());
        setTimeout(() => {
            const oldCounter = getState().counter;
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