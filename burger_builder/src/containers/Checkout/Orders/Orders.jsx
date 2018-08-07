import React from 'react';
import Order from '../../../components/Order/Order.jsx';
import axiosInstance from '../../../hoc/axios-orders';

class Orders extends React.Component {
    state= {
        orders: null,
    };

    componentWillMount() {
        axiosInstance.get('/orders.json')
            .then((response) => {
                let pulledOrders = Object.entries(response.data).map((order) => order[1]);

                this.setState({
                    orders: pulledOrders
                });
            })
    }

    render() {
        return (
            this.state.orders &&
            <div>
                {this.state.orders.map((order, key) => <Order key={key} order={order}/>)}
            </div>
        );
    }
}

export default Orders;