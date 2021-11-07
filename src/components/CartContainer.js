import { actions } from "actions";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
function CartContainer() {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    return (
        <section className="cart-container">
            {cart.length ? (
                <React.Fragment>
                    <section className="items-container">
                        {cart.products.map((v, i) => (
                            <CartItem data={v} key={i} />
                        ))}
                    </section>
                    <section className="total-amount">
                        Total price<p>{`$${cart.sum.toFixed(2)}`}</p>
                    </section>
                    <section className="remove-button">
                        <button
                            onClick={() =>
                                dispatch(actions.cartActions.removeAll())
                            }
                        >
                            <img
                                src="https://img.icons8.com/ios-glyphs/30/000000/trash--v1.png"
                                alt="trash-bin"
                            />
                            EMPTY CART
                        </button>
                    </section>
                </React.Fragment>
            ) : (
                <section className="item">
                    <h1>You have no items in your shopping cart!</h1>
                </section>
            )}
        </section>
    );
}
export default CartContainer;
