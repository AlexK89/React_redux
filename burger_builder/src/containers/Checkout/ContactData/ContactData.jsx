import React from 'react';
import axiosInstance from '../../../hoc/axios-orders';
import Button from '../../../components/UI/Button/Button.jsx';
import Spinner from '../../../components/UI/Spinner/Spinner.jsx';
import FormInput from '../../../components/Order/Form/FormInput.jsx';
import styles from './ContactData.scss';
import { connect } from 'react-redux';

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
                    required: true,
                    valid: false
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
                    required: true,
                    valid: false
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
                    required: true,
                    valid: false
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
                validation: {
                    required: true,
                    valid: false
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
                validation: {
                    required: false,
                    valid: true
                },
                value: 'fastest'
            }
        },
        loading: false,
        allowSubmitForm: false
    };

    checkValidity = (value, rules) => {
        let isValid = true;

        (rules.required) ? (isValid = value.trim() !== '') : false;

        return isValid;
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

        newState['customerForm'][id].validation.valid = this.checkValidity(event.target.value, newState['customerForm'][id].validation);
        this.setState({
            ...newState
        }, () => {
            this.allowSubmitForm();
        });
    };

    allowSubmitForm = () => {
      for (let input in this.state.customerForm) {
          if (!this.state.customerForm[input].validation.valid) {
              return this.setState({allowSubmitForm: false});
          } else {
              this.setState({allowSubmitForm: true});
          }
      }
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
                <Button type="submit" btnType="success small" disabled={!this.state.allowSubmitForm}> Submit </Button>
            </form>;

        return (
            <div className={styles.form}>
                <h3>Enter your contact details</h3>
                {form}
            </div>
        )
    }
}

const mapStateToProps = state => {
  return {
      ...state
  }
};

export default connect(mapStateToProps)(ContactData);