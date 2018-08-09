import React from 'react';
import axiosInstance from '../../../hoc/axios-orders';
import Button from '../../../components/UI/Button/Button.jsx';
import Spinner from '../../../components/UI/Spinner/Spinner.jsx';
import FormInput from '../../../components/Order/Form/FormInput.jsx';
import styles from './ContactData.scss';

class ContactData extends React.Component {
    state = {
        customerForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    name: 'name',
                    type: 'text',
                    placeholder: 'Your Name'
                },
                validation: {
                    required: true
                },
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    name: 'email',
                    type: 'email',
                    placeholder: 'Your Email'
                },
                validation: {
                    required: true
                },
                value: ''
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    name: 'street',
                    type: 'text',
                    placeholder: 'Your Street'
                },
                validation: {
                    required: true
                },
                value: ''
            },
            postcode: {
                elementType: 'input',
                elementConfig: {
                    name: 'postcode',
                    type: 'text',
                    placeholder: 'Your Postcode'
                },
                value: ''
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    type: 'select',
                    options: [
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'cheapest', displayValue: 'Cheapest'}
                    ]
                },
                value: 'fastest'
            }
        },
        loading: false,
        submitForm: true
    };

    saveOrderHandler = (event) => {
        event.preventDefault();
        let customerData = {};

        for (let value in this.state.customerForm) {
            customerData[value] = this.state.customerForm[value].value
        }

        console.log('customer: ', customerData);

        const order = {
            ingredients: this.props.ingredients,
            totalPrice: this.props.totalPrice,
            customerForm: {
                ...this.state.customerForm
            }
        };

        this.setState({loading: true});

        axiosInstance.post('/orders.json', order)
            .then(() => {
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

    updateStateInputValues = (event, id) => {
        const newState = JSON.parse(JSON.stringify(this.state));
        if (event.target.value) {
            newState['customerForm'][id]['value'] = event.target.value;
        }

        this.setState({
            ...newState
        })
    };

    render() {
        const formInput = [];
        for (let key in this.state.customerForm) {

            formInput.push({
                id: key,
                config: this.state.customerForm[key]
            });
        }

        let form = (this.state.loading) ?
            <Spinner/> :
            <form onSubmit={this.saveOrderHandler}>
                {
                    formInput.map((item) => {
                        return (
                            <FormInput
                                updateStateInputValues={(event) => this.updateStateInputValues(event, item.id)}
                                key={item.id}
                                elementType={item.config.elementType}
                                elementConfig={item.config.elementConfig}
                                value={item.config.elementConfig.value}/>
                        )
                    })
                }
                <Button type="submit" btnType="success small" disabled={!this.state.submitForm}> Submit </Button>
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