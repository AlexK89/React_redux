import React from 'react';
import styles from './BuildControl.scss';
import Button from '../../../UI/Button/Button.jsx';

const buildControl = (props) => {
    return (
        <div className={styles.BuildControl}>
            <div className={styles.label}>{props.label}</div>
            <Button
                disabled = {!props.ingredient}
                click={props.removeIngredient}
                btnType={'danger small'}>
                Less
            </Button>
            <Button
                click={props.addIngredient}
                btnType={'success small'}>
                More
            </Button>
        </div>
    )
};

export default buildControl;