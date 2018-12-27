import React from 'react';
import Proptypes from 'prop-types';
//import { Link } from "react-router-dom";
import styles from "./style.module.scss";
import Loading from "components/Loading";

const Feed = (props, context) => {
    if ( props.loading ) {
        return <LodingFeed />;
    }else if( props.feed ){
        return <RenderFeed {...props} />;
    }
};

const LodingFeed = (props, context) => (
    <div className={styles.feed}>
        <Loading />
    </div>
);

const RenderFeed = (props, context) => (
    <div className={styles.feed}>
        {props.feed.map(post => post.caption)}
    </div>
);

Feed.proptypes = {
    loading: Proptypes.bool.isRequired        
};

export default Feed;