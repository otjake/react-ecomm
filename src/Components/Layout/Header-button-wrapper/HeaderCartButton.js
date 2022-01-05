import React,{useContext,useEffect,useState} from "react";
import CartContext from "../../../store/cart-context";
import design from "./HeaderCartButton.module.css"
import CartIcon from "../../Cart-Wrapper/CartIcon";

const HeaderCartButton = props => {
    const [bumbCartButton,setBumpCartButton] = useState(false)
    const cartCtx = useContext(CartContext)

    //count individual items withing the items array
    // let numberOfCartItems = cartCtx.items.length 

    let {items} = cartCtx
    let numberOfCartItems = items.reduce((currentNum, currentItem) => {
        return currentNum + currentItem.amount
    }, 0)

    const cartBtnClass = `${design.button} ${bumbCartButton ? design.bump : ''}`

    useEffect(()=>{
        if(items.length === 0){
            return
        }
        setBumpCartButton(true);

        const buttonBumpTimer = setTimeout(() => {
            setBumpCartButton(false);
        }, 300);

        return () => {
            clearTimeout(buttonBumpTimer)
        }

    },[items])

    console.log('from header button',numberOfCartItems)

    return (
    <button className={cartBtnClass} onClick={props.onClick}>
        <span className={design.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={design.badge}>{numberOfCartItems}</span>
    </button>
    )
}

export default HeaderCartButton;