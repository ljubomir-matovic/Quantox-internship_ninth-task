import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import home from "images/home-solid.svg";
import cart from "images/shopping-cart-solid.svg";
function Header() {
    let cartProducts = useSelector((state) => state.cart);
    return (
        <nav>
            <section className="home-icon-container">
                <Link to="/home">
                    <img className="icon" src={home} alt="home-icon" />
                </Link>
            </section>
            <section className="cart-icon-container">
                <Link to="/cart">
                    <img className="icon" src={cart} alt="cart-icon" />
                    {cartProducts.length !== 0 ? (
                        <section className="number-of-products">
                            {cartProducts.length > 100
                                ? "99+"
                                : cartProducts.length}
                        </section>
                    ) : null}
                </Link>
            </section>
        </nav>
    );
}
export default Header;
