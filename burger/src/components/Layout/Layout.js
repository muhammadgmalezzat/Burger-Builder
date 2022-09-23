import React from 'react'
import Auxiliary from '../../HOC/auxiliary';
import styles from './Layout.module.css';
const Layout = (props) => {
    return (
        <Auxiliary>
            <div className={styles.Content}> toolbar ,side drawer ,backdrop </div>
            <main>
                {props.children}
            </main>
        </Auxiliary>
    )
};

export default Layout