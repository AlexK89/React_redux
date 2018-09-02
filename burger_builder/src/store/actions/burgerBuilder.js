import * as actionTypes from './actionsTypes';
import axiosInstance from '../../hoc/axios-orders';

export const addIngredient = (name) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    }
};

export const removeIngredient = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    }
};

export const setIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIETS,
        ingredients: ingredients
    }
};

export const fetchIngredientsFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILD
    }
};

export const initIngredients = () => {
  return dispatch => {
      axiosInstance.get('/ingredients.json')
          .then(response => {
                  console.log(response);
                  dispatch(setIngredients(response.data))
              }
          )
          .catch(error => {
              dispatch(setIngredients())
          })
  }
};