import React from 'react';
import Proptypes from 'prop-types';
import styles from "components/Auth/style.module.scss";

const SignupForm = (props, context) =>(
    <div className={styles.whiteBox}>
        <strong className={styles.tit}>Jevtagram</strong>
        <fieldset>
            <form onSubmit={props.handleSubmit}>
                <div className={styles.inputSet}>
                    <input
                        type="text"
                        placeholder="Email"
                        value={props.emailValue}
                        name="email"
                        onChange={props.handleInputChange}
                    />
                    <input
                        type="text"
                        placeholder="Full Name"
                        value={props.fullnameValue}
                        name="fullname"
                        onChange={props.handleInputChange}
                    />
                    <input
                        type="text"
                        placeholder="Username"
                        value={props.usernameValue}
                        name="username"
                        onChange={props.handleInputChange}
                    />
                    <input
                        type="password"
                        placeholder="password"
                        value={props.passwordValue}
                        name="password"
                        onChange={props.handleInputChange}
                    />
                </div>
                <button type="submit" className={styles.btnLogin}>회원가입</button>
            </form>
        </fieldset>
    </div>
);

SignupForm.proptypes = {
    emailValue: Proptypes.string.isRequired,
    fullnameValue: Proptypes.string.isRequired,
    usernameValue: Proptypes.string.isRequired,
    passwordValue: Proptypes.string.isRequired,
    handleInputChange: Proptypes.func.isRequired,
    handleSubmit: Proptypes.func.isRequired
};

export default SignupForm;