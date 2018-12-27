import React from 'react';
import Proptypes from 'prop-types';
import styles from "./style.module.scss";

const PhotoComments = props => (
    <div>
        <ul>
            <Comments
                username={props.creator}
                comment={props.caption}
            />
            {
                props.comments.map(comment => (
                    <Comments
                        username={comment.creator.username}
                        comment={comment.message}
                        key={comment.id}
                    />                        
                ))
            }
        </ul>
    </div>
);

const Comments = props => (
    <li>
        <span>{props.username}</span>
        <span>{props.comment}</span>
    </li>
);

PhotoComments.prototype = {
    creator: Proptypes.shape({
        profile_image: Proptypes.string.isRequired, 
        username: Proptypes.string.isRequired
    }).isRequired,
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
};

export default PhotoComments;