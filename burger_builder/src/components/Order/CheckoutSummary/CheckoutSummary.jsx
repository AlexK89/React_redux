import React from 'react';
import styles from './CheckoutSummary.scss';
import Burger from '../../Burger/Burger.jsx';
import Buttons from '../../UI/Button/Button.jsx';

const checkoutSummary = (props) => {
    return(
        <div className={styles.checkout_summary}>
            <h1>checkoutSummary</h1>
            <div>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Buttons btnType="danger small">Cancel</Buttons>
            <Buttons btnType="success small">Order</Buttons>
        </div>
    )
};

export default checkoutSummary;