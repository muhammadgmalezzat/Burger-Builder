import React from 'react';
import styles from './BuildControl.module.css';

const BuildControl = ({ added, lable, removed,cost ,lessHandle}) => {

    return (
        <div className={styles.BuildControl}>
            <div  className={styles.Label}>{lable}</div>
            <button className={styles.Less} onClick={removed} disabled={lessHandle}>less</button>
            <button className={styles.More} onClick={added}>more</button>
            <h3>Cost : {cost} $</h3>
        </div>
    )
};

export default BuildControl