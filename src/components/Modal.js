import React, { useRef, useEffect } from "react";
import "./Modal.css";
import icon from "images/icon-close.svg";
import info from "images/info-circle-solid.svg";
import { Link } from "react-router-dom";
function Modal({ show, onClose, name }) {
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
                    <img className="icon" src={info} alt="info" />
                    <img
                        className="icon-close"
                        onClick={onClose}
                        alt="close"
                        src={icon}
                    />
                </section>
                <section className="modal-content">
                    <h1>
                        <span>{name}</span> successfully added to your cart!
                    </h1>
                    <section className="modal-buttons">
                        <button onClick={onClose}>Close</button>
                        <Link to="/cart">
                            <button className="checkout" onClick={onClose}>
                                Go to Checkout
                            </button>
                        </Link>
                    </section>
                </section>
            </section>
        </section>
    );
}
export default Modal;
