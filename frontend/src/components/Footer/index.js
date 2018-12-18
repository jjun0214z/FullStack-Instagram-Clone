import React from 'react';
import Proptypes from 'prop-types';
import styles from './style.module.scss';

const Footer = (props, context) => (
    <footer className={styles.footer}>
        <div className={styles.column}>
            <nav className={styles.nav}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>{context.t("About us")}</li>
                    <li className={styles.listItem}>{context.t("Support")}</li>
                    <li className={styles.listItem}>{context.t("Blog")}</li>
                    <li className={styles.listItem}>{context.t("Press")}</li>
                    <li className={styles.listItem}>{context.t("API")}</li>
                    <li className={styles.listItem}>{context.t("Jobs")}</li>
                    <li className={styles.listItem}>{context.t("Privacy")}</li>
                    <li className={styles.listItem}>{context.t("Terms")}</li>
                    <li className={styles.listItem}>{context.t("Directory")}</li>
                    <li className={styles.listItem}>{context.t("Language")}</li>
                </ul>
            </nav>
        </div>
        <div className={styles.column}>
            <span className={styles.copyright}>ⓒ 2018 jevtagram</span>
        </div>
    </footer>
);

console.dir(Footer);
Footer.contextTypes = {
    t: Proptypes.func.isRequired
};

export default Footer;
