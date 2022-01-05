import React, { useReducer } from "react";
import CartContext from "./cart-context";

//with this we have a centralised point for all the 
//functions that apply changes to the cart context
//and anywhere its needed can all share this component and its functions
//instead of individually creating functions and logic
//at each point it is needed
//serving as a wrapper to all points the context is needed

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {

    if (action.type === "ADD_ITEM_TO_CART") {

        const updatedTotalAmount = state.totalAmount + (action.item.price * action.item.amount)

        //findIndex checks if the id of item added exist in the already existing cart items or state items
        //if it does ,it returnd index of the item else returns -1,since array or cannot have an index or -1
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        )
        console.log('findIndex', existingCartItemIndex)

        const existingItem = state.items[existingCartItemIndex];
        let currentCartStateItems; //to hold new array of state items to avoid mutating the state

        //if item exist usin spread operater pull our the contents of the existing item object
        //and update the amount
        if (existingItem) {
            const updatedExistingItem = {
                ...existingItem,
                amount: existingItem.amount + action.item.amount
            }
            currentCartStateItems = [...state.items] //create a new array of state items to avoid mutating the state
            currentCartStateItems[existingCartItemIndex] = updatedExistingItem //insert updated existing item to current state
        } else {
            //if item does not exist or if item add does not previously exist
            //concat  creates a new array adding a new items to the old items in the previous array
            //instead of using push which mutates the item
            currentCartStateItems = state.items.concat(action.item);
        }

        return {
            items: currentCartStateItems,
            totalAmount: updatedTotalAmount
        }
    }

    if (action.type === "REMOVE_ITEM_FROM_CART") {
        //concat creates a new array adding a new items to the old items in the previous array
        //instead of using push which mutates the item

        //findIndex checks if the id of item added exist in the already existing cart items or state items
        //if it does ,it returnd index of the item else returns -1,since array or cannot have an index or -1
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.id
        )
        console.log('findIndex', existingCartItemIndex)

        const existingItem = state.items[existingCartItemIndex];

        const updatedTotalAmount = state.totalAmount - existingItem.price //decreases by price of one item

        let currentCartStateItems; //to hold new array of state items to avoid mutating the state

        //if item exist usin spread operater pull our the contents of the existing item object
        //and update the amount
        if (existingItem.amount === 1) {
            currentCartStateItems = state.items.filter(item => item.id !== action.id);
        } else {
            //if item has a qty or amount > 1
            const updatedExistingItem = {
                ...existingItem,
                amount: existingItem.amount - 1
            }
            currentCartStateItems = [...state.items] //create a new array of state items to avoid mutating the state
            currentCartStateItems[existingCartItemIndex] = updatedExistingItem //insert updated existing item to current state
        }

        return {
            items: currentCartStateItems,
            totalAmount: updatedTotalAmount
        }
    }

    return defaultCartState;
}
const CartContextProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    const addItemToCartHAndler = item => {
        dispatchCartAction({ type: "ADD_ITEM_TO_CART", item: item })
        console.log('cart items from provider addItemToCartHAndler', cartState)
    }

    const removeItemFromCartHandler = id => {
        dispatchCartAction({ type: "REMOVE_ITEM_FROM_CART", id: id })
        console.log('cart items from provider removeItemFromCartHandler', cartState)

    }

    //cartObject being passed to the context value
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHAndler,
        removeItem: removeItemFromCartHandler
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;