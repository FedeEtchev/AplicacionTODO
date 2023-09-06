import React from "react";
import ReactDOM  from "react-dom";
import './Modal.css';

function Modal({children}){
    return ReactDOM.createPortal(
        <div className="ModalBackground">
            {children}
        </div>,
        //Lo envia a un div que tiene la id 'modal'
        document.getElementById('modal')    
    )
}

export {Modal};