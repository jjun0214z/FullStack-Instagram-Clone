import React from 'react';
//import Proptypes from 'prop-types';
import Ionicon from "react-ionicons";
import { Link } from "react-router-dom";
import styles from "./style.module.scss";

const Navigation = (props, context) =>(
    <div className={styles.Navigation}>
        <div className={styles.column}>
            <div className={styles.logo}>
                <Link to="/">
                    <Ionicon icon="logo-instagram" fontSize="28px" color="black" />
                </Link>
            </div>
        </div>
        <div className={styles.column}>
            <input
                type="text"
                placeholder="Search"
                className={styles.searchInput}
            />
        </div>
        <div className={styles.column}>
            <div className={styles.naviIcons}>
                <div className={styles.naviIcon}>
                    <Link to="/explore">
                        <Ionicon icon="ios-compass-outline" fontSize="28px" color="black" />
                    </Link>
                </div>
                <div className={styles.naviIcon}>
                    <Ionicon icon="ios-heart-outline" fontSize="28px" color="black" />
                </div>
                <div className={styles.naviIcon}>
                    <Link to="/profile">
                        <Ionicon icon="ios-person-outline" fontSize="28px" color="black" />
                    </Link>
                </div>
            </div>
        </div>
    </div>
);

// Navigation.proptypes = {
    
// };

export default Navigation;