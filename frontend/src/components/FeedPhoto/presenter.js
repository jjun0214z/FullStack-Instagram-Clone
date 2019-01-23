import React from 'react';
import PropTypes from 'prop-types';
import styles from "./style.module.scss";
import PhotoActions from 'components/PhotoActions';
import PhotoComments from 'components/PhotoComments';
import TimeStamp from 'components/TimeStamp';
import CommentBox from 'components/CommentBox';
import UserList from 'components/UserList';

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
                    openLikes={props.openLikes}
                />
                <PhotoComments 
                    caption={props.caption}
                    creator={props.creator.username}
                    comments={props.comments}
                />
                <TimeStamp 
                    time={props.natural_time}
                />
                <CommentBox photoId={props.id} />
            </div>
            {props.seeingLikes && (
                <UserList 
                    title={"Likes"} 
                    closeLikes={props.closeLikes}
                    userList={props.likes}
                />
            )}
        </div>
    );
};

FeedPhoto.propTypes = {
    creator: PropTypes.shape({
        profile_image: PropTypes.string.isRequired, 
        username: PropTypes.string.isRequired
    }).isRequired,
    location: PropTypes.string.isRequired,
    file: PropTypes.string.isRequired,
    like_count: PropTypes.number.isRequired,
    caption: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            creator: PropTypes.shape({
                profile_image: PropTypes.string.isRequired, 
                username: PropTypes.string.isRequired
            }).isRequired,
            message: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    natural_time: PropTypes.string.isRequired,
    is_liked: PropTypes.bool.isRequired,
    seeingLikes: PropTypes.bool.isRequired,
    closeLikes: PropTypes.func.isRequired,
    openLikes: PropTypes.func.isRequired,
    likes: PropTypes.arrayOf(
        PropTypes.shape({
            profile_image: PropTypes.string.isRequired,
            username: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        }).isRequired
    )
}

export default FeedPhoto;