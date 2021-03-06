import React from 'react';
import Proptypes from 'prop-types';
import Ionicon from "react-ionicons";
import styles from "./style.module.scss";

const PhotoActions = (props, context) => {
    return (
        <div className={styles.photoActions}>
            <div className={styles.icons}>
                <div className={styles.icon} onClick={props.handleHeartClick}>
                    {props.isLiked ? (
                        <Ionicon icon="ios-heart" fontSize="28px" color="#EB4B59" />
                    ) : (
                        <Ionicon icon="ios-heart-outline" fontSize="28px" color="black" />
                    )}
                </div>
                <div className={styles.icon}>
                    <Ionicon icon="ios-text-outline" fontSize="28px" color="black" />
                </div>
            </div>
            <p className={styles.txtLike} onClick={props.openLikes}>
                {props.number} { props.number === 1 ? "like" : "likes" }
            </p>
        </div>
    );
};

PhotoActions.proptypes = {
    number: Proptypes.number.isRequired,
    isLiked: Proptypes.bool.isRequired,
    photoId: Proptypes.number.isRequired,
    handleHeartClick : Proptypes.func.isRequired,
    openLikes: Proptypes.func.isRequired
}

export default PhotoActions;