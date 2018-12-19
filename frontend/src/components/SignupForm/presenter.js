import React from 'react';
import styles from "components/Auth/style.module.scss";

const SignupForm = (props, context) =>(
    <div>
        <div className={styles.whiteBox}>
            <strong className={styles.tit}>Jevtagram</strong>
            <fieldset>
                <form>
                    <div className={styles.inputSet}>
                        <input type="text" placeholder="Email" />
                        <input type="text" placeholder="Full Name" />
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="password" />
                    </div>
                    <button type="submit" className={styles.btnLogin}>회원가입</button>
                </form>
            </fieldset>
        </div>
    </div>
);

export default SignupForm;