import React from 'react';
import Proptypes from 'prop-types';
import styles from "./style.module.scss";
import Loading from "components/Loading";
import FeedPhoto from "components/FeedPhoto";

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
        {props.feed.map(photo => <FeedPhoto {...photo} key={photo.id} />)}
    </div>
);

Feed.proptypes = {
    loading: Proptypes.bool.isRequired        
};

export default Feed;