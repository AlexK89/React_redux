import React from 'react';
import Aux from '../../hoc/Aux.jsx';
import withErrorHandler from '../../hoc/withErrorHandler/WithErrorHandler.jsx';
import Burger from "../../components/Burger/Burger.jsx";
import {connect} from 'react-redux';
import * as burgerBuilderActions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner.jsx';
import axiosInstance from '../../hoc/axios-orders';
import BurgerControls from '../../components/Burger/BuildControls/BuildControls.jsx';
import Modal from '../../components/UI/Modal/Modal.jsx';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary.jsx';

// const INGREDIANT_PRICES = {
//     salad: 0.3,
//     bacon: 0.6,
//     cheese: 0.5,
//     meat: 1.7,
// };

class BurgerBuilder extends React.Component {
    state = {
        // ingredients: null,
        // totalPrice: 4,
        // purchasable: false,
        purchasing: false,
        loading: false,
    };

    componentDidMount() {
        this.props.onInitIngredients();
    }

    // Change ingredients in your burger (Add/Remove)
    // changeIngredientsQuantity = (type, count) => {
    //     const updatedIngredients = {
    //         ...this.state.ingredients
    //     };
    //
    //     updatedIngredients[type] += count;
    //
    //     const priceChange = INGREDIANT_PRICES[type];
    //     const newPrice = (parseFloat(this.state.totalPrice) + priceChange * count).toFixed(2);
    //
    //     this.setState({
    //         totalPrice: newPrice,
    //         ingredients: updatedIngredients
    //     }, () => {
    //         this.updatePurchaseState();
    //     });
    // };

    // Add ingredient to burger
    // addIngredientHandler = (type) => {
    //     this.changeIngredientsQuantity(type, 1);
    // };

    // Remove ingredient from burger
    // removeIngredientHandler = (type) => {
    //     if (this.state.ingredients[type] > 0) {
    //         this.changeIngredientsQuantity(type, -1);
    //     }
    // };

    // Check for enough ingredients to make a purchase
    updatePurchaseState = () => {
        // const ingredients = {
        //     ...this.state.ingredients
        // };
        const sum = Object.values((this.props.ingredients)).reduce((a, b) => a + b, 0);

        return sum > 0;
    };

    // Show purchase list
    parchesHandler = () => {
        this.setState({purchasing: true})
    };

    // Hide purchase list
    parchesCancelHandler = () => {
        this.setState({purchasing: false})
    };

    // Continue purchase list
    parchesContinueHandler = () => {
        // Pass ingredients using URL
        // let queryParams = [];
        //
        // for (let item in this.state.ingredients) {
        //     queryParams.push(`${encodeURIComponent(item)}=${encodeURIComponent(this.state.ingredients[item])}`);
        // }
        // queryParams.push(`price=${this.state.totalPrice}`);
        // let queryString = queryParams.join('&');
        // this.props.history.push({
        //     pathname:'/checkout',
        //     search: `?${queryString}`
        // });
        this.props.history.push('/checkout');
    };

    render() {
        let burgerControls = <Spinner/>;
        let orderSummary = <Spinner/>;
        let burger = this.props.error ? <h1>Ingredients can't be loaded</h1> :
            <Burger ingredients={this.props.ingredients}/>;

        // Checking do we have ingredients loaded
        if (this.props.ingredients) {
            burgerControls = (
                <Aux>
                    {burger}
                    <BurgerControls
                        ordered={this.parchesHandler}
                        totalPrice={this.props.totalPrice}
                        ingredients={this.props.ingredients}
                        purchasable={this.updatePurchaseState()}
                        addIngredient={this.props.onIngredientAdded}
                        removeIngredient={this.props.onIngredientRemoved}
                    />
                </Aux>
            );

            orderSummary = (
                <OrderSummary
                    totalPrice={this.props.totalPrice}
                    modalContinue={this.parchesContinueHandler}
                    modalClosed={this.parchesCancelHandler}
                    ingredients={this.props.ingredients}/>
            );

        }

        // Waiting for sending order to DB
        if (this.state.loading) {
            orderSummary = <Spinner/>
        }

        return (
            <Aux>
                <Modal
                    modalClosed={this.parchesCancelHandler}
                    show={this.state.purchasing}>
                    {orderSummary}
                </Modal>

                {burgerControls}

            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        ...state
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingredient) => dispatch(burgerBuilderActions.addIngredient(ingredient)),
        onIngredientRemoved: (ingredient) => dispatch(burgerBuilderActions.removeIngredient(ingredient)),
        onInitIngredients: () => dispatch(burgerBuilderActions.initIngredients()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axiosInstance));