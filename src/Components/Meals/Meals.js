import React,{ Fragment } from "react";

import MealsHeaderText from "./Meals-Header-text/MealsHeaderText";
import AvailableMeals from "./Avalilable-Meals/AvailableMeals";

const Meals = () => {
    return (
        <Fragment>
            <MealsHeaderText />
            <AvailableMeals />
        </Fragment>
    )
}

export default Meals