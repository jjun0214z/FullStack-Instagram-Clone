import React, { Component } from 'react';
import CommentBox from './presenter';

class Container extends Component {
    state = {
        comment: ""
    }

    render() {
        return (
            <CommentBox 
                {...this.state}
                handleInputChanage = {this._handleInputChanage}
                handleKeyPress = {this._handleKeyPress}
            />
        );
    }

    _handleInputChanage = event => {
        const { target: { value } } = event;

        this.setState({
            comment: value
        });
    }

    _handleKeyPress = event => {
        const { key } = event;
        const { submitComment } = this.props;
        const { comment } = this.state;
        if ( key === 'Enter' ) {
            event.preventDefault();
            submitComment(comment);
        }
    }
};

export default Container;