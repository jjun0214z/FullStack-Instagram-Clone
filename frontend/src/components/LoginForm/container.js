import React, { Component } from 'react'
import Proptypes from "prop-types";
import LoginForm from './presenter';

class Container extends Component {
    state = {
        username: "",
        password: ""
    };

    static propTypes = {
        facebookLogin: Proptypes.func.isRequired
    }

    render() {
        const { username, password } = this.state;

        return (
            <LoginForm
                usernameValue={username} 
                passwordValue={password} 
                handleInputChange = {this._handleInputChange}
                handleSubmit = {this._handleSubmit}
                handleFacebookLogin = {this._handleFacebookLogin}
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
        event.preventDefault();
    };
    _handleFacebookLogin = response => {
        const { facebookLogin } = this.state;
        facebookLogin(response.accessToken);
    }
}

export default Container;