import React from 'react';
import styles from './BuildControl.scss';

const buildControl = (props) => {
    return (
        <div className={styles.BuildControl}>
            <div className={styles.label}>{props.label}</div>
            <button
                disabled = {!props.ingredient}
                onClick={props.removeIngredient}
                className={styles.less}>
                Less
            </button>
            <button
                onClick={props.addIngredient}
                className={styles.more}>
                More
            </button>
        </div>
    )
};

export default buildControl;