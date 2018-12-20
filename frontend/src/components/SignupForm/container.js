import React, { Component } from 'react';
import Proptypes from "prop-types";
import SignupForm from './presenter';

class Container extends Component {
    state = {
        email: "",
        name: "",
        username: "",
        password: ""
    };

    static propTypes = {
        createAccount: Proptypes.func.isRequired
    }

    render() {
        const { 
            email,
            name,
            username,
            password
        } = this.state;

        return (
            <SignupForm 
                emailValue={email}
                nameValue={name}
                usernameValue={username}
                passwordValue={password}
                handleInputChange = {this._handleInputChange}
                handleSubmit = {this._handleSubmit}
            />
        );
    }

    _handleInputChange = event => {
        const { target: { value, name } } = event;
        this.setState({
            [name]: value
        });
    };
    _handleSubmit = event => {
        const { createAccount } = this.props;
        const { username, password, email, name } = this.state;

        event.preventDefault();
        createAccount(username, password, email, name);
    };
}

export default Container;