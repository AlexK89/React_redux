import React from 'react';
import styles from './Modal.scss';
import Aux from '../../../hoc/Aux.jsx';
import Backdrop from '../Backdrop/Backdrop.jsx';

export class Modal extends React.Component {
    shouldComponentUpdate(nextProps, nestState) {
        return nextProps.show !== this.props.show;
    }

    componentWillUpdate() {
        console.log('modal will update');
    }

    render() {
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div className={`${styles.Modal} ${this.props.show ? styles.list_visible : '  '}`}>
                    {this.props.children}
                </div>
            </Aux>
        )
    }
}

export default Modal;