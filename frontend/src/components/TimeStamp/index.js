import React from 'react';
import Proptypes from 'prop-types';
import styles from "./style.module.scss";

const TimeStamp = props => (
    <p className={styles.time}>{props.time}</p>    
);

TimeStamp.prototype = {
    time: Proptypes.string.isRequired
};

export default TimeStamp;