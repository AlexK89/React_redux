import React from 'react';
import Aux from '../../hoc/Aux.jsx';
import Burger from "../../components/Burger/Burger.jsx";

class BurgerBuilder extends React.Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 1,
            meat: 1,
        }
    };

    render() {
        return (
            <Aux>
                <Burger ingredients = {this.state.ingredients}/>
                <div>Build controls</div>
            </Aux>
        )
    }
}

export default BurgerBuilder;