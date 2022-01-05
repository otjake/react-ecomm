import React, { useRef, useState } from "react";
import design from "./MealItemForm.module.css"
import CustomInput from "../../../UI/Input-Wrapper/CustomInput";

const MealItemForm = props => {
    //to get amount entered from the input form in CustomInput
    //we use ref and forward ref
    const [amountIsValid, setAmountIsValid] = useState(true)
    const amountEntered = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
        //forward ref value is usually a string
        const enteredAmountForwarded = amountEntered.current.value;
        const enteredAmountNumber = +enteredAmountForwarded;


        if (enteredAmountForwarded.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
            setAmountIsValid(false)
            return;
        }else{
            props.onAddToCart(enteredAmountNumber)
        }

    }


    return (
        <form className={design.form} onSubmit={submitHandler}>
            <CustomInput
                ref={amountEntered}
                label="Amount"
                input={{
                    id: 'amount',
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1'
                }}
            />
            <button>+ Add</button>
            {!amountIsValid && <p>Enter an amount between 1-5</p>}
        </form>
    )
}

export default MealItemForm