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
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your Email'
                },
                value: ''
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Street'
                },
                value: ''
            },
            postcode: {
                elementType: 'input',
                elementConfig: {
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
                value: ''
            }
        },
        loading: false
    };

    saveOrderHandler = (event) => {
        event.preventDefault();
        console.log('customer: ', this.state.customerForm);

        const order = {
            ingredients: this.props.ingredients,
            totalPrice: this.props.totalPrice,
            customerForm: {
                ...this.state.customerForm
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

    submitFormHandler = (event) => {
        const newState = JSON.parse(JSON.stringify(this.state));
        newState['customerForm'][event.target.name] = event.target.value;

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
                                key={item.id}
                                elementType={item.config.elementType}
                                elementConfig={item.config.elementConfig}
                                value={item.config.elementConfig.value}/>
                        )
                    })
                }
                <Button type="submit" btnType="success small"> Submit </Button>
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