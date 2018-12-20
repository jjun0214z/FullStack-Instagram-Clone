import React from 'react';
import Proptypes from 'prop-types';
import FacebookLogin from 'react-facebook-login'
import styles from "components/Auth/style.module.scss";

const LoginForm = (props, context) =>(
    <div className={styles.whiteBox}>
        <strong className={styles.tit}>Jevtagram</strong>
        <fieldset>
            <form onSubmit={props.handleSubmit}>
                <div className={styles.inputSet}>
                    <input 
                        type="text" 
                        placeholder="Username" 
                        value={props.usernameValue}
                        name="username"
                        onChange={props.handleInputChange}
                    />
                    <input 
                        type="password" 
                        placeholder="Password"
                        value={props.passwordValue}
                        name="password"
                        onChange={props.handleInputChange}
                    />
                </div>
                <button type="submit" className={styles.btnLogin}>로그인</button>
            </form>
        </fieldset>
        <div className={styles.facebookLogin}>
            <p>또는</p>
            <FacebookLogin
                appId="2240951062811644"
                autoLoad={false}
                fields="name,email,picture"
                callback={props.handleFacebookLogin}
                cssClass={styles.btnFbLogin}
                icon="fa-facebook-official"
                textButton="Facebook으로 로그인"
            />
        </div>
        <div className={styles.btnArea}>
            <button className={styles.btnForgot}>비밀번호를 잊으셨나요?</button>
        </div>
    </div>
);
 
LoginForm.propTypes = {
    usernameValue: Proptypes.string.isRequired,
    passwordValue: Proptypes.string.isRequired,
    handleInputChange: Proptypes.func.isRequired,
    handleSubmit: Proptypes.func.isRequired,
    handleFacebookLogin: Proptypes.func.isRequired
};

export default LoginForm;