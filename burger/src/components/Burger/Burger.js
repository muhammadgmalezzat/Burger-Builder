import React from 'react'
import styles from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';


const Burger = ({ingredientsFromBuilderBurger}) => {
    let gredients = [];
    // eslint-disable-next-line no-lone-blocks
    {
        ingredientsFromBuilderBurger.map((ingredient) => {
        for (var i = 0; i < ingredient.quantity; i++){gredients.push(ingredient.name );}
        return (gredients)
        })
    }
    return (
        <div className={styles.Burger}>
            <BurgerIngredient type="bread-top" />
            {
                gredients.length>0?(gredients.map((ingredient, index) => {
                    return (
                        <BurgerIngredient key={index} type={ingredient} />
                    )
                })):<h1>Add ingredients 😋</h1>
            }
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
};

export default Burger;