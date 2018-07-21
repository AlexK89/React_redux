import React from 'react';
import styles from './Burger.scss';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient.jsx';

const burger = (props) => {
    // const transformedIngredients = Object.keys(props.ingredients)
    //     .map(ingKey => {
    //         return [...Array(props.ingredients[ingKey])].map((_, i) => {
    //             return (<BurgerIngredient key={ingKey + i} type={ingKey}/>)
    //         })
    //     });

    const transformedIngredients = Object.keys(props.ingredients)
        .map(ingKey => {
            return [...Array(props.ingredients[ingKey])].map((_, i) => {
                return (<BurgerIngredient key={ingKey + i} type={ingKey}/>)
            })
        });
    console.log(transformedIngredients);
    return (
        <div className={styles.burger}>
            <BurgerIngredient type="bread-top"/>
            {/*{transformedIngredients}*/}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;