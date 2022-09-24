import React, { Component } from 'react'
import Auxiliary from '../../HOC/auxiliary';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

class BurgerBuilder extends Component {
    state = {
        ingredients: [
            { name: "salad", quantity: 0, cost: 5 },
            { name: "bacon", quantity: 0, cost: 5 },
            { name: "cheese", quantity: 0, cost: 5 },
            { name: "meat", quantity: 0, cost: 20 }
            ],
        totalPrice: 0,
        purchasable: false,
        purchasing:false
    };

    addIngredientHandler = async (gredientName) => {
        const ingrgientArrayCopy = this.state;
        for (let i = 0; i < ingrgientArrayCopy.ingredients.length; i++){
            if (ingrgientArrayCopy.ingredients[i].name === gredientName) {
                ingrgientArrayCopy.ingredients[i].quantity += 1;
                ingrgientArrayCopy.totalPrice += ingrgientArrayCopy.ingredients[i].cost;
            }
        }
        await this.setState(ingrgientArrayCopy);
    };

    removeIngredientHandler = async (gredientName) => {
        const ingrgientArrayCopy = this.state;
        for (let i = 0; i < ingrgientArrayCopy.ingredients.length; i++){
            if (ingrgientArrayCopy.ingredients[i].name === gredientName) {
                if (ingrgientArrayCopy.ingredients[i].quantity > 0) {
                    ingrgientArrayCopy.ingredients[i].quantity -= 1;
                    ingrgientArrayCopy.totalPrice  -= ingrgientArrayCopy.ingredients[i].cost;
                } else {
                    return;
                }
            }
        }
        await this.setState(ingrgientArrayCopy);
    };

    disableHandle = (ingredArray) => {
        const orderCheck = ingredArray.filter((item) => item.quantity > 0);
        const stat = orderCheck.length > 0 ? false : true;
        //console.log(stat);
        //this.setState({purchasable: !true})
        return stat
    }

    disableLess = (ingredArrayElement) => { 
        return ingredArrayElement.quantity >0 ?false : true;
    }


    handlePurchasing = () => {
        console.log("clicked")
        this.setState({ purchasing: true });
        console.log(this.state.purchasing);
    }

    purchaseCancelHandle = () => {
        this.setState({ purchasing: false });
    }

    purchaseContinueHandle = () => { 
        alert("Continue");
    }

    render() {
        return (
            <Auxiliary>
                <h1>Burger Preview</h1>
                <Burger ingredientsFromBuilderBurger={this.state.ingredients} />

                < Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandle}>
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        totalPrice={this.state.totalPrice}
                        purchaseCancel={this.purchaseCancelHandle}
                        purchaseContinue={this.purchaseContinueHandle}
                    />
                </Modal>
                
                <h1>Build Controls</h1>
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    ingredientsArray={this.state.ingredients}
                    price={this.state.totalPrice}
                    orderHandle={this.disableHandle}
                    lessHandle={this.disableLess}
                    purchasingHandle={this.handlePurchasing}
                />
                <div>model</div>

            </Auxiliary>
    )
    }


};

export default BurgerBuilder;