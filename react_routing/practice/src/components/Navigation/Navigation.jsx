import React from 'react';
import "./Navigation.css";

import {NavLink} from 'react-router-dom';

const navigation = () => {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <NavLink to="/courses">Courses</NavLink>
                </li>
                <li>
                    <NavLink to="/users">Users</NavLink>
                </li>
            </ul>
        </nav>
    )
};

export default navigation;