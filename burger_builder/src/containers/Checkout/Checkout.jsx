import React from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary.jsx';

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
        this.props.history.replace('/checkout/contact-data');
    };

    render() {
        return (
            (this.state.ingredients) ?
            <CheckoutSummary
                checkoutCancelled={this.checkoutCancelledHandler}
                checkoutContinued={this.checkoutContinuedHandler}
                ingredients={this.state.ingredients}/>
                : ''
        )
    }
}

export default Checkout;