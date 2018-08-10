const initialState = {
    counter: 0,
    results: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INC_COUNTER':
            return {
                ...state,
                counter: state.counter + 1
            };
        case 'DEC_COUNTER':
            return {
                ...state,
                counter: state.counter - 1
            };
        case 'ADD_COUNTER':
            return {
                ...state,
                counter: state.counter + action.value
            };
        case 'SUBTRACT_COUNTER':
            return {
                ...state,
                counter: state.counter - action.value
            };
        case 'STORE_RESULT':
            return {
                ...state,
                results: state.results.concat({value: state.counter, id: new Date()})

            };
        case 'DELETE_RESULT':
            const id = 2;
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