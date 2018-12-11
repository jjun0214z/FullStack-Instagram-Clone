import React from 'react';
import Ionicon from 'react-ionicons';
import styles from "./style.module.scss";

const Auth = (porps, context) => (
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
                {(() => {
                    switch (porps.action) {
                        case "login":
                            return (
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
                                            계정이 없으신가요? <button onClick={porps.changeAction} className={styles.btnJoinus}>가입하기</button>
                                        </p>
                                    </div>
                                </div>
                            );
                        case "signup":
                            return (
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
                                            <button className={styles.btnLogin}>로그인</button>
                                        </fieldset>
                                    </div>
                                    <div className={styles.whiteBox}>
                                        <p className={styles.noAccount}>
                                            계정이 있으신가요? <button onClick={porps.changeAction} className={styles.btnJoinus}>로그인</button>
                                        </p>
                                    </div>
                                </div>
                            );
                        default:
                            break;
                    }                    
                })()}
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