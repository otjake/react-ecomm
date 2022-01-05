import React, { Fragment } from "react";
import bannerImage from "../../../assets/meals.jpg"
import classes from "./Header.module.css";
import HeaderCartButton from "../Header-button-wrapper/HeaderCartButton";

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>BelleFool</h1>
                <HeaderCartButton onClick={props.onOpen} />
            </header>
            <div className={classes['main-image']}>
                <img src={bannerImage} alt="Too much food for you" />
            </div>
        </Fragment>
    );
}

export default Header;