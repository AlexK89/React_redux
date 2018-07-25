import React from 'react';
import styles from './BuildControls.scss';
import BuildControl from './BuildControl/BuildControl.jsx';
import Button from '../../UI/Button/Button';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];

const buildControls = (props) => {
    return (
        <div className={styles.BuildControls}>
            <div className={styles.checkout}>
                <h2 className={styles.checkoutPrice}>Current price: {props.totalPrice}$</h2>
                <Button
                    click={props.ordered}
                    btnType={'success'}
                    disabled={!props.purchasable}>
                    Order now
                </Button>
            </div>
            {
                controls.map((control) => {
                    return (
                        <BuildControl
                            ingredient = {props.ingredients[control.type]}
                            addIngredient = {() => props.addIngredient(control.type)}
                            removeIngredient = {() => props.removeIngredient(control.type)}
                            key={control.label}
                            label={control.label}/>
                    )
                })
            }
        </div>
    )
};

export default buildControls;