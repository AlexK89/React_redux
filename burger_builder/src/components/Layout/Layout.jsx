import React from 'react';
import Aux from '../../hoc/Aux.jsx';
import Toolbar from '../Navigation/Toolbar/Toolbar.jsx';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer.jsx';
import styles from './Layout.scss';

const layout = (props) => {
    return (
        <Aux>
            <Toolbar className={styles.Toolbar}/>
            <SideDrawer />
            <main className={styles.content}>
                {props.children}
            </main>
        </Aux>
    )
};

export default layout;