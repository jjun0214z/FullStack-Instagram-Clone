import React from 'react';
import Textarea from "react-textarea-autosize";
import styles from "./style.module.scss";

const CommentBox = (props, context) => (
    <form>
        <Textarea
            className={styles.textarea}
            placeholder="댓글을 입력하세요..."
        />
    </form>
);

export default CommentBox;