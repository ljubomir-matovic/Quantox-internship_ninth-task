import React, { useRef, useEffect } from "react";
import "./Modal.css";
import icon from "../images/icon-close.svg";
function Modal({ show, onClose }) {
    const modalRef = useRef(null);
    useEffect(() => {
        if (!show) {
            modalRef.current.classList.add("hide");
        } else {
            modalRef.current.classList.remove("hide");
        }
    }, [show]);
    function outerClose(e) {
        if (e.target.className == "modal-container") {
            onClose();
        }
    }
    return (
        <section
            ref={modalRef}
            className="modal-container"
            onClick={outerClose}
        >
            <section className="modal">
                <section className="modal-header">
                    <h1>Cart</h1>
                    <img
                        className="icon-close"
                        onClick={onClose}
                        alt="close"
                        src={icon}
                    />
                </section>
            </section>
        </section>
    );
}
export default Modal;
