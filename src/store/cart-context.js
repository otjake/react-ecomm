import React from "react";

const CartContext = React.createContext({
    items :[],
    totalAmount : 0,
    addItem : (item) => {},
    removeItem : (id) => {}
})
//we could add the CartContext provider here or in 
//another file to have one point where the provider value passed and used instead of 
//calling it everywhere along with the functions 
//addItemToCartHAndler, removeItemFromCartHandler which are assigned to addItem and removeItem
//having CartContextProvider make it easy to have all the states,reducers and function for this context at a point
export default CartContext