import React from 'react';
import Aux from '../../hoc/Aux.jsx';
import Burger from "../../components/Burger/Burger.jsx";
import BurgerControls from '../../components/Burger/BuildControls/BuildControls.jsx';

const INGREDIANT_PRICES = {
    salad: 0.3,
    cheese: 0.5,
    meat: 1.7,
    bacon: 0.6,
};

class BurgerBuilder extends React.Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 1,
            meat: 1,
        },
        totalPrice: 4
    };

    changeIngredientsQuantity = (type, count) => {
        const updatedIngredients = {
            ...this.state.ingredients
        };

        updatedIngredients[type] += count;

        const priceChange = INGREDIANT_PRICES[type];
        const newPrice = this.state.totalPrice + priceChange;

        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        })
    };

    addIngredientHandler = (type) => {
        this.changeIngredientsQuantity(type, 1);
    };

    removeIngredientHandler = (type) => {
        if (this.state.ingredients[type] > 0 ) {
            this.changeIngredientsQuantity(type, -1);
        }
    };

    render() {
        return (
            <Aux>
                <Burger ingredients = {this.state.ingredients}/>
                <BurgerControls
                    ingredients = {this.state.ingredients}
                    addIngredient = {this.addIngredientHandler}
                    removeIngredient = {this.removeIngredientHandler}
                />
            </Aux>
        )
    }
}

export default BurgerBuilder;