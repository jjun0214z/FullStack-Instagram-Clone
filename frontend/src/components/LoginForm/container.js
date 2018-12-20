import React, { Component } from 'react'
import Proptypes from "prop-types";
import LoginForm from './presenter';

class Container extends Component {
    state = {
        username: "",
        password: ""
    };

    static propTypes = {
        facebookLogin: Proptypes.func.isRequired,
        usernameLogin: Proptypes.func.isRequired
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
        const { usernameLogin } = this.props;
        const { username, password } = this.state;

        event.preventDefault();
        usernameLogin(username, password);
    };
    _handleFacebookLogin = response => {
        const { facebookLogin } = this.props;
        facebookLogin(response.accessToken);
    }
}

export default Container;