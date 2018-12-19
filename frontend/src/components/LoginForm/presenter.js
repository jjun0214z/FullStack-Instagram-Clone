import React from 'react';
import Ionicon from 'react-ionicons';
import Proptypes from 'prop-types';
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
            <button type="submit" className={styles.btnFbLogin}>
                <span><Ionicon icon="logo-facebook" fontSize="20px" color="#385185" /></span>
                Facebook으로 로그인
            </button>
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
    handleSubmit: Proptypes.func.isRequired
};

export default LoginForm;