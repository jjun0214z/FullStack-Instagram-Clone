import React from 'react';
import styles from "components/Auth/style.module.scss";

const SignupForm = (props, context) =>(
    <div>
        <div className={styles.whiteBox}>
            <strong className={styles.tit}>Jevtagram</strong>
            <fieldset>
                <div className={styles.inputSet}>
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Full Name" />
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="password" />
                </div>
                <button className={styles.btnLogin}>회원가입</button>
            </fieldset>
        </div>
        <div className={styles.whiteBox}>
            <p className={styles.noAccount}>
                계정이 있으신가요? <button onClick={props.changeAction} className={styles.btnJoinus}>로그인</button>
            </p>
        </div>
    </div>
);

export default SignupForm;