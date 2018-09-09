import React, {Component} from 'react';

export class FormPage extends Component {
    state = {
      form: {
          yourDetails: {
              title: 'default',
              firstName: '',
              lastName: '',
          },
          yourBusiness: {
              employeeErn: '',
              ernNotice: false,
              premisesAddress: ''
          }
      }
    };

    // YourDetails Handler
    formYourDetailsHandler = (event) => {
        let form = {...this.state.form};
        let target = event.target;
        form.yourDetails[target.id] = event.target.value;

        this.setState({form})
    };

    // YourBusiness Handler
    formYourBusinessHandler = (event) => {
        let form = {...this.state.form};
        let target = event.target;

        // Checkbox handler
        form.yourBusiness[target.id] = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({form})
    };

    render() {
        console.log(this.state);
        return (
            <div className="form_page">
                <div className="header">
                    <h1 className="header__title">{this.props.formPageText.title}</h1>
                    <p className="header__description">{this.props.formPageText.description}</p>
                </div>
                <div className="form">
                    <form action="#">
                        <fieldset>
                            <legend>Your details</legend>
                            <div className="title">
                                <label htmlFor="title">Title</label>
                                <select value={this.state.form.yourDetails.title} onChange={this.formYourDetailsHandler} name="title" id="title">
                                    <option value="default" disabled hidden>Choose here</option>
                                    <option value="Mr">Mr</option>
                                    <option value="Ms">Ms</option>
                                    <option value="Mrs">Mrs</option>
                                </select>
                            </div>
                            <div className="first_name">
                                <label htmlFor="firstName">First name</label>
                                <input type="text" id="firstName"
                                       value={this.state.form.yourDetails.firstName}
                                       onChange={this.formYourDetailsHandler}/>
                            </div>
                            <div className="last_name">
                                <label htmlFor="lastName">Last name</label>
                                <input type="text" id="lastName"
                                       value={this.state.form.yourDetails.lastName}
                                       onChange={this.formYourDetailsHandler}/>
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend>Your business</legend>
                            <div className="employee_ern">
                                <label htmlFor="employeeErn">Employee ERN</label>
                                <input type="text" id="employeeErn"
                                       value={this.state.form.yourBusiness.employeeErn}
                                       onChange={this.formYourBusinessHandler}/>
                            </div>
                            <div className="ern_notice">
                                <input type="checkbox" id="ernNotice"
                                       value={this.state.form.yourBusiness.ernNotice}
                                       onChange={this.formYourBusinessHandler}/>
                                <label htmlFor="ernNotice">{this.props.formPageText.ErnNotice}</label>
                            </div>
                            <div className="premises_address">
                                <label htmlFor="premisesAddress">Premises address</label>
                                <textarea rows="4" cols="30" id="premisesAddress"
                                          value={this.state.form.yourBusiness.premisesAddress}
                                          onChange={this.formYourBusinessHandler}/>
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend>Your policy</legend>
                            <div className="policy_date">
                                <label htmlFor="policyDate">Policy start date</label>
                                <textarea rows="4" cols="30" id="policyDate"/>
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend>Your account</legend>
                            <div className="account_password">
                                <label htmlFor="accountPassword">Account password</label>
                                <input type="password" id="accountPassword"/>
                            </div>
                            <div className="account_password_conf">
                                <label htmlFor="accountPasswordConf">Confirm account password</label>
                                <input type="password" id="accountPasswordConf"/>
                            </div>
                        </fieldset>
                        <div className="submit">
                            <div className="submit_details">
                                <h6>Total premium</h6>
                                <h2>£222</h2>
                                <h6>per month. 0% APR, Tax Inc.</h6>
                            </div>
                            <div className="submit_button">
                                <button type="submit">Confirm</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default FormPage;