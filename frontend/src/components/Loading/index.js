import React from 'react';
import styles from "./style.module.scss";

const Loading = props => (
    <div className={styles.container}>
        <img 
            className={styles.spinner} 
            src={require("images/loading.png")} 
            alt="loading"
        />  
    </div>
);

export default Loading;

