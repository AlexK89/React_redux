import React from 'react';
import {Route} from 'react-router-dom';
import Aux from '../../hoc/Aux.jsx';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary.jsx';
import ContactData from './ContactData/ContactData.jsx';

class Checkout extends React.Component {
    state = {
        ingredients: null,
        totalPrice: 0
    };

    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search);
        let ingredients = {};
        let price = 0;

        for (let item of query.entries()) {
            if (item[0] === 'price') {
                price = item[1]
            } else {
                ingredients[item[0]] = parseInt(item[1]);
            }
        }
        this.setState({ingredients, totalPrice: price});
    }

    // shouldComponentUpdate(nextProps) {
    //     return nextProps.match.location.pathname !== prevProps.match.location.pathname
    // }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    };

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/order_form');
    };

    render() {
        return (
            <Aux>
                <CheckoutSummary
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler}
                    ingredients={this.state.ingredients}/>
                <Route path={`${this.props.match.path}/order_form`}
                       render={(props) => <ContactData {...props} ingredients={this.state.ingredients}
                                                       totalPrice={this.state.totalPrice}/>}/>
            </Aux>
        )
    }
}

export default Checkout;