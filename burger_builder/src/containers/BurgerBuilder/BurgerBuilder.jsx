import React from 'react';
import Aux from '../../hoc/Aux.jsx';
import Burger from "../../components/Burger/Burger.jsx";

class BurgerBuilder extends React.Component {
    render() {
        return (
            <Aux>
                <Burger />
                <div>Build controls</div>
            </Aux>
        )
    }
}

export default BurgerBuilder;