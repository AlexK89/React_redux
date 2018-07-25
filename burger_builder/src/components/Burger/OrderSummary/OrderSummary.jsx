import React from 'react';
import Aux from '../../../hoc/Aux.jsx';
import styles from './OrderSummary.scss';
import Button from '../../UI/Button/Button.jsx';

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
            <div className={styles.order_buttons}>
                <Button
                    btnType={'danger'}
                    click={props.modalClosed}>
                    Cancel
                </Button>
                <Button btnType={'success'}>Continue</Button>
            </div>
        </Aux>
    )
};

export default OrderSummary;