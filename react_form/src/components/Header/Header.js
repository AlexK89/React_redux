import React, {Component} from 'react';
import logo from '../../assets/img/logo.png';

class Header extends Component {
    state = {
        telephone: '0333 772 0792'
    };

    // Format phone number
    formattedPhoneNumber = (number) => {
        return number.replace(/(\d{4})(\d{3})(\d{3})/, "$1 $2 $3");
    };

    render() {
        return (
            <div className="header">
                <div className="header__logo">Logo</div>
                <div className="header__contacts">
                    <p>Contact us on <a href={`tel:${this.state.telephone}`}>{this.formattedPhoneNumber(this.state.telephone)}</a></p>
                </div>
            </div>
        );
    }
}

export default Header;