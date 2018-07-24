import React from 'react';
import Aux from '../../../hoc/Aux.jsx';
import styles from './OrderSummary.scss';

const OrderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients).map(ingredient => {
        return (
            <li key={ingredient}>
                <strong>{ingredient}</strong>: {props.ingredients[ingredient]}
            </li>
        )
    });

    return (
        <Aux>
            <h3>Your order:</h3>
            <p>A delicious burger with following components</p>
            <ul className={styles.order_list}>
                {ingredientsSummary}
                <p>Continue to Checkout?</p>
            </ul>
        </Aux>
    )
};

export default OrderSummary;