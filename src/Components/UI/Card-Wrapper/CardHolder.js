import React from "react";
import design from "./CardHolder.module.css"

const CardHolder = props => {
    return (
        <div className={design.card}>
            {props.children}
        </div>
    )
}

export default CardHolder;