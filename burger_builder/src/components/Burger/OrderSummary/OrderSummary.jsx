import React from 'react';
import Aux from '../../../hoc/Aux.jsx';
import styles from './OrderSummary.scss';
import Button from '../../UI/Button/Button.jsx';

export class OrderSummary extends React.Component {
    componentWillUpdate() {
        console.log('order summery');
    }

    render() {
        const ingredientsSummary = Object.keys(this.props.ingredients).map(ingredient => {
            return (
                <li key={ingredient}>
                    <strong>{ingredient}</strong>: {this.props.ingredients[ingredient]}
                </li>
            )
        });

        return (
            <Aux>
                <h3>Your order:</h3>
                <p>A delicious burger with following components</p>
                <ul className={styles.order_list}>
                    {ingredientsSummary}
                    <p><strong>Total Price: {this.props.totalPrice}$</strong></p>
                    <p>Continue to Checkout?</p>
                </ul>
                <div className={styles.order_buttons}>
                    <Button
                        btnType={'danger'}
                        click={this.props.modalClosed}>
                        Cancel
                    </Button>
                    <Button
                        click={this.props.modalContinue}
                        btnType={'success'}>
                        Continue
                    </Button>
                </div>
            </Aux>
        )
    }
}

export default OrderSummary;