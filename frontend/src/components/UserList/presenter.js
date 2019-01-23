import React from 'react';
import PropTypes from 'prop-types';
import styles from "./style.module.scss";
import Loading from "components/Loading";
import Ionicon from "react-ionicons";
import UserRow from "components/UserRow";

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
            <div className={styles.content}>{props.loading ? <Loading /> : <RenderUsers list={props.userList} />}</div>
        </div>
    </div>
);

const RenderUsers = props =>
    props.list.map(user => <UserRow user={user} key={user.id} />);

RenderUsers.propTypes = {
    list: PropTypes.array
};

UserList.propTypes = {
    title: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    users: PropTypes.array,
    closeLikes: PropTypes.func.isRequired,
    userList: PropTypes.array
}

export default UserList;