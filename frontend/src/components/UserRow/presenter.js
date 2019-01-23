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
            <button className={styles.button}>Follow</button>
        </div>
    </div>
);

UserRow.propTypes = {
    user: PropTypes.shape({
        profile_image: PropTypes.string,
        username: PropTypes.string.isRequired,
        name: PropTypes.string
    }).isRequired,
};

export default UserRow;