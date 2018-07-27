import React from 'react';
import Aux from '../../hoc/Aux.jsx';
import Toolbar from '../Navigation/Toolbar/Toolbar.jsx';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer.jsx';
import styles from './Layout.scss';

export class Layout extends React.Component {
    state = {
        showSideDrawer: true
    };

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    };

    render() {
        return (
            <Aux>
                <Toolbar className={styles.Toolbar}/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
                <main className={styles.content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;