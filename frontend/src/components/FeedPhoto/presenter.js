import React from 'react';
import Proptypes from 'prop-types';
import styles from "./style.module.scss";
import PhotoActions from 'components/PhotoActions';
import PhotoComments from 'components/PhotoComments';
import TimeStamp from 'components/TimeStamp';
import CommentBox from 'components/CommentBox';

const FeedPhoto = (props, context) => {
    return (
        <div className={styles.feedPhoto}>
            <div className={styles.head}>
                <div className={styles.profileImg}>
                    <img 
                        src={props.creator.profile_image || require("images/img_noprofile.jpg") }
                        alt={props.creator.username} 
                    />
                </div>
                <div className={styles.profileInfo}>
                    <p className={styles.username}>{props.creator.username} </p>
                    <p className={styles.location}>{props.location}</p>
                </div>
            </div>
            <div className={styles.photo}>
                <img 
                    src={props.file}
                    alt={props.caption} 
                />
            </div>
            <div className={styles.photoExtra}>
                <PhotoActions 
                    number={props.like_count} 
                    isLiked={props.is_liked}
                    photoId={props.id}
                />
                <PhotoComments 
                    caption={props.caption}
                    creator={props.creator.username}
                    comments={props.comments}
                />
                <TimeStamp 
                    time={props.natural_time}
                />
                <CommentBox />
            </div>
        </div>
    );
};

FeedPhoto.proptypes = {
    creator: Proptypes.shape({
        profile_image: Proptypes.string.isRequired, 
        username: Proptypes.string.isRequired
    }).isRequired,
    location: Proptypes.string.isRequired,
    file: Proptypes.string.isRequired,
    like_count: Proptypes.number.isRequired,
    caption: Proptypes.string.isRequired,
    comments: Proptypes.arrayOf(
        Proptypes.shape({
            creator: Proptypes.shape({
                profile_image: Proptypes.string.isRequired, 
                username: Proptypes.string.isRequired
            }).isRequired,
            message: Proptypes.string.isRequired
        }).isRequired
    ).isRequired,
    natural_time: Proptypes.string.isRequired,
    is_liked: Proptypes.bool.isRequired
}

export default FeedPhoto;