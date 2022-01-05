import React, { useContext } from "react";
import Modal from "../UI/Modal-Overlay/Modal";
import CartItem from "./Cart-items-wrapper/CartItem";
import design from "./Cart.module.css"
import CartContext from "../../store/cart-context";

const Cart = props => {
    const cartCtx = useContext(CartContext)

    const grossTotalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
    const hasItems = cartCtx.items.length > 0

    
    const cartItemAddHandler = (item) =>{
        //adding items with an amount of 1
        cartCtx.addItem({...item,amount : 1})
    }

    const cartItemRemoveHandler = (id) =>{
        cartCtx.removeItem(id)
    }

    const items = (
        <ul className={design['cart-items']}>
            {cartCtx.items.map(item => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    price={item.price}
                    amount={item.amount}
                    onRemoveItem={cartItemRemoveHandler.bind(null, item.id)}
                    onAddItem={cartItemAddHandler.bind(null, item)}
                />
                //bind here preconfigures arguenments a function should work with
            ))}
        </ul>
    )

    return (
        <Modal>
            {items}
            <div className={design.total}>
                <span>Total Amount</span>
                <span>{grossTotalAmount}</span>
            </div>
            <div className={design.actions}>
                <button className={design['button--alt']} onClick={props.onClose}>Close</button>
                {hasItems && <button className={design.button}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart