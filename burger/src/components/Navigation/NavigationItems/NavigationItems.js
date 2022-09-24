import React from 'react'
import Styles from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

const NavigationItems = () => {
    return (
        <ul className={Styles.NavigationItems}>
            <NavigationItem link="/" active={true }>Burger Builder</NavigationItem>
            <NavigationItem  >Checkout</NavigationItem>
        </ul>
    )
};

export default NavigationItems