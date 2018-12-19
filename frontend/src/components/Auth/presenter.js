import React from 'react';
import styles from "./style.module.scss";
import LoginForm from 'components/LoginForm';
import SignupForm from 'components/SignupForm';

const Auth = (props, context) => (
    <div className={styles.loginview}>
        <div className={styles.column}>
            <ul className={styles.imgList}>
                <li><img src={require("images/img_display_1.jpg")} alt="" /></li>
                <li><img src={require("images/img_display_2.jpg")} alt="" /></li>
                <li><img src={require("images/img_display_3.jpg")} alt="" /></li>
                <li><img src={require("images/img_display_4.jpg")} alt="" /></li>
                <li><img src={require("images/img_display_5.jpg")} alt="" /></li>
            </ul>
        </div>
        <div className={styles.column}>
            <div className={styles.loginArea}>
                {props.action === "login" && <LoginForm action={props.action} changeAction={props.changeAction} />}
                {props.action === "signup" && <SignupForm action={props.action} changeAction={props.changeAction} />}
                {props.action === "login" && (
                    <div className={styles.whiteBox}>
                        <p className={styles.noAccount}>
                            {console.log(props.changeAction)}
                            계정이 없으신가요? <button onClick={props.changeAction} className={styles.btnJoinus}>가입하기</button>
                        </p>
                    </div>
                )}
                {props.action === "signup" && (
                    <div className={styles.whiteBox}>
                        <p className={styles.noAccount}>
                            계정이 있으신가요? <button onClick={props.changeAction} className={styles.btnJoinus}>로그인</button>
                        </p>
                    </div>
                )}
                <div className={styles.appDownload}>
                    <p>앱을 다운로드 하세요</p>
                    <div className={styles.appBanner}>
                        <button><img src={require("images/img_appstore.png")} alt="" /></button>
                        <button><img src={require("images/img_googleplay.png")} alt="" /></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Auth;