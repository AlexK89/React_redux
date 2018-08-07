import React from 'react';
import axiosInstance from '../../../hoc/axios-orders';
import Button from '../../../components/UI/Button/Button.jsx';
import Spinner from '../../../components/UI/Spinner/Spinner.jsx';
import styles from './ContactData.scss';

class ContactData extends React.Component {
    state = {
        customer: {
            name: '',
            email: '',
            address: {
                street: '',
                postCode: ''
            }
        },
        loading: false
    };

    saveOrderHandler = (event) => {
        event.preventDefault();
        const order = {
            ingredients: this.props.ingredients,
            totalPrice: this.props.totalPrice,
            customer: {
                ...this.state.customer
            },
            deliveryMethod: 'fastest'
        };

        this.setState({loading: true});

        axiosInstance.post('/orders.json', order)
            .then(response => {
                this.setState({
                    loading: false
                });
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({
                    loading: false
                });
            });
    };

    render() {
        console.log("contact data", this.props);
        let form = (this.state.loading) ?
            <Spinner/> :
            <form>
                <div className={styles.form__name}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id='name' placeholder={"Name"}/>
                </div>
                <div className={styles.form__email}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' placeholder={"Email"}/>
                </div>
                <p>Address</p>
                <div className={styles.form__address}>
                    <div className={styles.form__address__street}>
                        <label htmlFor="street">Street</label>
                        <input type="text" id='street' placeholder={"Street"}/>
                    </div>
                    <div className={styles.form__address__postcode}>
                        <label htmlFor="postcode">Postcode</label>
                        <input type="text" id='postcode' placeholder={"Post code"}/>
                    </div>
                </div>
                <Button type="submit" btnType="success small" click={this.saveOrderHandler}>Submit</Button>
            </form>;
        return (
            <div className={styles.form}>
                <h3>Enter your contact details</h3>
                {form}
            </div>
        )
    }
}

export default ContactData;