export const INC_COUNTER        = 'INC_COUNTER';
export const DEC_COUNTER        = 'DEC_COUNTER';
export const ADD_COUNTER        = 'ADD_COUNTER';
export const SUBTRACT_COUNTER   = 'SUBTRACT_COUNTER';
export const STORE_RESULT       = 'STORE_RESULT';
export const DELETE_RESULT      = 'DELETE_RESULT';

export const incCounter = () => {
  return {
      type: INC_COUNTER
  }
};

export const decCounter = () => {
    return {
        type: DEC_COUNTER
    }
};

export const addCounter = (value) => {
    return {
        type: ADD_COUNTER,
        value,
    }
};

export const substrartCounter = (value) => {
    return {
        type: SUBTRACT_COUNTER,
        value
    }
};

export const storeResult = (value) => {
    return dispatch => {
        setTimeout(() => {
            dispatch({type: STORE_RESULT, counter: value});
        }, 2000);
    }
};

export const deleteResult = (id) => {
    return {
        type: DELETE_RESULT,
        id
    }
};