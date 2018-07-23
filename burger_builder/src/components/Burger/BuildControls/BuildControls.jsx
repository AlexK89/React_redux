import React from 'react';
import styles from './BuildControls.scss';
import BuildControl from './BuildControl/BuildControl.jsx';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];

const buildControls = (props) => {
    return (
        <div className={styles.BuildControls}>
            <h2>Current price: {props.totalPrice}$</h2>
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