import React from 'react';
import Proptypes from 'prop-types';
import styles from "./style.module.scss";

const CommentBox = (props, context) => (
    <form>
        <textarea
            placeholder="댓글을 입력하세요..."
        />
    </form>
);

CommentBox.proptypes = {
    
}

export default CommentBox;