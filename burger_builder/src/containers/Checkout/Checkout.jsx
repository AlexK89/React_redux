import React from 'react';
import {Route} from 'react-router-dom';
import Aux from '../../hoc/Aux.jsx';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary.jsx';
import ContactData from './ContactData/ContactData.jsx';

class Checkout extends React.Component {
    state = {
        ingredients: null
    };

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        let ingredients = {};

        for (let item of query.entries()) {
            ingredients[item[0]] = parseInt(item[1]);
        }
        this.setState({ingredients});
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
            (this.state.ingredients) ?
                <Aux>
                    <CheckoutSummary
                        checkoutCancelled={this.checkoutCancelledHandler}
                        checkoutContinued={this.checkoutContinuedHandler}
                        ingredients={this.state.ingredients}/>
                    <Route path={`${this.props.match.path}/order_form`} component={ContactData}/>
                </Aux>
                : ''
        )
    }
}

export default Checkout;