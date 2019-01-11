import React from 'react';
import PropTypes from 'prop-types';
import Textarea from "react-textarea-autosize";
import styles from "./style.module.scss";

const CommentBox = (props, context) => (
    <form>
        <Textarea
            className={styles.textarea}
            placeholder="댓글을 입력하세요..."
            value={props.comment}
            onChange={props.handleInputChanage}
            onKeyPress={props.handleKeyPress}
        />
    </form>
);

CommentBox.protoTypes = {
    handleInputChanage: PropTypes.func.isRequired,
    handleKeyPress: PropTypes.func.isRequired,
    comment: PropTypes.string.isRequired,
    photoId: PropTypes.number.isRequired
};

export default CommentBox;