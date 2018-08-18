import * as actions from '../actions';
import {ADD_INGREDIENT} from "../actions";
import {REMOVE_INGREDIENT} from "../actions";

const initialState = {
    ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0,
    },
    totalPrice: 4
};

const INGREDIANT_PRICES = {
    salad: 0.3,
    bacon: 0.6,
    cheese: 0.5,
    meat: 1.7,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                },
                totalPrice: (parseFloat(state.totalPrice) + INGREDIANT_PRICES[action.ingredientName]).toFixed(2)
            };
        case REMOVE_INGREDIENT:
            if (state.ingredients[action.ingredientName]) {
                return {
                    ...state,
                    ingredients: {
                        ...state.ingredients,
                        [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                    },
                    totalPrice: (parseFloat(state.totalPrice) - INGREDIANT_PRICES[action.ingredientName]).toFixed(2)
                };
            }
            return state;
        default:
            return state;
    }
};

export default reducer;