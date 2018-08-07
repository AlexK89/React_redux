import React from 'react';
import Order from '../../../components/Order/Order.jsx';
import axiosInstance from '../../../hoc/axios-orders';
import withErrorHandler from '../../../hoc/withErrorHandler/WithErrorHandler.jsx';

class Orders extends React.Component {
    state= {
        orders: null,
    };

    componentWillMount() {
        axiosInstance.get('/orders.json')
            .then((response) => {
                let fetchedOrders = [];

                for (let orderKey in response.data) {
                    fetchedOrders.push({
                        ...response.data[orderKey],
                        id: orderKey
                    })
                }
                this.setState({
                    orders: fetchedOrders
                });
            })
    }

    render() {
        return (
            this.state.orders &&
            <div>
                {this.state.orders.map(order => <Order key={order.id} order={order}/>)}
            </div>
        );
    }
}

export default withErrorHandler(Orders, axiosInstance);