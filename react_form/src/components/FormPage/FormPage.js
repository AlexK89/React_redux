import React, {Component} from 'react';

export class FormPage extends Component {
    state = {
        form: {
            title: 'default',
            first_name: '',
            last_name: '',
            ern: '',
            ern_exempt: false,
            address: '',
            policy_start_date: '',
            password: '',
        },
        formReadyToSubmit: false
    };

    // Input Handler
    formInputHandler = (event) => {
        let form = {...this.state.form};
        let target = event.target;

        // Checkbox handler
        form[target.id] = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({form})
    };

    submitFormHandler = (event) => {
        event.preventDefault();
        let emptyInputFound = this.readObject(this.state.form);
        let passwordCheck = this.state.form.password === document.getElementById('confirmPassword').value;

        if (!emptyInputFound && passwordCheck) {
            this.setState({formReadyToSubmit: true});
            // console.log(JSON.stringify(this.state.form));

            // fetch('https://dr-frontend-test-api.herokuapp.com/api/accounts', {
            //     method: 'POST',
            //     headers: {
            //         'Accept': 'application/json'
            //     },
            //     body: JSON.stringify(this.state.form),
            // })
            //     .then(response => response.json())
            //     .then(data => console.log(data));
        }
    };

    // look for empty input inside object
    readObject = (obj, flag = false) => {
        let emptyInputFound = flag;

        for (let key in obj) {
            if (typeof(obj[key]) === 'object') {
                emptyInputFound = this.readObject(obj[key], emptyInputFound);
            } else {
                if (!obj[key]) {
                    emptyInputFound = true;
                }
            }
        }

        return emptyInputFound;
    };

    render() {
        const form = (
            <div className="form">
                <form onSubmit={this.submitFormHandler}>
                    <fieldset>
                        <legend>Your details</legend>
                        <div className="title">
                            <label htmlFor="title">Title</label>
                            <select name="title" id="title"
                                    value={this.state.form.title}
                                    onChange={this.formInputHandler}>
                                <option value="default" disabled hidden>Choose here</option>
                                <option value="Mr">Mr</option>
                                <option value="Ms">Ms</option>
                                <option value="Mrs">Mrs</option>
                            </select>
                        </div>
                        <div className="first_name">
                            <label htmlFor="firstName">First name</label>
                            <input type="text" id="first_name"
                                   value={this.state.form.first_name}
                                   onChange={this.formInputHandler}/>
                        </div>
                        <div className="last_name">
                            <label htmlFor="lastName">Last name</label>
                            <input type="text" id="last_name"
                                   value={this.state.form.last_name}
                                   onChange={this.formInputHandler}/>
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Your business</legend>
                        <div className="employee_ern">
                            <label htmlFor="employeeErn">Employee ERN</label>
                            <input type="text" id="ern"
                                   value={this.state.form.ern}
                                   onChange={this.formInputHandler}/>
                        </div>
                        <div className="ern_notice">
                            <input type="checkbox" id="ern_exempt"
                                   value={this.state.form.ern_exempt}
                                   onChange={this.formInputHandler}/>
                            <label htmlFor="ernNotice">{this.props.formPageText.ErnNotice}</label>
                        </div>
                        <div className="premises_address">
                            <label htmlFor="premisesAddress">Premises address</label>
                            <textarea rows="4" cols="30" id="address"
                                      value={this.state.form.address}
                                      onChange={this.formInputHandler}/>
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Your policy</legend>
                        <div className="policy_date">
                            <label htmlFor="policyDate">Policy start date</label>
                            <input type="date" id="policy_start_date"
                                   value={this.state.form.policy_start_date}
                                   onChange={this.formInputHandler}/>
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Your account</legend>
                        <div className="account_password">
                            <label htmlFor="accountPassword">Account password</label>
                            <input type="password" id="password"
                                   value={this.state.form.password}
                                   onChange={this.formInputHandler}/>
                        </div>
                        <div className="account_password_conf">
                            <label htmlFor="accountPasswordConf">Confirm account password</label>
                            <input type="password" id="confirmPassword"/>
                        </div>
                    </fieldset>
                    <div className="submit">
                        <div className="submit_details">
                            <h6>Total premium</h6>
                            <h2>{this.props.totalPrice ? this.props.totalPrice : "£1"}</h2>
                            <h6>per month. 0% APR, Tax Inc.</h6>
                        </div>
                        <div className="submit_button">
                            <button type="submit">Confirm</button>
                        </div>
                    </div>
                </form>
            </div>
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