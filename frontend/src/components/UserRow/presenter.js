import React from 'react';
import PropTypes from 'prop-types';
import styles from "./style.module.scss";

const UserRow = (props, context) => (
    <div className={styles.userRow}>
        <div className={styles.userInfo}>
            <div className={styles.profile}>
                <img
                    src={props.user.profile_image || require("images/img_noprofile.jpg")}
                    alt={props.user.username}
                    className={styles.avatar}
                />
            </div>
            <p className={styles.name}>{props.user.name}</p>
        </div>
        <div className={styles.btnArea}>
            <button className={styles.button} onClick={props.handleClick}>
                { props.user.following ? 'UnFollow' : 'Follow' }
            </button>
        </div>
    </div>
);

UserRow.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        profile_image: PropTypes.string,
        username: PropTypes.string.isRequired,
        name: PropTypes.string,
        following: PropTypes.bool.isRequired,
    }).isRequired,
    handleClick: PropTypes.func.isRequired
};

export default UserRow;