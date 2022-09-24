import React from 'react'
import Auxiliary from '../../../HOC/auxiliary';
import Button from '../../../components/UI/Button/Button'

const OrderSummary = ({ ingredients,totalPrice ,purchaseCancel,purchaseContinue}) => {
    console.log({ingredients})

    return (
        <Auxiliary>
            <div>OrderSummary</div>
            <h3>Your Order</h3>
            <p>A Delicious Burger With the following ingredient: </p>
            <ul>
                {
                    ingredients.map((ingredient, index) => {
                        return <li key={index}>{ingredient.name} : {ingredient.quantity }</li>
                    })
                }
            </ul>
            <h2>Check : { totalPrice.toFixed(2) } $</h2>
            <p>continue to Cheack out?</p>
            <Button btnType="Danger" clicked={purchaseCancel}>Cancel</Button>
            <Button btnType="Success" clicked={purchaseContinue}>Continue</Button>
        </Auxiliary>

    )
};

export default OrderSummary