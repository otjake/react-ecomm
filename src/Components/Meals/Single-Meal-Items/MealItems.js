import React, { useContext } from 'react';
import design from './MealItems.module.css'
import CartContext from '../../../store/cart-context';
import MealItemForm from './Meal-Item-Form/MealItemForm';
const MealItem = props => {
    const cartCtx = useContext(CartContext)
    const formatPrice = `$${props.price.toFixed(2)}`;

    const addToCartHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            price: props.price,
            amount: amount
        })
    }
    return (
        <li className={design.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={design.description}>{props.description}</div>
                <div className={design.price}>{formatPrice}</div>
            </div>
            <div>
                <MealItemForm
                    onAddToCart={addToCartHandler}
                />
            </div>
        </li>
    )
}

export default MealItem