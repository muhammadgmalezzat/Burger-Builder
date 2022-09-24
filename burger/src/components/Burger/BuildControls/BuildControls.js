import React from 'react'
import styles from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl';

const BuildControls = ({ ingredientAdded,ingredientRemoved,ingredientsArray ,price ,orderHandle,lessHandle,purchasingHandle}) => {
    
    return (

        <div className={styles.BuildControls}>
            <h1> Price : <strong>{ price.toFixed(2)} $</strong> </h1>

            {
                ingredientsArray.map((lablename, index) => {
                    return (<BuildControl
                        key={index}
                        lable={lablename.name}
                        added={() => ingredientAdded(lablename.name)}
                        removed={() => ingredientRemoved(lablename.name)}
                        lessHandle={lessHandle(lablename)}
                        cost={lablename.cost}
                    />)
                })
            }
            <button className={styles.OrderButton} disabled={orderHandle(ingredientsArray)} onClick={purchasingHandle}>Order Now</button>
        </div>
    )
};

export default BuildControls