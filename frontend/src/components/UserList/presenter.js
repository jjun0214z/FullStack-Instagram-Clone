import React from 'react';
import PropTypes from 'prop-types';
import styles from "./style.module.scss";
import Loading from "components/Loading";
import Ionicon from "react-ionicons";

const UserList = (props, context) => (
    <div className={styles.userList}>
        <div className={styles.popupWrap}>
            <div className={styles.head}>
                <strong className={styles.title}>{props.title}</strong>
                <button 
                    className={styles.btnClose}
                    type="button" 
                    onClick={props.closeLikes}
                ><Ionicon icon="md-close" fontSize="20px" color="black" /></button>
            </div>
            <div className={styles.content}>{props.loading ? <Loading /> : null}</div>
        </div>
    </div>
);

UserList.propTypes = {
    title: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    users: PropTypes.array,
    closeLikes: PropTypes.func.isRequired
}

export default UserList;