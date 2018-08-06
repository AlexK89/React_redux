import React from 'react';
import styles from './CheckoutSummary.scss';
import Burger from '../../Burger/Burger.jsx';
import Buttons from '../../UI/Button/Button.jsx';

const checkoutSummary = (props) => {
    console.log('summary props: ', props);
    return(
        <div className={styles.checkout_summary}>
            <h1>checkoutSummary</h1>
            <div>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Buttons btnType="danger small" click={props.checkoutCancelled}>Cancel</Buttons>
            <Buttons btnType="success small" click={props.checkoutContinued}>Order</Buttons>
        </div>
    )
};

export default checkoutSummary;