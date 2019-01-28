import React from 'react';
import Proptypes from 'prop-types';
import styles from "./style.module.scss";
import Loading from "components/Loading";
import UserRow from "components/UserRow";

const Explore = (props, context) => {
    if ( props.loading ) {
        return <LodingExplore/>;
    }else if( props.userList ){
        return <RenderExplore {...props} />;
    }
};

const LodingExplore = (props, context) => (
    <div className={styles.userList}>
        <Loading />
    </div>
);

const RenderExplore = (props, context) => (
    <div className={styles.userList}>
        {props.userList.map(user => <UserRow user={user} key={user.id} />)}
    </div>
);

Explore.proptypes = {
    loading: Proptypes.bool.isRequired        
};

export default Explore;