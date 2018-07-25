import React from 'react';
import styles from './Burger.scss';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient.jsx';

const burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients)
        .map(ingKey => {
            return [...Array(props.ingredients[ingKey])].map((_, i) => {
                return (<BurgerIngredient key={ingKey + i} type={ingKey}/>)
            })
        })
         //to flatten your array
        .reduce((prevVal, currentVal) => {
            return prevVal.concat(currentVal);
        }, []);

    if (!transformedIngredients.length) {
        transformedIngredients = <p>Add some ingredients!</p>;
    }

    return (
        <div className={styles.burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;