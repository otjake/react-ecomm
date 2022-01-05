import React, { Fragment } from "react";
import ReactDOM from "react-dom"; //to access react portals

import design from "./Modal.module.css"

const Backdrop = props => {
    return <div className={design.backdrop} />
}

const ModalOverlay = props => {
    return <div className={design.modal}>
        <div className={design.content}>
            {props.children}
        </div>
    </div>
}

//getting where to place the modal
//the div with overlay id is in public/index.html above div with is root
const portalElement = document.getElementById('overlay')

const Modal = props => {
    return (
        <Fragment>
        {ReactDOM.createPortal(<Backdrop />,portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}

        </Fragment>
    )
}

export default Modal

