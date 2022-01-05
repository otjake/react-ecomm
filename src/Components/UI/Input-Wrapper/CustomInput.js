import React from "react";
import design from "./CustomInput.module.css"

const CustomInput = React.forwardRef((props, ref) => {
    return (
        <div className={design.input} >
            <label htmlFor={props.input.id} > {props.label} </label>
            <input ref = {ref} {...props.input} />
        </div>

    )
});

export default CustomInput;