import React from 'react';
import Ionicon from 'react-ionicons';
import styles from "components/Auth/style.module.scss";

const LoginForm = (props, context) =>(
    <div>
        <div className={styles.whiteBox}>
            <strong className={styles.tit}>Jevtagram</strong>
            <fieldset>
                <div className={styles.inputSet}>
                    <input type="text" placeholder="Tel, Username or email" />
                    <input type="password" placeholder="password" />
                </div>
                <button className={styles.btnLogin}>로그인</button>
            </fieldset>
            <div className={styles.facebookLogin}>
                <p>또는</p>
                <button className={styles.btnFbLogin}>
                    <span><Ionicon icon="logo-facebook" fontSize="20px" color="#385185" /></span>
                    Facebook으로 로그인
                </button>
            </div>
            <div className={styles.btnArea}>
                <button className={styles.btnForgot}>비밀번호를 잊으셨나요?</button>
            </div>
        </div>
        <div className={styles.whiteBox}>
            <p className={styles.noAccount}>
                계정이 없으신가요? <button onClick={props.changeAction} className={styles.btnJoinus}>가입하기</button>
            </p>
        </div>
    </div>
);

export default LoginForm;