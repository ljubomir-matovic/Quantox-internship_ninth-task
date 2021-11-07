import { actions } from "actions";
import React from "react";
import { useDispatch } from "react-redux";
function CartItem({ data }) {
    const dispatch = useDispatch();
    return (
        <section className="item">
            <header>
                <h2>{data.title}</h2>
            </header>
            <main>
                <p className="category">Price for one item</p>
                <h2>{`$${data.price.toFixed(2)}`}</h2>
            </main>
            <main style={{ borderBottom: "1px solid var(--text-color)" }}>
                <p className="category">Number of items</p>
                <h2>{`${data.count}`}</h2>
            </main>
            <main>
                <p className="category">Total</p>
                <h2>{`$${(data.count * data.price).toFixed(2)}`}</h2>
            </main>
            <section className="add-remove-container">
                <button
                    onClick={() =>
                        dispatch(actions.cartActions.decrementCartItem(data))
                    }
                    style={{ backgroundColor: "red" }}
                >
                    -
                </button>
                <button
                    onClick={() =>
                        dispatch(actions.cartActions.incrementCartItem(data))
                    }
                    style={{ backgroundColor: "green" }}
                >
                    +
                </button>
            </section>
            <section className="remove-button">
                <button
                    onClick={() =>
                        dispatch(actions.cartActions.removeFromCart(data))
                    }
                >
                    <img
                        src="https://img.icons8.com/ios-glyphs/30/000000/trash--v1.png"
                        alt="trash-bin"
                    />
                    Remove item
                </button>
            </section>
        </section>
    );
}
export default CartItem;
