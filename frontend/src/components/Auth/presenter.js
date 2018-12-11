import React from 'react';
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
                            
                            break;
                    
                        default:
                            break;
                    }                    
                })()}
                <div className={styles.whiteBox}>
                    <strong className={styles.tit}>Jevtagram</strong>
                    <fieldset>
                        <div className={styles.inputSet}>
                            <input type="text" placeholder="전화번호, 사용자 이름 또는 이메일" />
                            <input type="password" placeholder="비밀번호" />
                        </div>
                        <button className={styles.btnLogin}>로그인</button>
                    </fieldset>
                </div>
                <div className={styles.whiteBox}>
                    <p className={styles.noAccount}>
                        계정이 없으신가요? <button className={styles.btnJoinus}>가입하기</button>
                    </p>
                </div>
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