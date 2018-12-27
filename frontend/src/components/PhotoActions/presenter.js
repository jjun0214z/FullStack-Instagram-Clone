import React from 'react';
import Proptypes from 'prop-types';
import Ionicon from "react-ionicons";
import styles from "./style.module.scss";

const PhotoActions = (props, context) => {
    return (
        <div className={styles.photoActions}>
            <div className={styles.icons}>
                <div className={styles.icon}>
                    <Ionicon icon="ios-heart-outline" fontSize="28px" color="black" />
                </div>
                <div className={styles.icon}>
                    <Ionicon icon="ios-text-outline" fontSize="28px" color="black" />
                </div>
            </div>
            <p className={styles.txtLike}>
                {props.number} { props.number === 1 ? "like" : "likes" }
            </p>
        </div>
    );
};

PhotoActions.proptypes = {
    number: Proptypes.number.isRequired
}

export default PhotoActions;