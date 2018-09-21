import React, {Component} from 'react';
import {Form, Text, Select, Checkbox, TextArea } from 'react-form';
import Password from './Password/Password';

export class FormPage extends Component {
    state = {
        form: {
            policy_start_date: '',
            password: ''
        },
        formReadyToSubmit: false,
    };

    // Input Handler
    formInputHandler = (data) => {
        let form = {
            ...this.state.form,
            ...data
        };

        this.setState({form})
    };

    // submitFormHandler = (event) => {
    //     event.preventDefault();
    //     let submitAllowed = this.readObject(this.state.form);
    //     let passwordCheck = this.state.form.password.value === document.getElementById('confirmPassword').value;
    //
    //     if (submitAllowed && passwordCheck) {
    //         this.setState({formReadyToSubmit: true});
    //
    //         return 'u34y53u4756'
    //     }
    // };

    render() {
        const selectOptions = [
            {
                label: 'Mr',
                value: 'Mr'
            },
            {
                label: 'Ms',
                value: 'Ms'
            },
            {
                label: 'Mrs',
                value: 'Mrs'
            },
        ];
        const validate = value => ({
            error: !value ? "Input is required'" : null
        });
        console.log('form', this.state.form);
        const form = (
            <Form onSubmit={form => this.formInputHandler(form)}>
                {
                    formApi => (
                        <form onSubmit={formApi.submitForm}>
                            {/*<Password field="password"/>*/}
                            {console.log(formApi)}
                            <fieldset>
                                <legend>Your details</legend>
                                <div className="title">
                                    <label htmlFor="title">Title</label>
                                    <Select field="title" id="title" options={selectOptions} validate={validate}/>
                                    <p style={{color: 'red'}}>{formApi.errors && formApi.errors.title}</p>
                                </div>
                                <div className="first_name">
                                    <label htmlFor="firstName">First name</label>
                                    <Text type="text" field="first_name" id="first_name" validate={validate}/>
                                    <p style={{color: 'red'}}>{formApi.errors && formApi.errors.first_name}</p>
                                </div>
                                <div className="last_name">
                                    <label htmlFor="lastName">Last name</label>
                                    <Text type="text" field="last_name" id="last_name" validate={validate}/>
                                    <p style={{color: 'red'}}>{formApi.errors && formApi.errors.last_name}</p>
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend>Your business</legend>
                                <div className="employee_ern">
                                    <label htmlFor="employeeErn">Employee ERN</label>
                                    <Text type="text" field="ern" id="ern" {...(!formApi.values.ern_exempt && {validate: validate}) }/>
                                    <p style={{color: 'red'}}>{(formApi.errors && !formApi.values.ern_exempt) && formApi.errors.ern}</p>
                                </div>
                                <div className="ern_notice">
                                    <Checkbox field="ern_exempt" id="ern_exempt" />
                                    <label htmlFor="ernNotice">{this.props.formPageText.ErnNotice}</label>
                                </div>
                                <div className="premises_address">
                                    <label htmlFor="premisesAddress">Premises address</label>
                                    <TextArea field={"address"} id="address" validate={validate}/>
                                    <p style={{color: 'red'}}>{formApi.errors && formApi.errors.address}</p>
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend>Your policy</legend>
                                <div className="policy_date">
                                    <label htmlFor="policyDate">Policy start date</label>
                                    <input type="date" id="policy_start_date"
                                           value={this.state.form.policy_start_date}
                                           onChange={event => this.formInputHandler({policy_start_date: event.target.value})}/>
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend>Your account</legend>
                                <div className="account_password">
                                    <label htmlFor="accountPassword">Account password</label>
                                    <input type="password" id="password"
                                           value={this.state.form.password}
                                           onChange={this.formInputHandler}/>
                                    <p className="error_message">Provide a password</p>
                                </div>
                                <div className="account_password_conf">
                                    <label htmlFor="accountPasswordConf">Confirm account password</label>
                                    <input type="password" id="confirmPassword"/>
                                </div>
                            </fieldset>
                            <div className="submit">
                                <div className="submit_details">
                                    <h6>Total premium</h6>
                                    <h2>{this.props.totalPrice ? this.props.totalPrice.value : "£1"}</h2>
                                    <h6>per month. 0% APR, Tax Inc.</h6>
                                </div>
                                <div className="submit_button">
                                    <button type="submit">Confirm</button>
                                </div>
                            </div>
                        </form>
                    )
                }
            </Form>
        );
        return (
            <div className="form_page">
                <div className="header">
                    <h1 className="header__title">{this.props.formPageText.title}</h1>
                    <p className="header__description">{this.props.formPageText.description}</p>
                </div>
                {
                    (!this.state.formReadyToSubmit) ? form : 'Thank you'
                }


            </div>
        );
    }
}

export default FormPage;