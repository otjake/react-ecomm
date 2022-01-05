import React from "react";
import design from "./MealsHeaderText.module.css"

const MealsHeaderText = props => {
    return (
    <section className={design.summary}>
        <h2> Food to die for </h2>
        <p>
            Get meals and keep getting, Don't stop till you drop 
            and enjoy delicious meals from the comfort of your home,
            so you don't die on us.
        </p>
        <p>
            Meals are specially made to suit your taste buds,
            but hurt your stomach.
        </p>
        <span> Death is inevitable </span>
    </section>
)

}

export default MealsHeaderText;