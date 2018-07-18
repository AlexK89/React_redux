import React from 'react';
import Aux from '../../hoc/Aux.jsx';
import styles from './Layout.scss';

const layout = (props) => {
    return (
        <Aux>
            <div>Toolbar, SideDrawer, Backdrop</div>
            <main className={styles.content}>
                {props.children}
            </main>
        </Aux>
    )
};

export default layout;