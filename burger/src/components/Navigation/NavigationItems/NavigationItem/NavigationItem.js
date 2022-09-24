import React from 'react'
import Styles from './NavigationItem.module.css'

const NavigationItem = (props) => {
    return (
        <li className={Styles.NavigationItem}>
            <a
                href={props.link}
                className={props.active ? Styles.active : null}
            >{props.children}</a>
        </li>
    )
};

export default NavigationItem