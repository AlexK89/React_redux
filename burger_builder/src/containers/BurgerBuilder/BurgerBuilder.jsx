import React from 'react';
import Aux from '../../hoc/Aux.jsx';
import Burger from "../../components/Burger/Burger.jsx";
import BurgerControls from '../../components/Burger/BuildControls/BuildControls.jsx';
import Modal from '../../components/UI/Modal/Modal.jsx';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary.jsx';


const INGREDIANT_PRICES = {
    salad: 0.3,
    bacon: 0.6,
    cheese: 0.5,
    meat: 1.7,
};

class BurgerBuilder extends React.Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        },
        totalPrice: 4,
        purchasable: false
    };

    changeIngredientsQuantity = (type, count) => {
        const updatedIngredients = {
            ...this.state.ingredients
        };

        updatedIngredients[type] += count;

        const priceChange = INGREDIANT_PRICES[type];
        const newPrice = this.state.totalPrice + priceChange * count;

        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        }, () => {
            this.updatePurchaseState();
        });
    };

    addIngredientHandler = (type) => {
        this.changeIngredientsQuantity(type, 1);
    };

    removeIngredientHandler = (type) => {
        if (this.state.ingredients[type] > 0 ) {
            this.changeIngredientsQuantity(type, -1);
        }
    };

    updatePurchaseState = () => {
        const ingredients = {
            ...this.state.ingredients
        };
        const sum = Object.values(ingredients).reduce((a, b) => a + b, 0);
        console.log(sum > 0);
        this.setState({purchasable: sum > 0})
    };

    render() {
        return (
            <Aux>
                <Modal>
                    <OrderSummary ingredients = {this.state.ingredients}/>
                </Modal>
                <Burger ingredients = {this.state.ingredients}/>
                <BurgerControls
                    totalPrice = {this.state.totalPrice}
                    ingredients = {this.state.ingredients}
                    purchasable={this.state.purchasable}
                    addIngredient = {this.addIngredientHandler}
                    removeIngredient = {this.removeIngredientHandler}
                />
            </Aux>
        )
    }
}

export default BurgerBuilder;