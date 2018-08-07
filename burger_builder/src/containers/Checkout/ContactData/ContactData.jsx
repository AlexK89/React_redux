import React from 'react';
import axios from 'axios';
import axiosInstance from '../../../hoc/axios-orders';
import Button from '../../../components/UI/Button/Button.jsx';
import styles from './ContactData.scss';

class ContactData extends React.Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postCode: ''
        },
        loading: false
    };

    saveOrderHandler = (event) => {
        event.preventDefault();
        const order = {
            ingredients: this.state.ingredients,
            totalPrice: this.state.totalPrice,
            customer: {
                name: 'Alex',
                address: {
                    street: 'Bristol Road',
                    zipCode: '11111',
                    country: 'England'
                },
                emailAddress: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        };

        this.setState({loading: true});

        axiosInstance.post('/orders.json', order)
            .then(response => {
                this.setState({
                    loading: false,
                    purchasing: false
                });
            })
            .catch(error => {
                this.setState({
                    loading: false,
                    purchasing: false
                });
            });
    };

    render() {
        console.log("contact data", this.props);
        return (
            <div className={styles.form}>
                <h3>Enter your contact details</h3>
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
                </form>
            </div>
        )
    }
}

export default ContactData;